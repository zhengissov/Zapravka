import * as actionTypes from "../constants/actionTypes";
import * as loginApi from "../api/loginApi";

export const postLogin = (data) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.ACTION_POST_LOGIN_STARTED
  });

  loginApi.login(data).then(
    response => {
      if (response.status !== 200) {
        dispatch({
          type: actionTypes.ACTION_POST_LOGIN_STARTED,
          errorMessage: "Error status" + response.status
        });
      } else {
        response.json().then(value => {
          const responseObject = value;
          dispatch({
            type: actionTypes.ACTION_POST_LOGIN_SUCCESS,
            items: responseObject
          });
          
        });
      }
    },
    error => {
      dispatch({
        type: actionTypes.ACTION_POST_LOGIN_FAILED,
        errorMessage: "something went wrong"
      });
    }
  );
};
