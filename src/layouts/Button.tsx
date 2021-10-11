import { Box, Button, Stack } from "@mui/material";
import React from "react";

const ButtonProducts = [
    {
      label: "CUSTOM ORDER",
      path: "custOd",
    },
    {
      label: "EXISTING INVENTORY",
      path: "exitInt",
    },
  ];

export const MainButton = () => {
  return (
    <div style={{ width: "100vw", height:"80vh" }}>
        <Box justifyContent="space-between" display="flex" flexDirection="column" padding="0 1rem">
            <Box display="flex" justifyContent="space-evenly" textAlign="center">
                <Stack direction="column" spacing={0}>
                    <h1 style={{fontWeight: "600", fontSize:"3rem", marginBottom:"0"}}>Model S</h1>
                    <h5 style={{fontWeight: "200", fontSize:"1.2rem", marginTop:"2px"}}>Order Online for <a style={{color:"black"}} href="#">Touchless Delivery</a></h5>
                </Stack>
            </Box>
            <Box display="flex" justifyContent="space-evenly">
                <Stack direction="row" spacing={4}>
                    <Button variant="contained" style={{padding:".7rem 5rem",borderRadius:"25px", backgroundColor:"Black", opacity:"0.75"}}>
                        CUSTOM ORDER
                    </Button>
                    <Button variant="contained" style={{padding:".5rem 4.45rem",borderRadius:"25px", backgroundColor:"white", color:"black", opacity:"0.75"}}>
                        EXISTING INVENTORY
                    </Button>
                </Stack>
            </Box>
        </Box>
  </div>
  );
}
