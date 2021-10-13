import { Box, Button, Stack } from "@mui/material";
import React from "react";

export const Navside = () => {
  return (
    <div style={{ width: "auto", height:"auto"}}>
        <Box>
            <Stack direction="row" spacing={2} padding=".5rem 0">
                <Button size="large" style={{color: "#393c41", fontWeight: "600", textTransform:"capitalize"}}>
                    shop
                </Button>
                <Button size="large" style={{color: "#393c41", fontWeight: "600", textTransform:"capitalize"}}>
                    account
                </Button>
                <Button size="large" style={{color: "#393c41", fontWeight: "600", textTransform:"capitalize"}}>
                    menu
                </Button>
            </Stack>
        </Box>
  </div>
  );
}
