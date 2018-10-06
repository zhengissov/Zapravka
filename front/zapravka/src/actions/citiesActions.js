import * as actionTypes from "../constants/actionTypes";
import * as citiesApi from "../api/citiesApi";

const citiesData = [
  {
    city_id: 1,
    city_long: "AlmatyAlmaty",
    region_long: "Almaty",
    region_id: 1
  },
  {
    city_id: 2,
    city_long: "Astana",
    region_long: "Astana",
    region_id: 2
  },
  {
    city_id: 3,
    city_long: "Atyrau",
    region_long: "Atyrau",
    region_id: 3
  }
];

export const getCities = () => (dispatch, getState) => {
  dispatch({
    type: actionTypes.ACTION_GET_CITIES_STARTED
  });

  citiesApi.getCities().then(
    response => {
      if (response.status !== 200) {
        dispatch({
          type: actionTypes.ACTION_GET_CITIES_FAILED,
          errorMessage: "Error status" + response.status
        });
      } else {
        response.json().then(value => {
          const responseObject = value;
          console.log(value);
          dispatch({
            type: actionTypes.ACTION_GET_CITIES_SUCCESS,
            items: responseObject
          });
        });
      }
    },
    error => {
      dispatch({
        type: actionTypes.ACTION_GET_CITIES_FAILED,
        errorMessage: "something went wrong"
      });
    }
  );
};
