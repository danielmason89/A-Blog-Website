import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";

interface GridItemProps {
  title: string;
  subheader: string;
  image: string;
  author: string
  occupation: string
}

export default function GridItem(props: GridItemProps) {
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
        <Typography variant="subtitle2" color="text.secondary">
          {props.occupation}
        </Typography>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
}
