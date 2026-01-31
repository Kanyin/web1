import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Always scroll to top on route change
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",// can change it to instant in the future
    });
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
