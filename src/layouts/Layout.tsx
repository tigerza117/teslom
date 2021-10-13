import { MainButton } from "./Button";
import React from "react";
import { Navbar } from "./Navbar";

interface Props {}

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <div
        style={{
          backgroundImage:
            "url(" +
            "https://tesla-cdn.thron.com/delivery/public/image/tesla/06af56e3-91c4-4bad-8d2e-0a24f64ec2a8/bvlatuR/std/2880x1800/MS-Exterior-Hero-Desktop" +
            ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100vh",
        }}
      >
        <Navbar />
        <MainButton />
      </div>
    </div>
  );
};
