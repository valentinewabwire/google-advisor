import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";

export default function PlaceDetails({ place }) {
  console.log("testestetest");
  return (
    <div>test</div>
    // <Card elevation={8}>
    //   <CardMedia
    //     style={{ height: 350 }}
    //     image={
    //       place.photo
    //         ? place.photo.images.large.url
    //         : "https://cdn.pixabay.com/photo/2022/04/07/02/56/cottontail-rabbit-7116707_960_720.jpg"
    //     }
    //     title={place.name}
    //   ></CardMedia>
    //   <CardContent>
    //     <Typography gutterBottom variant="h5">
    //       {place.name}
    //     </Typography>
    //     <Box display="flex" justifyContent="space-between" my={2}>
    //       <Rating name="read-only" value={Number(place.rating)} readOnly />
    //       <Typography></Typography>
    //     </Box>
    //   </CardContent>
    // </Card>
  );
}
