import * as actionTypes from "../constants/actionTypes";
import * as registerApi from "../api/registerApi";

export const postRegister = (data) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.ACTION_POST_REGISTER_STARTED
  });

  console.log(data);
  registerApi.register(data).then(
    response => {
      if (response.status !== 200) {
        dispatch({
          type: actionTypes.ACTION_POST_REGISTER_STARTED,
          errorMessage: "Error status" + response.status
        });
      } else {
        
        response.json().then(value => {
          const responseObject = value;
          dispatch({
            type: actionTypes.ACTION_POST_REGISTER_SUCCESS,
            items: responseObject
          });
        });
      }
    },
    error => {
      dispatch({
        type: actionTypes.ACTION_POST_REGISTER_FAILED,
        errorMessage: "something went wrong"
      });
    }
  );
};
