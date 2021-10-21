import { Box, Button, Stack, styled, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import gsap, { Power2 } from "gsap";

const MainTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: "3rem",
  marginBottom: 0,
  color: "#393c41",
  padding: 0,
}));

const MainSubTitle = styled("h5")(({ theme }) => ({
  fontWeight: 200,
  fontSize: "1rem",
  "& a": {
    color: "#393c41",
  },
}));

const Home: React.FC = () => {
  return (
    <>
      <Section backgroundUrl="https://tesla-cdn.thron.com/delivery/public/image/tesla/06af56e3-91c4-4bad-8d2e-0a24f64ec2a8/bvlatuR/std/2880x1800/MS-Exterior-Hero-Desktop" />
      <Section backgroundUrl="https://tesla-cdn.thron.com/delivery/public/image/tesla/06af56e3-91c4-4bad-8d2e-0a24f64ec2a8/bvlatuR/std/2880x1800/MS-Exterior-Hero-Desktop" />
    </>
  );
};

const GoAway = styled(ExpandMoreRoundedIcon)(({ theme }) => ({
  fontSize: "3.5rem",
  padding: ".6rem",
  animation: `loopUpDown 1000ms infinite`,
  "@keyframes loopUpDown": {
    "80%": {
      opacity: 1,
      transform: "translate3d(0,20px,0)",
    },
    "100%": {
      opacity: 1,
      transform: "translate3d(0,0px,0)",
    },
  },
}));

interface ISession {
  backgroundUrl: string;
}

const Section: React.FC<ISession> = ({ backgroundUrl }) => {
  const [state, setState] = useState({ yyy: "" });
  let x = { counter: 0 };
  useEffect(() => {
    gsap.timeline({ paused: false }).to(x, {
      duration: 1,
      counter: 3.1,
      ease: Power2.easeIn,
      onUpdate: () => {
        setState({ yyy: x.counter.toFixed(1) });
      },
    });
    return () => {};
  }, []);

  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundUrl})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          textAlign: "center",
        }}
      >
        <Box>
          <Stack direction="column" spacing={-1} sx={{ margin: "4rem 0" }}>
            <MainTitle>Model {state.yyy}</MainTitle>
            <MainSubTitle>
              Order Online for <a href="#">Touchless Delivery</a>
            </MainSubTitle>
          </Stack>
        </Box>
        <Box
          display="flex"
          justifyContent="space-around"
          flexDirection="column"
        >
          <Box
            sx={{
              margin: "auto",
            }}
          >
            <Stack direction="row" spacing={4} padding="1rem">
              <Button
                variant="contained"
                style={{
                  fontSize: ".8rem",
                  padding: ".55rem 4.6rem",
                  borderRadius: "25px",
                  backgroundColor: "black",
                  opacity: ".75",
                  boxShadow: "none",
                }}
              >
                CUSTOM ORDER
              </Button>
              <Button
                variant="contained"
                style={{
                  fontSize: ".8rem",
                  padding: ".35rem 3.6rem",
                  borderRadius: "25px",
                  backgroundColor: "white",
                  color: "black",
                  opacity: ".75",
                  boxShadow: "none",
                }}
              >
                EXISTING INVENTORY
              </Button>
            </Stack>
          </Box>
          <span>
            <GoAway />
          </span>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
