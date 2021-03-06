import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import { Box, styled } from "@mui/material";

const ExpandBtn = styled(ExpandMoreRoundedIcon)(({ theme }) => ({
    fontSize: "3.5rem",
    padding: ".2rem",
    color: "white",
    animation: `loopUpDown 1000ms infinite`,
    "@keyframes loopUpDown": {
      "80%": {
        opacity: 1,
        transform: "translate3d(0,10px,0)",
      },
      "100%": {
        opacity: 1,
        transform: "translate3d(0,0px,0)",
      },
    },
  }));

export default function ExpandingLight() {
    return (
        <Box><ExpandBtn /></Box>
    );
}
