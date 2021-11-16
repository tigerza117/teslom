import { Box, Stack } from "@mui/material";
import { BackgroundWrapper } from "@components/shared/Wrapper";
import { GalleryContainer, OrderNowBtn } from "@components/cybertruck/Components";

export function OrderNow() {
  return (
    <>
        <BackgroundWrapper
            style={{ backgroundColor: "black", height: "100vh"}}
        >
            <Box>
                <img
                    style={{
                        width: "867px",
                        height: "435px",
                        display: "block",
                        paddingLeft: "50rem",
                        paddingTop: "150px"
                    }}
                    src={"https://tesla-cdn.thron.com/delivery/public/image/tesla/c834642e-bd02-47d1-a16d-eddabd15ddb8/bvlatuR/std/1251x704/Cybertruck-Order-Hero-Global"}/>
            </Box>
            <Box>
                <img style={{
                    width: "200px",
                    height: "80px",
                    position: "relative",
                    bottom: "290px",
                    left: "360px"
                }} src={"https://tesla-cdn.thron.com/delivery/public/image/tesla/ec50302e-b850-44af-b51d-139a43751d88/bvlatuR/std/800x297/Cybertruck-Logo-Global"}/>
                <Box sx={{
                    position: "relative",
                    bottom: "16rem",
                    paddingRight: "60rem",
                }}>
                    <OrderNowBtn>ORDER NOW</OrderNowBtn>
                </Box>
            </Box>
        </BackgroundWrapper>
    </>
  );
}
