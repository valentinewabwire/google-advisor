import axios from "axios";
export const getPlacesData = async (type, sw, ne) => {
  try {
    const response = await axios.get(
      "https://travel-advisor.p.rapidapi.com/" + type + "/list-in-boundary",
      {
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
        },
        headers: {
          "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
          "X-RapidAPI-Key":
            "9569b14d1bmsh3c5e2cc5e8af842p18c87ejsn031c0b868852",
        },
      }
    );

    console.log(response);
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};

// const options = {
//   method: "GET",
//   url: "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary",
//   params: {
//     bl_latitude: "11.847676",
//     tr_latitude: "12.838442",
//     bl_longitude: "109.095887",
//     tr_longitude: "109.149359",
//     restaurant_tagcategory_standalone: "10591",
//     restaurant_tagcategory: "10591",
//     limit: "30",
//     currency: "USD",
//     open_now: "false",
//     lunit: "km",
//     lang: "en_US",
//   },
//   headers: {
//     "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
//     "X-RapidAPI-Key": "9569b14d1bmsh3c5e2cc5e8af842p18c87ejsn031c0b868852",
//   },
// };

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });
