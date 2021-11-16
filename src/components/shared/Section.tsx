import { Box, styled } from "@mui/system";

export const RowSectionBlock = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",
  flexDirection: "row",
  textAlign: "left",
  width: "80vw",
}));
