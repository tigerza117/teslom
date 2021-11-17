import { BaseButton } from "@components/shared/Button";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default () => {
  const handleClick = () => {
    document
      .getElementById("hero")
      ?.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  return (
    <BaseButton
      onClick={handleClick}
      style={{
        padding: "0.5rem 1.25rem",
        display: "none",
        opacity: 0,
        fontSize: "0.8rem",
      }}
      className="scroll-up"
    >
      <KeyboardArrowUpRoundedIcon style={{ fontSize: "2rem" }} />
    </BaseButton>
  );
};
