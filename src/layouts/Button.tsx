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
        <Box justifyContent="space-evenly" display="flex" padding="0 1rem">
            <Box display="flex">
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
