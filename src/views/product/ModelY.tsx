import styled from "@emotion/styled";
import { ImageAspectRatio } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import { height } from "@mui/system";
import React from "react";
import Chat from "@layouts/ChatSupport";
import ExpandingLight from "@layouts/ExpandIcon-light";

const BackgroundWrapper = styled(Box)(({ theme }) => ({
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  height: "100vh",
}));

const TitleWrapper = styled(Box)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  textAlign: "center",
  margin: "auto",
}));

const MainTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: "2.5rem",
  marginBottom: 0,
  color: "white",
  padding: 0,
  transform: "translateY(20px)",
}));

const MainSubTitle = styled("h5")(({ theme }) => ({
  fontWeight: 200,
  fontSize: "1.2rem",
  padding: "1.3rem 0",
}));

const FeatureTitle = styled(Typography)(({ theme }) => ({
  color: "white",
  fontWeight: 600,
  fontSize: "1.8rem",
}));

const FeatureSubTitle = styled(Typography)(({ theme }) => ({
  color: "white",
  fontWeight: 500,
  fontSize: "0.8rem",
}));

const OutlineBtnWhite = styled(Button)(({ theme }) => ({
  fontSize: ".8rem",
  padding: ".3rem 2.5rem",
  borderRadius: "25px",
  border: "3px solid white",
  boxShadow: "none",
  color: "white",
  marginTop: ".8rem",
  "&:hover": {
    backgroundColor: "white",
    color: "black",
  },
}));

const OutlineBtnBlack = styled(Button)(({ theme }) => ({
  fontSize: ".8rem",
  padding: ".3rem 2.5rem",
  borderRadius: "25px",
  border: "3px solid black",
  boxShadow: "none",
  color: "black",
  marginTop: ".8rem",
}));

const AdsTitle = styled(Typography)(({ theme }) => ({
  color: "white",
  fontWeight: 600,
  fontSize: "1.8rem",
  margin: "auto 0",
  "&::after": {
    content: '""',
    display: "block",
    position: "absolute",
    width: "100%",
    height: "40vh",
    marginTop: "2vh",
    background: "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgb(0, 0, 0, 0))",
  },
}));

const InfoFeature = styled(Box)(({ theme }) => ({
  margin: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "5rem 0",
}));

const GalleryContainer = styled(Box)(({ theme }) => ({
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  height: "45vh",
  width: "80vh",
}));

const InfoContainer = styled(Box)(({ theme }) => ({
  height: "45vh",
  width: "80vh",
  verticalAlign: "middle",
}));

const InfoTitle = styled(Typography)(({ theme }) => ({
  color: "white",
  fontWeight: 700,
  fontSize: ".9rem",
  padding: "6rem 0 0 0",
}));

const InfoSubTitle = styled(Typography)(({ theme }) => ({
  color: "white",
  fontWeight: 500,
  fontSize: "0.9rem",
}));

const MainTitleContent = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: "1.8rem",
  margin: 0,
  color: "#181b21",
  padding: 0,
}));

const SubTitleContent = styled("h5")(({ theme }) => ({
  fontWeight: 200,
  fontSize: "1.2rem",
  margin: "0",
  padding: "0",
}));

const SubContent = styled("h5")(({ theme }) => ({
  fontWeight: 400,
  fontSize: "1rem",
  margin: "0",
  padding: "0",
  color: "#393c41",
}));

const HomeFeatureWrapper = styled(Box)(({ theme }) => ({
  width: "190px",
  margin: "0",
  padding: "0",
}));

const RowSectionBlock = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",
  flexDirection: "row",
  textAlign: "left",
}));

