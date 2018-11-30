import * as actionTypes from "../constants/actionTypes";
import * as reviewsApi from "../api/reviewsApi";

export const getReviews = (data) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.ACTION_GET_REVIEWS_STARTED
  });

  reviewsApi.getReviews(data).then(
    response => {
      if (response.status !== 200) {
        dispatch({
          type: actionTypes.ACTION_GET_REVIEWS_FAILED,
          errorMessage: "Error status" + response.status
        });
      } else {
        response.json().then(value => {
          const responseObject = value;
          dispatch({
            type: actionTypes.ACTION_GET_REVIEWS_SUCCESS,
            items: responseObject
          });
          
        });
      }
    },
    error => {
      dispatch({
        type: actionTypes.ACTION_GET_REVIEWS_FAILED,
        errorMessage: "something went wrong"
      });
    }
  );
};

export const postReview = (data) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.ACTION_POST_REVIEW_STARTED
  });

  reviewsApi.getReviews(data).then(
    response => {
      if (response.status !== 200) {
        dispatch({
          type: actionTypes.ACTION_POST_REVIEW_FAILED,
          errorMessage: "Error status" + response.status
        });
      } else {
        response.json().then(value => {
          const responseObject = value;
          dispatch({
            type: actionTypes.ACTION_POST_REVIEW_SUCCESS,
            reviewPosted: responseObject
          });
          
        });
      }
    },
    error => {
      dispatch({
        type: actionTypes.ACTION_GET_REVIEWS_FAILED,
        errorMessage: "something went wrong"
      });
    }
  );
}