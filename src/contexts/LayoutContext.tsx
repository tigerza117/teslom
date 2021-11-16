import { createContext, useContext } from "react";
import { ViewAction } from "schema/types";

interface ILayoutContext {
  isMobile: boolean;
  isDrawerOpen: boolean;
  isDark: boolean;
  toggleDrawer: () => void;
  setDark: (isDark: boolean) => void;
  heroColor: string;
  callViewAction: (a: ViewAction) => void;
}

const LayoutContext = createContext<ILayoutContext>({
  isMobile: false,
  isDrawerOpen: false,
  isDark: false,
  toggleDrawer: () => {},
  setDark: () => {},
  heroColor: "white",
  callViewAction: () => {},
});

export default LayoutContext;

export const useLayoutContext = () => useContext(LayoutContext);
