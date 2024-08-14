import { theme } from "@src/theme/globals";
import { useLocation, useNavigate } from "react-router-dom";

export function useSideBar() {
  const location = useLocation();
  const navigate = useNavigate();

  function getIconColor(path: string) {
    if (path === location.pathname) {
      return theme.colors.primary[1];
    }
    return theme.colors.light[1];
  }

  function goTo(path: string) {
    return () => {
      navigate(path);
    };
  }

  return { getIconColor, goTo };
}
