import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";

export default function GridItem(props) {
  return (
    <Card>
      <CardHeader
        className="card-header"
        title={props.title}
        subheader={props.subheader}
        titleTypographyProps={{
          sx: { color: "#333" },
        }}
      />
      <CardMedia
        className="contributor-image"
        component="img"
        image={props.image}
        alt="a picture of each the author of Dev Blog"
      />
      <CardContent>
        <Typography variant="h5" component="span" sx={{ color: "black" }}>
          {props.author}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {props.occupation}
        </Typography>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
}
