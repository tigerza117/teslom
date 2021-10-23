import styled from "@emotion/styled";
import { ImageAspectRatio } from "@mui/icons-material";
import { Box } from "@mui/material";
import React from "react";

const BackgroundWrapper = styled(Box)(({ theme }) => ({
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  minHeight: "100vh",
}));

function ModelS() {
  return (
    <>
      <BackgroundWrapper
        sx={{
          backgroundImage: `url(https://tesla-cdn.thron.com/delivery/public/image/tesla/32e5e0f3-5c04-42ef-8f8f-c6b1c26f8a9e/bvlatuR/std/2880x1800/ms-main-hero-desktop)`,
        }}
      ></BackgroundWrapper>
      <BackgroundWrapper
        sx={{
          backgroundImage: `url(https://tesla-cdn.thron.com/delivery/public/image/tesla/177c0faf-b852-47ea-a218-394368e15a20/bvlatuR/std/2880x1800/MS-Interior-Hero-Desktop)`,
        }}
      ></BackgroundWrapper>
      <BackgroundWrapper
        style={{ backgroundColor: "black" }}
      ></BackgroundWrapper>
      <BackgroundWrapper style={{ backgroundColor: "white" }}>
        <img
          src="https://tesla-cdn.thron.com/delivery/public/image/tesla/06e710a1-0428-45e9-8945-580e80d77b55/bvlatuR/std/2880x1800/MS-Performance-Hero-Desktop"
          loading="lazy"
          style={{
            width: "100%",
            height: "75vh",
            objectFit: "cover",
          }}
        />
      </BackgroundWrapper>
      <BackgroundWrapper
        style={{ backgroundColor: "#f5f5f5" }}
      ></BackgroundWrapper>
      <BackgroundWrapper style={{ backgroundColor: "white" }}>
        <img
          src="https://tesla-cdn.thron.com/delivery/public/image/tesla/06af56e3-91c4-4bad-8d2e-0a24f64ec2a8/bvlatuR/std/2880x1800/MS-Exterior-Hero-Desktop"
          loading="lazy"
          style={{
            width: "100%",
            height: "75vh",
            objectFit: "cover",
          }}
        />
      </BackgroundWrapper>
      <BackgroundWrapper
        style={{ backgroundColor: "black" }}
      ></BackgroundWrapper>
      <BackgroundWrapper style={{ backgroundColor: "white" }}>
        <img
          src="https://tesla-cdn.thron.com/delivery/public/image/tesla/b6761e24-0f64-483a-b868-50c5bab803bd/bvlatuR/std/2880x1800/MS-Range-Hero-Desktop"
          loading="lazy"
          style={{
            width: "80vw",
            height: "100vh",
            objectFit: "cover",
          }}
        />
      </BackgroundWrapper>
      <BackgroundWrapper
        style={{ backgroundColor: "white" }}
      ></BackgroundWrapper>
      <BackgroundWrapper style={{ backgroundColor: "white" }}>
        <img
          src="https://tesla-cdn.thron.com/delivery/public/image/tesla/b7e5f13a-e8f8-4428-b29e-b2ba6cf5220b/bvlatuR/std/1920x1080/MS-Safety-Hero-Desktop"
          loading="lazy"
          style={{
            width: "80vw",
            height: "100vh",
            objectFit: "cover",
          }}
        />
      </BackgroundWrapper>
      <BackgroundWrapper style={{ backgroundColor: "white" }}>
        <video
          src="https://tesla-cdn.thron.com/delivery/public/video/tesla/65011bbb-6f1c-422e-9e7a-727ba24bad15/bvlatuR/WEBHD/autopilot"
          style={{
            width: "100%",
            height: "75vh",
            objectFit: "cover",
          }}
          autoPlay
          loop
          preload="auto"
        />
      </BackgroundWrapper>
      <BackgroundWrapper
        style={{ backgroundColor: "white" }}
      ></BackgroundWrapper>
      <BackgroundWrapper style={{ backgroundColor: "black" }}>
        <img
          src="https://tesla-cdn.thron.com/delivery/public/image/tesla/ea201786-4dec-4ca2-b266-c7a180443853/bvlatuR/std/1440x1080/MS-Specs-Hero-Desktop"
          loading="lazy"
          style={{
            width: "50vw",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </BackgroundWrapper>
      <BackgroundWrapper style={{ backgroundColor: "white" }}>
        <img
          src="https://tesla-cdn.thron.com/delivery/public/image/tesla/1c9e3fa8-7eba-4d75-bf00-03a3dbdd6d06/bvlatuR/std/1660x920/MS-Order-Hero-Desktop"
          loading="lazy"
          style={{
            width: "50vw",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </BackgroundWrapper>
    </>
  );
}

export default ModelS;
