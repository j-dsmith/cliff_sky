import { useEffect, useState } from "react";

/**
 * Adds resize event listener to window and sets pageHeight state to window.innerHeight
 * on change.
 * @returns pageHeight
 */
export const usePageHeight = (): number => {
  const [pageHeight, setPageHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setPageHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [pageHeight]);

  return pageHeight;
};
