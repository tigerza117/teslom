import React, { Component } from "react";
import { Box, Button, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { ShowCaseList_SolarPanel } from "@constants/layout";

const ShowCaseNavWrapper = styled(Box)(({ theme }) => ({
  position: "fixed",
  height: "100vh",
  left: "0",
  top: "0",
  display: "flex",
  justifyContent: "center",
  flexFlow: "column nowrap",
  zIndex: 3,
  color: "#393c41",
}));

const ShowCaseNav = styled("ul")(({ theme }) => ({
  backgroundColor: "transparent",
  listStyleType: "none",
  margin: "0",
  padding: "0",
  display: "block",
}));

const ShowCaseList = styled("li")(({ theme }) => ({
  margin: "0",
  display: "list-item",
  position: "relative",
  cursor: "pointer",
  width: "24px",
}));

const SpanBar = styled("span")(({ theme }) => ({
  display: "block",
  marginTop: "7px",
  marginLeft: "13px",
  backgroundColor: "#181b21",
  width: "1px",
  height: "24px",
  opacity: 0.25,
  transition: ".1s linear",
  "&:active":{
    width: "3px",
    opacity: 1,
  }
}));

const SpanText = styled("span")(({ theme }) => ({
  color: "#181b21",
  fontSize: "11px",
  fontWeight: 600,
  textTransform: "uppercase",
  position: "absolute",
  marginLeft: "24px",
  float: "left",
  width: "304px",
  pointerEvents: "none",
  padding: "3.5px 0",
  display: "none",
}));

export default function ShowCaseWrapper() {
  return (
    <ShowCaseNavWrapper>
      <ShowCaseNav>
        {ShowCaseList_SolarPanel.map(({ label, path }, index) => (
            <ShowCaseList>
              <SpanText>{label}</SpanText>
              <SpanBar></SpanBar>
            </ShowCaseList>
          ))}
      </ShowCaseNav>
    </ShowCaseNavWrapper>
  );
}
