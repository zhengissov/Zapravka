import { REST_API_URL, STD_HEADERS } from '../constants/server';

const nearbyUrl = "http://localhost:8000/api/v1/stations/nearby/";
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
