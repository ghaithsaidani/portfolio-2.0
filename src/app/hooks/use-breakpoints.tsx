import { useMediaQuery } from '@/hooks/use-mediaQuery';


export const useBreakpoints = () => {
  const breakpoints = {
    isXs: useMediaQuery("(max-width: 499px)"),
    isSm: useMediaQuery("(min-width: 500px) and (max-width: 767px)"),
    isMd: useMediaQuery("(min-width: 768px) and (max-width: 1023px)"),
    isLg: useMediaQuery("(min-width: 1024px) and (max-width: 1279px)"),
    isXl: useMediaQuery("(min-width: 1280px) and (max-width: 1535px)"),
    is2Xl: useMediaQuery("(min-width: 1536px)"),
    active: "xs"
  };
  if (breakpoints.isXs) breakpoints.active = "xs";
  if (breakpoints.isSm) breakpoints.active = "sm";
  if (breakpoints.isMd) breakpoints.active = "md";
  if (breakpoints.isLg) breakpoints.active = "lg";
  if (breakpoints.isXl) breakpoints.active = "xl";
  if (breakpoints.is2Xl) breakpoints.active = "2xl";
  return breakpoints;
}
