import React from "react";
import { Box, Button, Typography } from "@mui/material";
import styled from "@emotion/styled";

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
  marginTop: "5px",
  marginLeft: "14px",
  backgroundColor: "#181b21",
  width: "1px",
  height: "24px",
  opacity: 0.25,
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
}));

export default function ShowCaseWrapper() {
  return (
    <ShowCaseNavWrapper>
      <ShowCaseNav>
        <ShowCaseList>
          <SpanText>Solar panel</SpanText>
          <SpanBar></SpanBar>
        </ShowCaseList>
        <ShowCaseList>
          <SpanText>Savings</SpanText>
          <SpanBar></SpanBar>
        </ShowCaseList>
        <ShowCaseList>
          <SpanText>Design</SpanText>
          <SpanBar></SpanBar>
        </ShowCaseList>
        <ShowCaseList>
          <SpanText>Powerwall</SpanText>
          <SpanBar></SpanBar>
        </ShowCaseList>
        <ShowCaseList>
          <SpanText>Power on</SpanText>
          <SpanBar></SpanBar>
        </ShowCaseList>
        <ShowCaseList>
          <SpanText>Efficiency</SpanText>
          <SpanBar></SpanBar>
        </ShowCaseList>
        <ShowCaseList>
          <SpanText>Experience</SpanText>
          <SpanBar></SpanBar>
        </ShowCaseList>
        <ShowCaseList>
          <SpanText>Specs</SpanText>
          <SpanBar></SpanBar>
        </ShowCaseList>
        <ShowCaseList>
          <SpanText>Order</SpanText>
          <SpanBar></SpanBar>
        </ShowCaseList>
      </ShowCaseNav>
    </ShowCaseNavWrapper>
  );
}
