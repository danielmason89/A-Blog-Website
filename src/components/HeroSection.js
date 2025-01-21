import { Grid, Typography } from "@mui/material";
import MainGridItem from "./MainGridItem";

export default function HeroSection() {
  return (
    <Grid container spacing={3}>
      <Grid item lg={12} sm={12} xs={12}>
        <MainGridItem />
      </Grid>
      <Grid item sm={6} xs={12}>
        <Typography className="second-first-item">
          Second Grid Row First Item
        </Typography>
      </Grid>
      <Grid item sm={6} xs={12}>
        <Typography className="second-second-item">
          Second Grid Row Second Item
        </Typography>
      </Grid>
    </Grid>
  );
}
