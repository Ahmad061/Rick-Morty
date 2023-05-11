import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ActionAreaCard({ data = {} }) {
  return (
    <Card sx={{ width: 300, backgroundColor: "#ffffffe8" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          width="100"
          height="250"
          image={data.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {data.name}
          </Typography>

          <Typography variant="body1" color="text.secondary">
            {data.gender}
          </Typography>

          <Typography variant="subtitle1" color="text.secondary">
            {data.situation}
          </Typography>

          <Typography variant="subtitle2" color="text.secondary">
            {data.species}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {data.location?.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
