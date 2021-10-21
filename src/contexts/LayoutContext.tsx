import { createContext, useContext } from "react";

interface ILayoutContext {
  isMobile: boolean;
  isDrawerOpen: boolean;
  toggleDrawer: () => void;
}

const LayoutContext = createContext<ILayoutContext>({
  isMobile: false,
  isDrawerOpen: false,
  toggleDrawer: () => {},
});

export default LayoutContext;

export const useLayoutContext = () => useContext(LayoutContext);
