import { Box, Button, Stack, styled } from "@mui/material";

const Wrapper = styled(Box)(({ theme }) => ({
  position: "absolute",
  transformOrigin: "bottom",
  bottom: 0,
  width: "100%",
  margin: "20px 0",
}));

const LinkBtn = styled(Button)(({ theme }) => ({
  color: "#393c41",
  fontSize: ".75rem",
  textTransform: "capitalize",
}));

const ResponsiveLinkBtn = styled(LinkBtn)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export default function Footer() {
  return (
    <Wrapper>
      <Box sx={{ display: "flex"}}>
        <Stack direction={{ xs: "column", md: "row" }} sx={{ m: "auto"}}>
          <LinkBtn>Tesla &copy; 2021</LinkBtn>
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
