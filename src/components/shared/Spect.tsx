import styled from "@emotion/styled";

export const SpecUl = styled("ul")(({ theme }) => ({
  listStyleType: "none",
  display: "block",
  width: "250px",
  margin: "0",
  padding: "2.5rem 0",
}));

export const Specli = styled("li")(({ theme }) => ({
  display: "list-item",
  color: "white",
  margin: "0",
  padding: "0",
  lineHeight: "6px",
  "&::before": {
    content: "''",
    display: "block",
    blockSize: "1px",
    width: "2rem",
    backgroundColor: "#8f8f8f",
  },
}));

export const SpecSubText = styled("p")(({ theme }) => ({
  color: "white",
  margin: "1rem 0 2rem 0",
  padding: "0",
  "& p":{
    opacity: .85,
    lineHeight: "105%"
  }
}));
