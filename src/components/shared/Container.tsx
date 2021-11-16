import styled from "@emotion/styled";
import { Box, Container } from "@mui/material";

export const SnapContainer = styled(Box)(({ theme }) => ({
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

export const ContainerWrapper: React.FC = ({ children }) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container>{children}</Container>
    </Box>
  );
};
