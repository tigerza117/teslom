import { MainButton } from "./Button";
import React from "react";
import { Navbar } from "./Navbar";

interface Props {}

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div style={{ minHeight: "100vh" }}>
        <Session background="https://tesla-cdn.thron.com/delivery/public/image/tesla/06af56e3-91c4-4bad-8d2e-0a24f64ec2a8/bvlatuR/std/2880x1800/MS-Exterior-Hero-Desktop"/>
        <Session background="https://tesla-cdn.thron.com/delivery/public/image/tesla/325743a2-d187-4e28-91a3-5a2e47e317f7/bvlatuR/std/2880x1800/ModelX-Homepage-D"/>
        <Session background="https://tesla-cdn.thron.com/delivery/public/image/tesla/235e9193-899e-45f9-82d7-53837b32712e/bvlatuR/std/1226x562/lhd-interior-carousel-2-slide-3-desktop-1"/>
    </div>
  );
};

interface ISession {
    background: string
}

const Session: React.FC<ISession> = ({background}) => {
    return (
        <div
            style={{
                backgroundImage:
                    "url(" +
                    background +
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
    )
}
