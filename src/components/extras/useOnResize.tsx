import { useEffect } from "react";
import useBeounce from "./useBeounce";

export default function useOnResize(
  fn: () => void,
  delay: number | null = null
): void {
  useEffect(() => {
    let action = fn;

    if (delay) {
      action = useBeounce(() => {
        fn();
      }, delay);
    }

    window.addEventListener("resize", action);
    return () => window.removeEventListener("resize", action);
  }, []);
}
