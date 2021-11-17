import { Box } from "@mui/system";
import { useLayoutContext } from "@contexts/LayoutContext";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export const HeroSection = styled(Box)(({ theme }) => ({
  width: 100,
}));

export const HeroTitle: React.FC = ({ children }) => {
  const { heroColor } = useLayoutContext();
  const Render = styled(Typography)(({ theme }) => ({
    fontWeight: 600,
    fontSize: "2.5rem",
    marginBottom: 0,
    color: heroColor,
    padding: 0,
    transform: "translateY(20px)",
  }));
  return <Render>{children}</Render>;
};

export const HeroSubTitle: React.FC = ({ children }) => {
  const { heroColor } = useLayoutContext();
  const Render = styled("h5")(({ theme }) => ({
    fontWeight: 400,
    fontSize: "1rem",
    padding: "1.5rem 0",
    color: heroColor,
  }));
  return <Render>{children}</Render>;
};

export const HeroTitleContent: React.FC = ({ children }) => {
  const { heroColor } = useLayoutContext();
  const Render = styled("h5")(({ theme }) => ({
    fontWeight: 200,
    fontSize: "1.2rem",
    margin: "0",
    padding: "0",
    color: heroColor,
  }));
  return <Render>{children}</Render>;
};
