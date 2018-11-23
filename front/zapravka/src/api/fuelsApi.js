import { REST_API_URL, STD_HEADERS } from '../constants/server';

const fuelsUrl = REST_API_URL + "fuel/";
// const citiesUrl = 'https://jsonplaceholder.typicode.com/posts';

export const getFuels = (token) => (
  fetch(
   fuelsUrl,
    {
      // method: 'GET',
      // headers: {...STD_HEADERS, "Authorization": token},
    }
  )
)
