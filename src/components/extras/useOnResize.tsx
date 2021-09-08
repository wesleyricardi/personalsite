import { useEffect } from "react";
import Beounce from "./Beounce";

const useOnResize = (fn: () => void, delay: number | null = null): void => {
  useEffect(() => {
    let action = fn;

    if (delay) {
      action = Beounce(() => {
        fn();
      }, delay);
    }

    window.addEventListener("resize", action);
    return () => window.removeEventListener("resize", action);
  }, []);
};

export default useOnResize;
