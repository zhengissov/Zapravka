import * as actionTypes from "../constants/actionTypes";
import * as stationsApi from "../api/stationsApi";


const stationsData = [
   {
     id: 1,
     name: "KazMunaiGas",
     img: "kmg",
     rating: 4.7,
     ratingCounter: 35,
     address: "175 Kabanbai Batyr",
     city: "Almaty",
     tel: "678-973-2117",
     latitude: 33.744308400248,
     longitude: -84.379516839981
   },
   {
     id: 2,
     name: "Helios",
     img: "helios",
     rating: 4.3,
     ratingCounter: 25,
     address: "175 Naurysbai Batyr",
     city: "Almaty",
     tel: "678-973-2118",
     latitude: 53.744308400248,
     longitude: -74.379516839981
   },
   {
     id: 3,
     name: "Helios",
     img: "helios",
     rating: 4.3,
     ratingCounter: 25,
     address: "175 Naurysbai Batyr",
     city: "Almaty",
     tel: "678-973-2118",
     latitude: 53.744308400248,
     longitude: -74.379516839981
   },
   {
     id: 4,
     name: "Helios",
     img: "helios",
     rating: 4.3,
     ratingCounter: 25,
     address: "175 Naurysbai Batyr",
     city: "Almaty",
     tel: "678-973-2118",
     latitude: 53.744308400248,
     longitude: -74.379516839981
   },
   {
     id: 5,
     name: "Helios",
     img: "helios",
     rating: 4.3,
     ratingCounter: 25,
     address: "175 Naurysbai Batyr",
     city: "Almaty",
     tel: "678-973-2118",
     latitude: 53.744308400248,
     longitude: -74.379516839981
   },
   {
     id: 6,
     name: "Helios",
     img: "helios",
     rating: 4.3,
     ratingCounter: 25,
     address: "175 Naurysbai Batyr",
     city: "Almaty",
     tel: "678-973-2118",
     latitude: 53.744308400248,
     longitude: -74.379516839981
   },
   {
     id: 7,
     name: "Helios",
     img: "helios",
     rating: 4.3,
     ratingCounter: 25,
     address: "175 Naurysbai Batyr",
     city: "Almaty",
     tel: "678-973-2118",
     latitude: 53.744308400248,
     longitude: -74.379516839981
   }
 ];
 
export const getStations = () => (dispatch, getState) => {
  dispatch({
    type: actionTypes.ACTION_GET_STATIONS_STARTED
  });

  stationsApi.getStations().then(
    response => {
      if (response.status === 200) {
        dispatch({
          type: actionTypes.ACTION_GET_STATIONS_FAILED,
          errorMessage: "Error status" + response.status
        });
      } else {
        response.text().then(value => {
          const responseObject = stationsData;
          console.log(responseObject);
          dispatch({
            type: actionTypes.ACTION_GET_STATIONS_SUCCESS,
            items: responseObject
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
