import React from "react";

interface IButton {}

export const Button: React.FC<IButton> = ({ children }) => {
  return <button>{children}</button>;
};
