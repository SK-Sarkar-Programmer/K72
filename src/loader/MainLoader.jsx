import { useCallback, useRef } from "react";
import useLoader from "../hooks/useLoader";
import useAppContext from "../hooks/useAppContext";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const MainLoader = () => {
  const mainContainerRef = useRef(null);
  const animationRef = useRef(null);

  const { isLoading } = useLoader({
    delay: 500,
    onError: (error) => console.error("Loading error", error),
  });
  const { isNavigating, setIsNavigating } = useAppContext();

  const handleCleanAnimation = useCallback(() => {
    if (animationRef.current) {
      animationRef.current.kill();
      animationRef.current = null;
    }
  }, []);

  useGSAP(() => {
    if (!mainContainerRef.current) return;

    gsap.set(mainContainerRef.current, { display: "block", opacity: 1 });
    gsap.set(".loader-line", { y: 0 });

    if (isLoading) {
      animationRef.current = gsap.timeline({
        onComplete: () =>
          gsap.set(mainContainerRef.current, { opacity: 0, display: "none" }),
      });

      animationRef.current.to(".loader-line", {
        y: "100%",
        stagger: {
          amount: -0.35,
        },
        duration: 0.55,
        ease: "sine.out",
      });
    } else if (isNavigating) {
      animationRef.current = gsap.timeline({
        onComplete: () => {
          gsap.set(mainContainerRef.current, { opacity: 0, display: "none" }),
            setIsNavigating(false);
        },
      });

      animationRef.current
        .from(".loader-line", {
          y: "-100%",
          stagger: {
            amount: -0.35,
          },
          duration: 0.55,
          ease: "sine.out",
        })
        .to(".loader-line", {
          y: "100%",
          stagger: {
            amount: -0.35,
          },
          duration: 0.55,
          ease: "sine.out",
        });
    } else {
      gsap.set(mainContainerRef.current, {
        opacity: 0,
        display: "none",
      });
    }

    return handleCleanAnimation;
  }, [isNavigating, setIsNavigating, handleCleanAnimation]);

  return (
    <div
      ref={mainContainerRef}
      className="fixed w-full h-svh z-40 overflow-hidden"
    >
      <div className="w-full h-full flex">
        <div className="loader-line w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 h-full bg-black"></div>
        <div className="loader-line w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 h-full bg-black"></div>
        <div className="hidden sm:block loader-line w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 h-full bg-black"></div>
        <div className="hidden sm:block loader-line w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 h-full bg-black"></div>
        <div className="hidden lg:block loader-line w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 h-full bg-black"></div>
      </div>
    </div>
  );
};

export default MainLoader;
