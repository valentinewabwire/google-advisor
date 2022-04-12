import { CssBaseline, Grid } from "@mui/material";
import Header from "./components/Header";
import List from "./components/List";
import Map from "./components/Map";
import React, { useState, useEffect } from "react";
import { getPlacesData } from "./api/travelAdvisorAPI";

function App() {
  const [type, setType] = useState("restaurants");
  const [isLoading, setIsLoading] = useState(false);
  const [places, setPlaces] = useState([]);
  const [childClicked, setChildClicked] = useState(false);
  const [coords, setCoords] = useState({});
  const [bounds, setBounds] = useState(null);
  useEffect(() => {
    if (bounds) {
      setIsLoading(true);
      getPlacesData(type, bounds.ne, bounds.sw).then((data) => {
        setPlaces(data.filter((place) => place.name && place.num_reviews > 0));
        setIsLoading(false);
      });
    }
  }, [type, setPlaces, bounds]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoords({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  return (
    <div className="App">
      <CssBaseline />
      <Header />
      <Grid container style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List
            type={type}
            setType={(type) => {
              setType(type);
            }}
            childClicked={childClicked}
            isLoading={isLoading}
            places={places}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            coords={coords}
            places={places}
            setBounds={(bounds) => setBounds(bounds)}
            setCoords={(coordinates) => coordinates}
            setChildClicked={(child) => setChildClicked(child)}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
