import { Box, Paper, Rating, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import { LocationOn } from "@mui/icons-material";

const useStyle = makeStyles((theme) => ({
  mapContainer: {
    height: "85vh",
    width: "100%",
  },
  paper: {
    width: 100,
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    padding: 10,
  },
  cardImage: {
    height: 85,
    width: 85,
    cursor: "pointer",
  },
}));

export default function Map({
  places,
  coords,
  setBounds,
  setCoords,
  setChildClicked,
}) {
  const classes = useStyle();
  const [position, setPosition] = useState({
    lat: 41,
    lng: -71,
  });
  return (
    <Box className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.GOOGLE_MAP_API_KEY }}
        zoom={4}
        defaultCenter={coords}
        center={coords}
        onChange={(event) => {
          setCoords({ lat: event.center.lat, lng: event.center.lng });
          setBounds({ ne: event.marginBounds.ne, sw: event.marginBounds.sw });
        }}
        onChildClick={(child) => setChildClicked(child)}
      >
        {places.length > 0 &&
          places.map((place, index) => (
            <div lat={place.latitude} lng={place.longitude} key={index}>
              <LocationOn color="primary" fontSize="large" />
              <Paper className={classes.paper}>
                <Typography>{place.name}</Typography>
                {/* <img
                  className={classes.cardImage}
                  src={
                    place.photo
                      ? place.photo.image.large.url
                      : "https://cdn.pixabay.com/photo/2022/04/07/02/56/cottontail-rabbit-7116707_960_720.jpg"
                  }
                /> */}
                <Rating
                  readOnly
                  name="read-only"
                  size="small"
                  value={Number(place.rating)}
                />
              </Paper>
            </div>
          ))}
      </GoogleMapReact>
    </Box>
  );
}
