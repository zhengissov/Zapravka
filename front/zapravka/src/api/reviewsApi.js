import { REST_API_URL, STD_HEADERS } from '../constants/server';

const reviewUrl = REST_API_URL + "comments";

export const getReviews = (data) => (
  fetch(
      reviewUrl+'/'+data,
      {
        //  method: 'GET',
        //  headers: {...STD_HEADERS},
        //  body: JSON.stringify(data)
       }
  )
)


export const postReview = (data) => (
  fetch(
      reviewUrl+'/'+data.id,
      {
         method: 'GET',
         headers: {...STD_HEADERS},
         body: JSON.stringify(data.body)
       }
  )
)
