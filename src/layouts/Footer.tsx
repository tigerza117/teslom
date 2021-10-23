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

export default function Footer() {
  return (
    <Wrapper>
      <Box sx={{ display: "flex" }}>
        <Stack direction="row" sx={{ m: "auto" }}>
          <LinkBtn>Tesla 2021</LinkBtn>
          <LinkBtn>Privacy & Legal</LinkBtn>
          <LinkBtn>Contact</LinkBtn>
          <LinkBtn>Careers</LinkBtn>
          <LinkBtn>News</LinkBtn>
          <LinkBtn>Engage</LinkBtn>
          <LinkBtn>Locations</LinkBtn>
        </Stack>
      </Box>
    </Wrapper>
  );
}
