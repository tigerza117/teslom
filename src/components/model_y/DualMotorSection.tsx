import { Box, Stack } from "@mui/material";
import {
  BackgroundWrapper,
  HomeFeatureWrapper,
} from "@components/shared/Wrapper";
import {
  FeatureTitle,
  FeatureSubTitle,
  MainTitleContent,
  SubContent,
  SubTitleContent,
} from "@components/shared/Title";
import { BtnOutline } from "@components/shared/Button";

export function DualMotor() {
  return (
    <>
      <BackgroundWrapper style={{ backgroundColor: "white" }}>
        <img
          src="https://tesla-cdn.thron.com/delivery/public/image/tesla/48b20b9d-9322-4cf9-b079-44797fc32600/bvlatuR/std/0x0/AWD_hero@2"
          loading="lazy"
          style={{
            width: "100%",
            height: "70vh",
            objectFit: "cover",
            objectPosition: "0% 55%",
          }}
        />
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box sx={{ margin: "-10rem auto", padding: "1.8rem 0" }}>
            <Stack
              direction="row"
              spacing={8}
              textAlign="center"
              justifyContent="center"
            >
              <HomeFeatureWrapper style={{ width: "25%" }}>
                <FeatureTitle>evil stalking</FeatureTitle>
                <FeatureSubTitle>
                  imo evil stalking monstra adventus resi dentevil vultus
                  comedat cerebella viventium.
                </FeatureSubTitle>
              </HomeFeatureWrapper>
              <HomeFeatureWrapper style={{ width: "25%" }}>
                <FeatureTitle>evil stalking</FeatureTitle>
                <FeatureSubTitle>
                  imo evil stalking monstra adventus resi dentevil vultus
                  comedat cerebella viventium.
                </FeatureSubTitle>
              </HomeFeatureWrapper>
              <HomeFeatureWrapper style={{ width: "25%" }}>
                <FeatureTitle>evil stalking</FeatureTitle>
                <FeatureSubTitle>
                  imo evil stalking monstra adventus resi dentevil vultus
                  comedat cerebella viventium.
                </FeatureSubTitle>
              </HomeFeatureWrapper>
            </Stack>
          </Box>
        </Box>
        <Box sx={{ padding: "2rem" }}>
          <Stack
            direction="row"
            spacing={15}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box>
              <Stack direction="column">
                <SubTitleContent>lumbering </SubTitleContent>
                <MainTitleContent>rick grimes</MainTitleContent>
                <Box>
                  <BtnOutline>ORDER NOW</BtnOutline>
                </Box>
              </Stack>
            </Box>
            <Box width="45%">
              <SubContent>
                blue bottle waistcoat tbh semiotics artisan synth stumptown
                gastropub cornhole celiac swag. Brunch raclette vexillologist
                post-ironic glossier ennui XOXO mlkshk godard pour-over blog
                tumblr humblebrag
              </SubContent>
            </Box>
          </Stack>
        </Box>
      </BackgroundWrapper>
    </>
  );
}
