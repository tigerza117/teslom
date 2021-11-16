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

export const VertiImg = styled('img')(({ theme }) => ({
  width: "100vw",
  height: "66vh",
  objectFit: "cover",
  objectPosition: "0 50%",
}));

export const HoriImg = styled('img')(({ theme }) => ({
  width: "73vw",
  height: "100vh",
  objectFit: "cover",
  float: "right",
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
