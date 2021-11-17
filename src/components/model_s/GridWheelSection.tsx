import { ContainerWrapper } from "@components/shared/Container";
import { BackgroundWrapper } from "@components/shared/Wrapper";
import { GridGall } from "./GridGallSection";

const Galls = [
  {
    img: "https://tesla-cdn.thron.com/delivery/public/image/tesla/2cf7296e-1bba-40b6-9490-929b47eb50cd/bvlatuR/std/1040x584/MS-Exterior-Grid-B-Desktop",
    title: "Responsive Performance",
    sub: "Staggered, performance-focused wheels and tires keep the car planted and transfer even more power down to the road.",
  },
  {
    img: "https://tesla-cdn.thron.com/delivery/public/image/tesla/5207af00-08c6-4b97-83c2-72b82e429977/bvlatuR/std/1040x584/MS-Exterior-Grid-A-Desktop",
    title: "Optimized Aerodynamics",
    sub: "Attention to detail on all exterior surfaces makes Model S the most aerodynamic production car on Earth.",
  },
  {
    img: "https://tesla-cdn.thron.com/delivery/public/image/tesla/2b807bf9-bd89-46a3-97a3-2fecca31beaf/bvlatuR/std/1040x584/MS-Exterior-Grid-C-Desktop",
    title: "Refined Styling",
    sub: "Exterior design combines an iconic look with elegant proportions.",
  },
];

export function GridWheel() {
  return (
    <BackgroundWrapper style={{ backgroundColor: "black", height: "auto" }}>
      <ContainerWrapper>
        <GridGall data={Galls} side="left" />
      </ContainerWrapper>
    </BackgroundWrapper>
  );
}
