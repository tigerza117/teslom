import { Box, Stack } from "@mui/material";

export const VerticalContent: React.FC = ({ children }) => {
  return (
    <Box sx={{ paddingTop: "2rem" }}>
      <Stack
        direction="row"
        spacing={15}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        {children}
      </Stack>
    </Box>
  );
};
