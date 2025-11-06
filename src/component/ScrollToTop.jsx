import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scrolls instantly to the top when route changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant" // use "smooth" for a gradual scroll
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
