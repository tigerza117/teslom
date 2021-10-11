import { MainButton } from "./Button";
import React from "react";
import { Navbar } from "./Navbar";

interface Props {}

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <MainButton />
    </div>
  );
};
