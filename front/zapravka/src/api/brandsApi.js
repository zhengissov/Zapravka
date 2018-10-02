import { REST_API_URL, STD_HEADERS } from '../constants/server';

const brandsUrl = REST_API_URL + "some_url";

export const getBrands = (token) => (
  fetch(
   brandsUrl,
    {
      method: 'GET',
      headers: {...STD_HEADERS, "Authorization": token},
    }
  )
)
