import { Box, Stack } from "@mui/material";
import { BackgroundWrapper } from "@components/shared/Wrapper";
import {
  MainTitleContent,
  SubContent,
  SubTitleContent,
} from "@components/shared/Title";
import { BtnOutline } from "@components/shared/Button";
import { RowSectionBlock } from "@components/shared/Section";

export function Utility() {
  return (
    <>
      <BackgroundWrapper style={{ backgroundColor: "#f5f5f5", height: "auto" }}>
        <RowSectionBlock
          style={{
            margin: "3rem auto 0 auto",
            width: "60%",
          }}
        >
          <Box style={{ width: "100%" }}>
            <Stack direction="column">
              <SubTitleContent>quod maxime placeat</SubTitleContent>
              <MainTitleContent>maxime placeat</MainTitleContent>
              <Box style={{ padding: "1rem 0" }}>
                <BtnOutline style={{ margin: "0" }}>Order now</BtnOutline>
              </Box>
            </Stack>
          </Box>
          <Box style={{ width: "100vw" }}>
            <SubContent>
              De carne lumbering animata corpora quaeritis. Summus brains sit​​,
              morbo vel maleficia? De apocalypsi gorger omero undead survivor
              dictum mauris. Hi mindless mortuis soulless creaturas, imo evil
              stalking monstra adventus resi dentevil vultus comedat cerebella
              viventium.
            </SubContent>
          </Box>
        </RowSectionBlock>
        <Box
          style={{
            margin: "0 auto",
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            padding: "2rem",
          }}
        >
          {/* carousel must be build in here*/}
          <Stack>
            <img
              src="https://tesla-cdn.thron.com/delivery/public/image/tesla/9e4a894d-e1ea-4c66-99f5-9881f3482ddc/bvlatuR/std/1920x1080/Model-Y-Utility-Desktop-NA-KR"
              alt=""
              loading="lazy"
              style={{
                width: "55vw",
                height: "auto",
                objectFit: "cover",
                objectPosition: "0 62%",
                margin: "auto",
                padding: ".5rem",
              }}
            />
            <SubTitleContent>quod maxime placeat</SubTitleContent>
          </Stack>
        </Box>
      </BackgroundWrapper>
    </>
  );
}
