import { REST_API_URL, STD_HEADERS } from '../constants/server';

const citiesUrl = REST_API_URL + "some_url";

export const getCities = (token) => (
  fetch(
   citiesUrl,
    {
      method: 'GET',
      headers: {...STD_HEADERS, "Authorization": token},
    }
  )
)
