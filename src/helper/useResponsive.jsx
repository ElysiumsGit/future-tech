// useResponsive.tsx
import { useMediaQuery } from "react-responsive";

export const useResponsive = () => {
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1224px)" });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTablet = useMediaQuery({ query: "(min-width: 768px) and (max-width: 1224px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });

  return {
    isDesktopOrLaptop,
    isBigScreen,
    isTablet,
    isMobile, 
    isPortrait,
    isRetina,
  };
};
