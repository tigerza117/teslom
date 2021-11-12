import { Box, Stack } from "@mui/material";
import { BackgroundWrapper } from "@components/shared/Wrapper";
import { GalleryContainer } from "@components/cybertruck/Components";

export function OrderNow() {
  return (
    <>
      <BackgroundWrapper
        style={{ backgroundColor: "black", height: "100%", width: "100%" }}
      >
        <GalleryContainer
          style={{
            backgroundImage: `url(https://tesla-cdn.thron.com/delivery/public/image/tesla/c834642e-bd02-47d1-a16d-eddabd15ddb8/bvlatuR/std/1251x704/Cybertruck-Order-Hero-Global)`,
            height: "32vh",
            width: "80vh",
            marginRight: "0",
            padding: "0",
          }}
        ></GalleryContainer>
      </BackgroundWrapper>
    </>
  );
}
