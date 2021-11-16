import { createContext, useContext } from "react";

interface ILayoutContext {
  isMobile: boolean;
  isDrawerOpen: boolean;
  isDark: boolean;
  toggleDrawer: () => void;
  setDark: (isDark: boolean) => void;
  heroColor: string;
}

const LayoutContext = createContext<ILayoutContext>({
  isMobile: false,
  isDrawerOpen: false,
  isDark: false,
  toggleDrawer: () => {},
  setDark: () => {},
  heroColor: "white"
});

export default LayoutContext;

export const useLayoutContext = () => useContext(LayoutContext);
