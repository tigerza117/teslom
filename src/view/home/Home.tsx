import { Box, Button, Stack, styled, Typography } from "@mui/material";
import React from "react";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";

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

interface ISession {
  backgroundUrl: string;
}

const Section: React.FC<ISession> = ({ backgroundUrl }) => {
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
            <MainTitle>Model 3</MainTitle>
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
            <ExpandMoreRoundedIcon
              style={{ fontSize: "3.5rem", padding: ".6rem" }}
            />
          </span>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
