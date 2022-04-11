import {
  CircularProgress,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import PlaceDetails from "./PlaceDetails";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: 25,
  },
  formControl: {
    margin: 10,
    minWidth: 120,
    marginBottom: 30,
  },
  loading: {
    width: "100%",
    height: "500px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  list: {
    height: "75vh",
    overflow: "auto",
  },
}));

export default function List({
  type,
  setType,
  isLoading,
  childClicked,
  places,
}) {
  //   console.log("test");
  const classes = useStyles();
  return (
    <div className={classes.container}>
      {isLoading ? (
        <div className={classes.loading}>
          <CircularProgress />
        </div>
      ) : (
        <div>
          <FormControl className="classes.formControl">
            <InputLabel id="type">Type</InputLabel>
            <Select
              id="placeType"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <MenuItem value="restaurants">Restaurants</MenuItem>
              <MenuItem value="hotels">Hotels</MenuItem>
              <MenuItem value="attractions">Attractions</MenuItem>
            </Select>
          </FormControl>
          <Grid container spacing={3} className={classes.list}>
            {places &&
              places.map((place, index) => {
                return (
                  <Grid item xs={12} md={12}>
                    <PlaceDetails place={place} key={index} />
                  </Grid>
                );
              })}
          </Grid>
        </div>
      )}
    </div>
  );
}
