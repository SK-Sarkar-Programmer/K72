import { useRef } from "react";
import useLoader from "../hooks/useLoader";
import useAppContext from "../hooks/useAppContext";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const MainLoader = () => {
  const mainContainerRef = useRef(null);
  const animationRef = useRef(null);

  const { isLoading } = useLoader({
    delay: 300,
    onError: (error) => console.error("Loading error", error),
  });
  const { isNavigating, setIsNavigating } = useAppContext();

  useGSAP(() => {
    // Clear any previous animations
    if (animationRef.current) {
      animationRef.current.kill();
    }

    const container = mainContainerRef.current;
    if (!container) return;

    // Show the container initially
    gsap.set(container, {
      display: "block",
      opacity: 0,
    });

    if (isLoading) {
      // Red animation for loading
      animationRef.current = gsap
        .timeline()
        .to(container, {
          backgroundColor: "#ff0000",
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
        })
        .to(container, {
          opacity: 0,
          duration: 0.5,
          ease: "power2.in",
          delay: 0.3,
        })
        .set(container, {
          display: "none",
        });
    } else if (isNavigating) {
      // Green animation for navigation
      animationRef.current = gsap
        .timeline()
        .to(container, {
          backgroundColor: "#00ff00",
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
        })
        .to(container, {
          opacity: 0,
          duration: 0.5,
          ease: "power2.in",
          delay: 0.3,
          onComplete: () => {
            setIsNavigating(false);
          },
        })
        .set(container, {
          display: "none",
        });
    } else {
      // Hide container if neither loading nor navigating
      gsap.set(container, {
        display: "none",
        opacity: 0,
      });
    }
  }, [isLoading, isNavigating, setIsNavigating]);

  return (
    <div ref={mainContainerRef} className="fixed w-full h-svh bg-black"></div>
  );
};

export default MainLoader;
