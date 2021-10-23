import { Box, Button, Stack, styled } from "@mui/material";

const Wrapper = styled(Box)(({ theme }) => ({
  position: "absolute",
  transformOrigin: "bottom",
  bottom: 0,
  width: "100%",
}));

const LinkBtn = styled(Button)(({ theme }) => ({
  color: "#5D5C61",
}));

const ResponsiveLinkBtn = styled(LinkBtn)(({ theme }) => ({
  [theme.breakpoints.down("lg")]: {
    display: "none",
  },
}));

export default function Footer() {
  return (
    <Wrapper>
      <Box sx={{ display: "flex" }}>
        <Stack direction={{ xs: "column", md: "row" }} sx={{ m: "auto" }}>
          <LinkBtn>Tesla 2021</LinkBtn>
          <LinkBtn>Privacy & Legal</LinkBtn>
          <ResponsiveLinkBtn>Contact</ResponsiveLinkBtn>
          <LinkBtn>Careers</LinkBtn>
          <LinkBtn>News</LinkBtn>
          <ResponsiveLinkBtn>Engage</ResponsiveLinkBtn>
          <ResponsiveLinkBtn>Locations</ResponsiveLinkBtn>
        </Stack>
      </Box>
    </Wrapper>
  );
}
