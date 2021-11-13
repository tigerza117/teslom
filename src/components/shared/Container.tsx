import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  scrollSnapType: "y mandatory",
  maxHeight: "100vh",
  minWidth: "100vw",
  overflowY: "scroll",
}));

export const GalleryContainer = styled(Box)(({ theme }) => ({
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  height: "45vh",
  width: "80vh",
}));

export const InfoContainer = styled(Box)(({ theme }) => ({
  height: "45vh",
  width: "80vh",
  verticalAlign: "middle",
}));