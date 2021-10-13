import { Box, Button, Stack } from "@mui/material";
import React from "react";
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';

export const MainButton = () => {
  return (
    <div style={{ width: "100vw", height:"92vh", display: "flex", justifyContent:"center" }}>
        <Box display="flex" flexDirection="column" justifyContent="space-between" padding="0 1rem">
            <Box display="flex" justifyContent="space-evenly" textAlign="center">
                <Stack direction="column" spacing={0}>
                    <h1 style={{fontWeight: "600", fontSize:"3rem", marginBottom:"0", color:'#393c41'}}>Model S</h1>
                    <h5 style={{fontWeight: "200", fontSize:"1.1rem", marginTop:"2px"}}>Order Online for <a style={{color:"#393c41"}} href="#">Touchless Delivery</a></h5>
                </Stack>
            </Box>
            <Box display="flex" justifyContent="space-around" flexDirection="column"  textAlign="center">
                <Stack direction="row" spacing={4} padding="1rem">
                    <Button variant="contained" style={{padding:".6rem 5.2rem",borderRadius:"25px", backgroundColor:"black", opacity:"0.8"}}>
                        CUSTOM ORDER
                    </Button>
                    <Button variant="contained" style={{padding:".5rem 4.2rem",borderRadius:"25px", backgroundColor:"white", color:"black", opacity:"0.8"}}>
                        EXISTING INVENTORY
                    </Button>
                </Stack>
                <span><ExpandMoreRoundedIcon style={{fontSize:'3.5rem', padding: '.6rem'}}/></span>
            </Box>
        </Box>
  </div>
  );
}
