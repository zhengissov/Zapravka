import { REST_API_URL, STD_HEADERS } from '../constants/server';

const citiesUrl = REST_API_URL + "city/";
// const citiesUrl = 'https://jsonplaceholder.typicode.com/posts';

export const getCities = (token) => (
  fetch(
   citiesUrl,
    {
      // method: 'GET',
      // headers: {...STD_HEADERS, "Authorization": token},
    }
  )
)
