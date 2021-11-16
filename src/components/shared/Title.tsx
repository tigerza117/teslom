import { useLayoutContext } from "@contexts/LayoutContext";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export const FeatureTitle = styled(Typography)(({ theme }) => ({
  color: "white",
  fontWeight: 600,
  fontSize: "1.8rem",
}));

export const FeatureSubTitle = styled(Typography)(({ theme }) => ({
  color: "white",
  fontWeight: 500,
  fontSize: "0.8rem",
}));

export const MainTitleContent = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: "1.8rem",
  margin: 0,
  color: "#181b21",
  padding: 0,
}));

export const SubContent = styled("h5")(({ theme }) => ({
  fontWeight: 400,
  fontSize: "1rem",
  margin: "0",
  padding: "0",
  color: "#393c41",
  "& a": {
    color: "#393c41",
  },
}));

export const SpecTitle = styled("h5")(({ theme }) => ({
  fontWeight: 600,
  fontSize: "2rem",
  margin: "0",
  padding: "0",
  color: "#393c41",
  "& span": {
    fontWeight: 300,
  },
}));

export const AdsTitle = styled(Typography)(({ theme }) => ({
  color: "white",
  fontWeight: 600,
  fontSize: "1.8rem",
  margin: "auto 0",
  "&::after": {
    content: '""',
    display: "block",
    position: "absolute",
    width: "100%",
    height: "40vh",
    marginTop: "2vh",
    background: "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgb(0, 0, 0, 0))",
  },
}));

export const InfoTitle = styled(Typography)(({ theme }) => ({
  color: "white",
  fontWeight: 700,
  fontSize: "1.5rem",
}));

export const InfoSubTitle = styled(Typography)(({ theme }) => ({
  color: "white",
  fontWeight: 400,
  fontSize: "1rem",
  width: "80%",
}));

export const VdoOverlayText = styled("p")(({ theme }) => ({
  fontSize: ".9rem",
  margin: "0",
  opacity: 0.8,
}));

export const MainTitle = styled("p")(({ theme }) => ({
  fontWeight: 600,
  fontSize: "2.5rem",
  marginBottom: 0,
  color: "#393c41",
  padding: 0,
  transform: "translateY(20px)",
}));

export const SubTitleContent = styled("p")(({ theme }) => ({
  fontWeight: 400,
  fontSize: "1rem",
  color: "#393c41",
  margin: "0",
}));

export const MainSubTitle = styled("p")(({ theme }) => ({
  fontWeight: 400,
  fontSize: "1rem",
  padding: "1.5rem 0",
  color: "#393c41",
  margin: "0",
}));
