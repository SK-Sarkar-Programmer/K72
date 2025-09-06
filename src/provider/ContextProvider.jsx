import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useCallback, useMemo, useState } from "react";
import { useNavigate } from "react-router";
import { AppContext } from "../hooks/useAppContext";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ContextProvider = ({ children }) => {
  const [isNavigating, setIsNavigating] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = useCallback(
    (path) => {
      setIsNavigating(true);

      navigate(path);
    },
    [navigate]
  );

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
