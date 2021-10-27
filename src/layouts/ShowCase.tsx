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
  WebkitBoxOrient: "vertical",
  WebkitBoxDirection: "normal",
  flexFlow: "column nowrap",
  zIndex: 3,
  color: "#393c41",
}));

const ShowCaseNav = styled("ul")(({ theme }) => ({
  backgroundColor: "transparent",
  listStyleType: "none",
  paddingInline: "8px",
  marginBlock: "8px",
  margin: "0",
  padding: "0",
  display: "block",
}));

const ShowCaseList = styled("li")(({ theme }) => ({
  margin: "0",
  display: "list-item",
  marginBlockEnd: "0",
  paddingInlineStart: "0",
  paddingInlineEnd: "0",
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
  marginInlineStart: "14px",
  marginInlineEnd: "0",
  opacity: 0.25,
}));

const SpanText = styled("span")(({ theme }) => ({
  color: "#181b21",
  fontSize: "11px",
  fontWeight: 600,
  textTransform: "uppercase",
  position: "absolute",
  insetInlineStart: "0",
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
