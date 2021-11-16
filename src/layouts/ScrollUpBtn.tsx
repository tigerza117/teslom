import { BaseButton } from "@components/shared/Button";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default () => {
  const ref = useRef(null);

  gsap.to(ref.current, {
    scrollTrigger: {
      trigger: "#hero",
      scrub: true,
      start: "90% 0%",
      end: "100% 0%",
    },
    display: "inline",
    opacity: 1,
  });

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
      ref={ref}
    >
      <KeyboardArrowUpRoundedIcon style={{ fontSize: "2rem" }} />
    </BaseButton>
  );
};
