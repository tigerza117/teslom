import { Box, Stack } from "@mui/material";
import { ContentWrapper } from "@components/shared/Wrapper";
import { BtnOutline } from "@components/shared/Button";

export const ContentLeft: React.FC = ({ children }) => {
  return (
    <ContentWrapper>
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
          <BtnOutline>LEARN MORE</BtnOutline>
        </Stack>
      </Box>
    </ContentWrapper>
  );
};
