import { REST_API_URL, STD_HEADERS } from '../constants/server';

const nearbyUrl = REST_API_URL + "nearby";

export const nearby = (data) => (
  fetch(
   nearbyUrl,
    {
      method: 'POST',
      headers: {...STD_HEADERS},
      body: JSON.stringify(data)
    }
  )
)