function ModelY() {
  return (
    <>
      <Chat />
      <BackgroundWrapper
        sx={{
          backgroundImage: `url(https://tesla-cdn.thron.com/delivery/public/image/tesla/0cf18940-c0bf-45f7-b2d8-46c3bc693c65/bvlatuR/std/0x0/model-y_R1@2)`,
        }}
      >
        <TitleWrapper>
          <Box sx={{ marginTop: "12vh", marginBottom: "auto" }}>
            <Stack direction="column" spacing={-1}>
              <MainTitle>Model Y</MainTitle>
            </Stack>
          </Box>
          <Box margin="0 auto" display="flex">
            <Stack direction="column">
              <Box>
                <Stack direction="row" margin="auto">
                  <HomeFeatureWrapper>
                    <FeatureTitle>inferno</FeatureTitle>
                    <FeatureSubTitle>Zombie ipsum</FeatureSubTitle>
                  </HomeFeatureWrapper>
                  <HomeFeatureWrapper>
                    <FeatureTitle>inferno</FeatureTitle>
                    <FeatureSubTitle>Zombie ipsum</FeatureSubTitle>
                  </HomeFeatureWrapper>
                  <HomeFeatureWrapper>
                    <FeatureTitle>
                      <FeatureTitle>inferno</FeatureTitle>
                    </FeatureTitle>
                    <FeatureSubTitle>Zombie ipsum</FeatureSubTitle>
                  </HomeFeatureWrapper>
                  <HomeFeatureWrapper>
                    <OutlineBtnWhite>ORDER NOW</OutlineBtnWhite>
                  </HomeFeatureWrapper>
                </Stack>
              </Box>
              <Box>
                <ExpandingLight />
              </Box>
            </Stack>
          </Box>
        </TitleWrapper>
      </BackgroundWrapper>
      <BackgroundWrapper style={{ backgroundColor: "#f5f5f5" }}>
        <Box>
          <Stack direction="row">
            <Box>
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    padding: "3rem 0 0 2.5rem",
                  }}
                >
                  <SubTitleContent>At vero eos et</SubTitleContent>
                  <MainTitleContent>Itaque earum</MainTitleContent>
                  <SubContent style={{ padding: "3.5rem 0 0 0" }}>
                    cupiditate non provident, similique sunt in culpa qui
                    officia deserunt mollitia animi, id est laborum et dolorum
                    fuga. Et harum quidem rerum facilis est et expedita
                    distinctio. Nam libero tempore, cum soluta nobis est
                    eligendi optio cumque
                  </SubContent>
                </Box>
                <Box
                  style={{
                    padding: "10rem 0 0 2.5rem",
                  }}
                >
                  <Stack direction="row" spacing={1}>
                    <OutlineBtnBlack style={{ margin: "0" }}>
                      ORDER NOW
                    </OutlineBtnBlack>
                  </Stack>
                </Box>
              </Stack>
            </Box>
            <Box>
              <img
                src="https://www.tesla.com/themes/custom/tesla_frontend/components/images/safety-model-y-hero.png"
                alt=""
                loading="lazy"
                style={{
                  width: "75vw",
                  height: "100vh",
                  objectFit: "cover",
                  float: "right",
                }}
              />
            </Box>
          </Stack>
        </Box>
      </BackgroundWrapper>
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
                <OutlineBtnBlack style={{ margin: "0" }}>
                  Order now
                </OutlineBtnBlack>
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
                  <OutlineBtnBlack>ORDER NOW</OutlineBtnBlack>
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
      <BackgroundWrapper style={{ backgroundColor: "white" }}>
        <Box>
          <Stack direction="row">
            <Stack>
              <img
                src="https://tesla-cdn.thron.com/delivery/public/image/tesla/b6761e24-0f64-483a-b868-50c5bab803bd/bvlatuR/std/2880x1800/MS-Range-Hero-Desktop"
                loading="lazy"
                style={{
                  width: "70vw",
                  height: "100vh",
                  objectFit: "cover",
                }}
              />
              <Box sx={{ margin: "-10rem auto 0 auto" }}>
                <Stack
                  direction="row"
                  spacing={5}
                  sx={{
                    width: "55vw",
                    display: "flex",
                    justifyContent: "space-between",
                    paddingRight: "10vh",
                  }}
                >
                  <Box>
                    <Stack direction="column" spacing={1} textAlign="center">
                      <FeatureTitle>405 mi</FeatureTitle>
                      <FeatureSubTitle>
                        pig sausage prosciutto chicken spare ribs
                      </FeatureSubTitle>
                    </Stack>
                  </Box>
                  <Box>
                    <Stack direction="column" spacing={1} textAlign="center">
                      <FeatureTitle>200 mi</FeatureTitle>
                      <FeatureSubTitle>
                        short ribs brisket venison rump
                      </FeatureSubTitle>
                    </Stack>
                  </Box>
                  <Box>
                    <Stack direction="column" spacing={1} textAlign="center">
                      <FeatureTitle>25,000+</FeatureTitle>
                      <FeatureSubTitle>
                        short ribs brisket venison rump
                      </FeatureSubTitle>
                    </Stack>
                  </Box>
                </Stack>
              </Box>
            </Stack>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Stack direction="column" padding="2.5rem 1.5rem">
                <SubTitleContent>Range</SubTitleContent>
                <MainTitleContent>Go Anywhere</MainTitleContent>
                <SubContent style={{ padding: "1rem 0" }}>
                  Bacon ipsum dolor amet short ribs brisket venison rump
                  drumstick pig sausage prosciutto chicken spare ribs salami
                  picanha doner. Kevin capicola sausage, buffalo bresaola
                  venison turkey shoulder picanha ham pork tri-tip meatball
                  meatloaf ribeye. Doner spare ribs andouille bacon sausage.
                  Ground round jerky brisket pastrami shank.
                </SubContent>
              </Stack>
              <Box>
                <OutlineBtnBlack
                  style={{
                    padding: ".3rem 1.5rem",
                    marginLeft: "1.5rem",
                    marginBottom: "7rem",
                  }}
                >
                  Order now
                </OutlineBtnBlack>
              </Box>
            </Box>
          </Stack>
        </Box>
      </BackgroundWrapper>
      <BackgroundWrapper style={{ backgroundColor: "white" }}>
        <video
          src="https://tesla-cdn.thron.com/static/WCL9WK_autopilot.mp4-2000_QQHSUM.mp4?xseo="
          style={{
            width: "100%",
            height: "72vh",
            objectFit: "cover",
          }}
          autoPlay
          loop
          preload="auto"
        />
        <Box sx={{ padding: "2rem 0" }}>
          <Stack
            direction="row"
            spacing={14}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box>
              <Stack direction="column">
                <SubTitleContent>Autopilot</SubTitleContent>
                <MainTitleContent>Future of Driving</MainTitleContent>
                <Box>
                  <OutlineBtnBlack>ORDER NOW</OutlineBtnBlack>
                </Box>
              </Stack>
            </Box>
            <Box width="45%">
              <SubContent>
                Cupcake ipsum dolor. Sit amet marshmallow topping cheesecake
                muffin. Halvah croissant candy canes bonbon candy. Apple pie
                jelly beans topping carrot cake danish tart cake cheesecake.
                Muffin danish chocolate soufflé pastry icing bonbon oat cake.
              </SubContent>
            </Box>
          </Stack>
        </Box>
      </BackgroundWrapper>
      <BackgroundWrapper style={{ backgroundColor: "white" }}>
        <img
          loading="lazy"
          src="https://tesla-cdn.thron.com/delivery/public/image/tesla/8288d520-cd1a-468d-89eb-e73cfde99355/bvlatuR/std/2880x1800/Model-Y-Interior-Hero-Desktop-NA-KR"
          style={{
            width: "100%",
            height: "72vh",
            objectFit: "cover",
          }}
          alt=""
        />
        <Box sx={{ padding: "2rem 0" }}>
          <Stack
            direction="row"
            spacing={14}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box>
              <Stack direction="column">
                <SubTitleContent>Autopilot</SubTitleContent>
                <MainTitleContent>Future of Driving</MainTitleContent>
                <Box>
                  <OutlineBtnBlack>ORDER NOW</OutlineBtnBlack>
                </Box>
              </Stack>
            </Box>
            <Box width="45%">
              <SubContent>
                Cupcake ipsum dolor. Sit amet marshmallow topping cheesecake
                muffin. Halvah croissant candy canes bonbon candy. Apple pie
                jelly beans topping carrot cake danish tart cake cheesecake.
                Muffin danish chocolate soufflé pastry icing bonbon oat cake.
              </SubContent>
            </Box>
          </Stack>
        </Box>
      </BackgroundWrapper>
      <BackgroundWrapper style={{ backgroundColor: "black" }}>
        <img
          src="https://www.tesla.com/sites/default/files/drupal8/modely/ModelYSilhouette.png"
          loading="lazy"
          style={{
            width: "50vw",
            height: "100%",
            objectFit: "contain",
            float: "left",
          }}
          alt=""
        />
      </BackgroundWrapper>
      <BackgroundWrapper style={{ backgroundColor: "black" }}>
        <Box
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Stack
            direction="row"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Box alignItems="center" margin="auto" padding="0 1rem 0 10rem ">
              <Stack spacing={6}>
                <MainTitleContent style={{color: "white"}}>Order Model Y</MainTitleContent>
                <Box>
                  <Stack direction="row" spacing={4}>
                    <OutlineBtnWhite
                      style={{ margin: "0", padding: ".4rem 4rem" }}
                    >
                      order now
                    </OutlineBtnWhite>
                    <OutlineBtnWhite style={{ padding: ".4rem 5.5rem" }}>
                      compare
                    </OutlineBtnWhite>
                  </Stack>
                </Box>
              </Stack>
            </Box>
            <img
              src="https://www.tesla.com/sites/default/files/drupal8/modely/ModelY_Order_Hero.jpg"
              loading="lazy"
              style={{
                width: "50vw",
                height: "100%",
                objectFit: "contain",
                float: "right",
              }}
            />
          </Stack>
        </Box>
      </BackgroundWrapper>
    </>
  );
}

export default ModelY;
