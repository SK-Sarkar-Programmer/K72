import { useEffect, useRef, useState } from "react";

const useLoader = (options = {}) => {
  const { delay = 0, onError } = options;
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const onErrorRef = useRef(onError);

  useEffect(() => {
    onErrorRef.current = onError;
  }, [onError]);

  useEffect(() => {
    let timeout;
    let isMounted = true;

    const handleLoadingComplete = () => {
      if (!isMounted) return;

      if (delay > 0) {
        timeout = setTimeout(() => setIsLoading(false), delay);
      } else {
        setIsLoading(false);
      }
    };

    const handleLoadingError = (event) => {
      if (!isMounted) return;

      const error = event?.error || new Error("Unknown Loading Error");
      setError(error);

      if (onErrorRef.current) {
        onErrorRef.current(error);
      }

      setIsLoading(false);
    };

    if (document.readyState === "complete") {
      handleLoadingComplete();
    } else {
      window.addEventListener("load", handleLoadingComplete);
      window.addEventListener("error", handleLoadingError);
    }

    return () => {
      isMounted = false;
      window.removeEventListener("load", handleLoadingComplete);
      window.removeEventListener("error", handleLoadingError);
      if (timeout) clearTimeout(timeout);
    };
  }, [delay]);
  return { isLoading, error };
};

export default useLoader;
