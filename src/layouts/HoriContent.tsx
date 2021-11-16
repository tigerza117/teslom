import { Box, Stack } from "@mui/material";
import { HorizonWrapper } from "@components/shared/Wrapper";
import { BtnOutline } from "@components/shared/Button";

export const HorizonContent: React.FC = ({ children }) => {
  return (
    <HorizonWrapper>
      <Box
        sx={{
          padding: "3rem 1.5rem 0 1.5rem",
        }}
      >
        {children}
      </Box>
      <Box>
        <Stack
          direction="row"
          spacing={1}
          padding="1.5rem"
          style={{ justifyContent: "space-between" }}
        >
          <BtnOutline style={{ margin: "0" }}>ORDER NOW</BtnOutline>
        </Stack>
      </Box>
    </HorizonWrapper>
  );
};
