import * as actionTypes from "../constants/actionTypes";
import * as brandsApi from "../api/brandsApi";

const brandsData = [
  {
    brand_id: 1,
    brand_name: "KazMunaiGas",
    description: "KazMunaiGasKazMunaiGasKazMunaiGasKazMunaiGas"
  },
  {
   brand_id: 2,
   brand_name: "Helios",
   description: "HeliosHeliosHeliosHeliosHelios"
  }
];

export const getBrands = () => (dispatch, getState) => {
  dispatch({
    type: actionTypes.ACTION_GET_BRANDS_STARTED
  });

  brandsApi.getBrands().then(
    response => {
      if (response.status === 200) {
        dispatch({
          type: actionTypes.ACTION_GET_BRANDS_FAILED,
          errorMessage: "Error status" + response.status
        });
      } else {
        response.text().then(value => {
          const responseObject = brandsData;
          console.log(responseObject);
          dispatch({
            type: actionTypes.ACTION_GET_BRANDS_SUCCESS,
            items: responseObject
          });
        });
      }
    },
    error => {
      dispatch({
        type: actionTypes.ACTION_GET_BRANDS_FAILED,
        errorMessage: "something went wrong"
      });
    }
  );
};
