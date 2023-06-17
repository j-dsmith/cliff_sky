import { useLayoutEffect, useState } from "react";

// /**
//  * Adds resize event listener to window and sets pageHeight state to window.innerHeight
//  * on change.
//  * @returns pageHeight
//  */
// export const usePageHeight = (
//   window: (Window & typeof globalThis) | undefined
// ): number => {

//   const [pageHeight, setPageHeight] = useState<number>(() => {
//     if (typeof window !== "undefined") {
//       return window.innerHeight;
//     }
//     return 0;
//   });

//   useEffect(() => {
//     const handleResize = () => {
//       setPageHeight(window.innerHeight);
//     };

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, [pageHeight, window]);

//   return pageHeight;
// };
export function usePageHeight() {
  const [height, setHeight] = useState<number>();

  useLayoutEffect(() => {
    const handleResize = () => {
      setHeight(window.innerHeight);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return height;
}
