import { Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";

interface IData {
  img: string;
  title: string;
  sub: string;
}

const Data = [
  {
    img: "https://tesla-cdn.thron.com/delivery/public/image/tesla/287c75d3-2f5d-481e-8a0f-0dc987f54e6b/bvlatuR/std/1040x584/MX-Interior-Grid-A-Desktop",
    title: "Nunc consequat",
    sub: "Condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus. Ac tortor dignissim convallis aenean et.",
  },
  {
    img: "https://tesla-cdn.thron.com/delivery/public/image/tesla/08d2e941-2be2-4e1a-bed9-924ac30fb115/bvlatuR/std/1040x584/MS-Interior-Grid-B-Desktop",
    title: "Stay Connected",
    sub: "Condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus. Ac tortor dignissim convallis aenean et.",
  },
  {
    img: "https://tesla-cdn.thron.com/delivery/public/image/tesla/dcfc40cb-6b46-4be7-b173-be10e0c9143c/bvlatuR/std/1040x584/MS-Interior-Grid-C-Desktop",
    title: "Your Best Audio System",
    sub: "Condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus. Ac tortor dignissim convallis aenean et.",
  },
  {
    img: "https://tesla-cdn.thron.com/delivery/public/image/tesla/ab165f41-fa4e-4abe-b82a-51bdc295cf42/bvlatuR/std/1040x584/MS-Interior-Grid-D-Desktop",
    title: "Real Storage",
    sub: "Condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus. Ac tortor dignissim convallis aenean et.",
  },
];

export const GridGall = () => {
  return (
    <>
      {Data.map((data, index) => {
        const { img, title, sub } = data;
        const isEven = index % 2 === 0;
        return (
          <Stack direction="row" key={index}>
            <Grid
              container
              spacing={0}
              direction={isEven ? "row" : "row-reverse"}
            >
              <Grid item xs={6}>
                <img src={img} style={{ maxWidth: "100%" }} className="show" />
              </Grid>
              <Grid item xs={6}>
                <Box
                  sx={{
                    height: "100%",
                    display: "flex",
                  }}
                  className="show"
                >
                  <Box
                    sx={{
                      marginY: "auto",
                      width: "80%",
                      marginLeft: isEven ? "auto" : "0",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "white",
                        fontWeight: 700,
                        fontSize: "1.5rem",
                      }}
                    >
                      {title}
                    </Typography>
                    <Typography
                      sx={{
                        color: "white",
                        fontWeight: 400,
                        fontSize: "1rem",
                      }}
                    >
                      {sub}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Stack>
        );
      })}
    </>
  );
};
