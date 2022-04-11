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
  useEffect(() => {
    setIsLoading(true);
    getPlacesData(type).then((data) => {
      setPlaces(data.filter((place) => place.name && place.num_review > 0));
      setIsLoading(false);
    });
  }, [type, setPlaces]);

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
          <Map />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
