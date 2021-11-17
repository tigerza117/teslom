import { Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";

interface IData {
  img: string;
  title: string;
  sub: string;
}

interface GridGallProps {
  data: IData[];
  side: "left" | "right";
}

export const GridGall = ({ data, side }: GridGallProps) => {
  return (
    <>
      {data.map((d, index) => {
        const { img, title, sub } = d;
        let isReverse = index % 2 !== 0;
        if (side === "left") {
          isReverse = !isReverse;
        }
        return (
          <Stack direction="row" key={index}>
            <Grid
              container
              spacing={0}
              direction={isReverse ? "row-reverse" : "row"}
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
                      marginLeft: isReverse ? "0" : "auto",
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
