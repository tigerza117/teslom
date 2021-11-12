import { Button, ButtonBase, ButtonUnstyled } from "@mui/material";
import { styled } from "@mui/system";

export const BaseButton = styled(ButtonBase)(({ theme }) => ({
  color: "#393c41",
  fontWeight: 600,
  textTransform: "capitalize",
  transition: "all .5s",
}));

interface BtnOutlineProps {
  color?: "black" | "white";
}

export const BtnOutline = styled(BaseButton)<BtnOutlineProps>(
  ({ theme, color }) => ({
    fontSize: ".8rem",
    padding: ".5rem 2rem",
    borderRadius: "25px",
    border: "3px solid",
    boxShadow: "none",
    borderColor: color === "white" ? "white" : "#393c41",
    color: color === "white" ? "white" : "#393c41",
    marginTop: ".8rem",
    "&:hover": {
      backgroundColor: color === "white" ? "white" : "#393c41",
      color: color === "white" ? "#393c41" : "white",
    },
  })
);
export const TriBtnTitle = styled("h5")(({ theme }) => ({
  fontWeight: 600,
  fontSize: "1rem",
  margin: "0",
  padding: "0",
  color: "#393c41",
  textTransform: "capitalize",
}));

export const TriBtnContent = styled("h5")(({ theme }) => ({
  fontWeight: 500,
  fontSize: ".75rem",
  margin: "0",
  padding: "0",
  color: "#393c41",
  textTransform: "capitalize",
}));

export const MapButton = styled("h5")(({ theme }) => ({
  width: "12rem",
  borderTop: "3px solid black",
  borderRadius: "0",
}));
