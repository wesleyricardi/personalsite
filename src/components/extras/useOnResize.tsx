import { useEffect } from "react";
import debounce from "./debounce";

export default function useOnResize(
  fn: () => void,
  delay: number | null = null
): void {
  useEffect(() => {
    let action = fn;

    if (delay) {
      action = debounce(() => {
        fn();
      }, delay);
    }

    window.addEventListener("resize", action);
    return () => window.removeEventListener("resize", action);
  }, []);
}
