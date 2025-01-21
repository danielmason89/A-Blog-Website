import { Grid, Typography } from "@mui/material";

export default function MainGridItem() {
  return (
    <Grid container className="main-container">
      <Grid
        md={8}
        lg={6}
        item
        sx={{
          padding: "2rem",
          textAlign: "left",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "flex-end",
        }}
      >
        <Typography component="h2" variant="h3">
          Enjoy this helpful blog, while drinking your fav beverage...
        </Typography>
        <Typography variant="body1">
          We mainly write about tech, career, development, and learning.
          Subscribe to stay in the loop.
        </Typography>
      </Grid>
    </Grid>
  );
}
