import { styled } from "@mui/system";
import { Box } from "@mui/system";
import { Stack } from "@mui/material";

const StarWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: "#e2e4e4",
  height: "auto",
  width: "100%",
  borderRadius: "25px",
  marginBottom: "1rem",
}));

const StarTitle = styled("h1")(({ theme }) => ({
  fontWeight: 600,
  fontSize: "1.3rem",
  textAlign: "center",
}));

const StarSubTitle = styled("h1")(({ theme }) => ({
  fontWeight: 600,
  fontSize: "1rem",
  textAlign: "center",
  color: "#393c41",
  "& span": {
    fontWeight: 400,
    fontSize: ".6rem",
  },
}));

export default function OverAll() {
  return (
    <>
      <StarWrapper>
        <Stack direction="column">
          <Box>
            <StarTitle>5-Star NHTSA Rating</StarTitle>
          </Box>
          <Stack
            direction="column"
            spacing={-1}
            style={{ padding: "0 1.5rem 1rem 1.5rem" }}
          >
            <Box>
              <Stack
                direction="row"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <Box>
                  <StarSubTitle>Overall</StarSubTitle>
                </Box>
                <StarSubTitle>★ ★ ★ ★ ★</StarSubTitle>
              </Stack>
            </Box>
            <Box>
              <Stack
                direction="row"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <Stack direction="row">
                  <StarSubTitle>
                    Frontal <span>Driver</span>
                  </StarSubTitle>
                </Stack>
                <StarSubTitle>★ ★ ★ ★ ★</StarSubTitle>
              </Stack>
            </Box>
            <Box>
              <Stack
                direction="row"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <Box>
                  <StarSubTitle>
                    Frontal <span>Passenger</span>
                  </StarSubTitle>
                </Box>
                <StarSubTitle>★ ★ ★ ★ ★</StarSubTitle>
              </Stack>
            </Box>
            <Box>
              <Stack
                direction="row"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <Box>
                  <StarSubTitle>
                    Side <span>Front Seat</span>
                  </StarSubTitle>
                </Box>
                <StarSubTitle>★ ★ ★ ★ ★</StarSubTitle>
              </Stack>
            </Box>
            <Box>
              <Stack
                direction="row"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <Box>
                  <StarSubTitle>
                    Side <span>Rear Seat</span>
                  </StarSubTitle>
                </Box>
                <StarSubTitle>★ ★ ★ ★ ★</StarSubTitle>
              </Stack>
            </Box>
            <Box>
              <Stack
                direction="row"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <Box>
                  <StarSubTitle>Rollover</StarSubTitle>
                </Box>
                <StarSubTitle>★ ★ ★ ★ ★</StarSubTitle>
              </Stack>
            </Box>
          </Stack>
        </Stack>
      </StarWrapper>
    </>
  );
}
