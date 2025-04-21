import { Typography } from "@mui/material";
import MainGridItem from "./MainGridItem.tsx";
import GridItem from "./GridItem.tsx";
import profileImage from "../images/HeroDanielMason.webp";
import profileImage2 from "../images/HeroChrisDiaz.webp";
import Grid from "@mui/material/Grid";

export default function HeroSection() {
  const authors = [
    { name: "Daniel Mason", occupation: "Full Stack Software Developer" },
    { name: "Chris Diaz", occupation: "Tech Enthusiast" },
  ];

  return (
    <Grid container spacing={3}>
      <Grid size={{ lg: 12, sm: 12, xs: 12 }}>
        <MainGridItem />
      </Grid>
      <Grid size={{ md:6, sm: 12, xs: 12 }}>
        <GridItem
          title="About Us."
          subheader="Two software developers, passionate about sharing our tech journey and experiences."
          image={profileImage}
          author={authors[0].name}
          occupation={authors[0].occupation}
        />
      </Grid>
      <Grid size={{ md: 6, sm: 12, xs: 12 }}>
        <Typography className="second-second-item" variant="body1" component="div">
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
