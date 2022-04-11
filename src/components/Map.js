import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import GoogleMapReact from "google-map-react";

const useStyle = makeStyles((theme) => ({
  mapContainer: {
    height: "85vh",
    width: "100%",
  },
}));

export default function Map() {
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
        center={position}
      />
    </Box>
  );
}
