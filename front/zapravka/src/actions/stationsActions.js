import * as actionTypes from "../constants/actionTypes";
import * as stationsApi from "../api/stationsApi";

const stationsData = [
  {
    id: 1,
    name: "KazMunaiGas",
    brand_id: 1,
    image_path: "kmg",
    star_rating: 4.7,
    rating_count: 35,
    address: {
      line_1: "175 Kabanbai Batyr",
      region: "Almaty"
    },
    phone: "678-973-2117",
    latitude: 33.7443084,
    longitude: -84.3795168,
    price: 270
  },
  {
    id: 2,
    name: "Helios",
    brand_id: 2,
    image_path: "helios",
    star_rating: 4.3,
    rating_count: 25,
    address: {
      line_1: "175 Kabanbai Batyr",
      region: "Almaty"
    },
    phone: "678-973-2117",
    latitude: 53.744308400248,
    longitude: -74.379516839981,
    price: 245
  }
];

export const getStations = (data) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.ACTION_GET_STATIONS_STARTED
  });
  console.log(data);
  const queryString = require('query-string');
  let parsed = queryString.parse(data.search);

  let fetchUrl = parsed.search+"/"+parsed.fuel;
  console.log(fetchUrl);
  stationsApi.getStations(fetchUrl).then(
    response => {
      if (response.status !== 200) {
        dispatch({
          type: actionTypes.ACTION_GET_STATIONS_FAILED,
          errorMessage: "Error status" + response.status
        });
      } else {
        response.json().then(value => {
          const responseObject = value;
          dispatch({
            type: actionTypes.ACTION_GET_STATIONS_SUCCESS,
            items: stationsData
          });
        });
      }
    },
    error => {
      dispatch({
        type: actionTypes.ACTION_GET_STATIONS_FAILED,
        errorMessage: "something went wrong"
      });
    }
  );
};
