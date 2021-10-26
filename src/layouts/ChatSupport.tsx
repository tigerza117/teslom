import React from "react";
import { Button, styled } from "@mui/material";
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';

const ChatBtn = styled(Button)(({ theme }) => ({
    width: "auto",
    height: "3.8rem",
    borderRadius: "50%",
    backgroundColor: "white",

    position: "fixed",
    bottom: "5rem",
    right: "3rem",
    zIndex: 1000,
  }));

export default function Chat() {
    return (
        <ChatBtn>
            <SmsOutlinedIcon
                sx={{
                    color: "black",
                    fontSize: "1.8rem",
                }}
                />
        </ChatBtn>
    );
}
