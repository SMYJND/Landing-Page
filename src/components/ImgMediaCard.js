import React from "react";
import Card from "@mui/material/Card"; // Rename the imported Card component
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { Button, CardActions, Typography } from "@mui/material";
 
const ImgMediaCard = (props) => {
  return (
    <Card sx={{ maxWidth: 345, marginBottom:"20px" }}>
      <CardMedia
        component="img"
        alt="cardimage"
        height="160"
        src={props.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {props.heading}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {props.content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default ImgMediaCard;
