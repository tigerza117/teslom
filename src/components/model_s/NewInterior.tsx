import { BackgroundWrapper } from "@components/shared/Wrapper";
import { TitleWrapper } from "@components/cybertruck/Components";
import { AdsTitle } from "@components/shared/Title";

export function AllNewInterior() {
  return (
    <>
      <BackgroundWrapper style={{ backgroundColor: "black", height: "10vh" }}>
        <TitleWrapper>
          <AdsTitle>All-New Interior</AdsTitle>
        </TitleWrapper>
      </BackgroundWrapper>
      <BackgroundWrapper
        style={{
          backgroundImage: `url(https://tesla-cdn.thron.com/delivery/public/image/tesla/177c0faf-b852-47ea-a218-394368e15a20/bvlatuR/std/2880x1800/MS-Interior-Hero-Desktop)`,
        }}
      ></BackgroundWrapper>
      <BackgroundWrapper
        style={{ backgroundColor: "black", height: "9vh" }}
      ></BackgroundWrapper>
    </>
  );
}
