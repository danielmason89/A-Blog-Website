import { Button, Grid, Typography } from "@mui/material";

export default function MainGridItem() {
  const subscribeUser = () => {
    console.log("test");
  };

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
          alignItems: "flex-start",
        }}
      >
        <Typography
          component="h2"
          variant="h3"
          color="#f1356d"
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            // color: "#ffffff",
            padding: "8px 16px",
            borderRadius: "2%",
            display: "inline-block",
          }}
        >
          Enjoy this helpful blog, while drinking your fav beverage...
        </Typography>
        <Typography variant="body1" color="black">
          We mainly write about tech, career, development, and learning.
          Subscribe to stay in the loop.
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          aria-label="subscribe"
          sx={{
            marginTop: "1rem",
          }}
          onClick={subscribeUser}
        >
          Subscribe
        </Button>
      </Grid>
    </Grid>
  );
}
