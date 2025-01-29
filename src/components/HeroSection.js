import { Grid, Typography } from "@mui/material";
import MainGridItem from "./MainGridItem";
import GridItem from "./GridItem";
import profileImage from "../images/IMG_8958.jpg";
import profileImage2 from "../images/IMG_3253.webp";

export default function HeroSection() {
  const authors = [
    { name: "Daniel Mason", occupation: "Full Stack Software Developer" },
    { name: "Chris Diaz", occupation: "Frontend Engineer" },
  ];

  return (
    <Grid container spacing={3}>
      <Grid item lg={12} sm={12} xs={12}>
        <MainGridItem />
      </Grid>
      <Grid item md={6} sm={12} xs={12}>
        <GridItem
          title="About Us."
          subheader="Two software developers, passionate about sharing our tech journey and experiences."
          image={profileImage}
          author={authors[0].name}
          occupation={authors[0].occupation}
        />
      </Grid>
      <Grid item md={6} sm={12} xs={12}>
        <Typography className="second-second-item">
          <GridItem
            title="Our Mission."
            subheader="Empowering developers with accessible, practical, and inspiring ideas and resources."
            image={profileImage2}
            author={authors[1].name}
            occupation={authors[1].occupation}
          />
        </Typography>
      </Grid>
    </Grid>
  );
}
