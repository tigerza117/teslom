import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import { styled } from "@mui/material/styles";

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

export const MainButton = () => {
  return (
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
          <MainSubTitle>Order Online for <a href="#">Touchless Delivery</a></MainSubTitle>
        </Stack>
      </Box>
      <Box display="flex" justifyContent="space-around" flexDirection="column">
        <Box
          sx={{
            margin: "auto",
          }}
        >
          <Stack direction="row" spacing={4} padding="1rem">
            <Button
              variant="contained"
              style={{
                padding: ".6rem 5.2rem",
                borderRadius: "25px",
                backgroundColor: "black",
                opacity: "0.8",
              }}
            >
              CUSTOM ORDER
            </Button>
            <Button
              variant="contained"
              style={{
                padding: ".5rem 4.2rem",
                borderRadius: "25px",
                backgroundColor: "white",
                color: "black",
                opacity: "0.8",
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
  );
};
