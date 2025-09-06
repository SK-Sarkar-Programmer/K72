import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { AppContext } from "../hooks/useAppContext";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ContextProvider = ({ children }) => {
  const [isNavigating, setIsNavigating] = useState(false);
  const navigateTimeoutRef = useRef(null);

  const navigate = useNavigate();

  const handleNavigate = useCallback(
    (path) => {
      setIsNavigating(true);

      if (navigateTimeoutRef.current) {
        clearTimeout(navigateTimeoutRef.current);
      }

      navigateTimeoutRef.current = setTimeout(() => {
        navigate(path);
      }, 650);
    },
    [navigate]
  );

  useEffect(() => {
    return () => {
      if (navigateTimeoutRef.current) {
        clearTimeout(navigateTimeoutRef.current);
      }
    };
  }, []);

  const value = useMemo(
    () => ({
      isNavigating,
      setIsNavigating,
      handleNavigate,
    }),
    [isNavigating, handleNavigate]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default ContextProvider;
