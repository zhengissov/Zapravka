import * as actionTypes from "../constants/actionTypes";
import * as nearbyApi from "../api/nearbyApi";

export const postNearby = (data) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.ACTION_POST_NEARBY_STARTED
  });


  nearbyApi.nearby(data).then(
    response => {
      if (response.status !== 200) {
        dispatch({
          type: actionTypes.ACTION_POST_NEARBY_STARTED,
          errorMessage: "Error status" + response.status
        });
      } else {
        response.json().then(value => {
          const responseObject = value;
          dispatch({
            type: actionTypes.ACTION_POST_NEARBY_SUCCESS,
            items: responseObject
          });
        });
      }
    },
    error => {
      dispatch({
        type: actionTypes.ACTION_POST_NEARBY_FAILED,
        errorMessage: "something went wrong"
      });
    }
  );
};
