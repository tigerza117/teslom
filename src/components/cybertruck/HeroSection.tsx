import { Box } from "@mui/material";
import { BackgroundWrapper } from "@components/shared/Wrapper";
import { TitleWrapper } from "@components/cybertruck/Components";
import {OrderNowBtn} from "@components/cybertruck/Components";

export function HeroSection() {
  return (
    <>
        <BackgroundWrapper
            sx={{
                backgroundImage: `url(https://www.tesla.com/xNVh4yUEc3B9/01_Main_Hero_Desktop.jpg)`,
            }}
        >
            <Box
                sx={{
                    width: "20%",
                    margin: "auto",
                    paddingTop: "8rem",
                }}
            >
                <img
                    loading="lazy"
                    src="https://i.imgur.com/6hFfw9f.png"
                    alt=""
                    style={{ width: "100%" }}
                />
            </Box>

            <TitleWrapper
                sx={{
                    color: "#ffffff",
                    paddingTop: "29rem",
                    letterSpacing: "0.188rem",
                    textShadow: "white 0px 0px 8px",
                    fontWeight: "Bold",
                    fontSize: "14px",
                }}
            >
                BETTER UTILITY THAN A TRUCK WITH MORE PERFORMANCE THAN A SPORTS CAR
            </TitleWrapper>
            <Box sx={{
                position: "relative",
                bottom: "53rem",
            }}>
                <OrderNowBtn>ORDER NOW</OrderNowBtn>
            </Box>
        </BackgroundWrapper>
    </>
  );
}
