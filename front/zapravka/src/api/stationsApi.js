import { REST_API_URL, STD_HEADERS } from '../constants/server';

const stationUrl = REST_API_URL + "station";

export const getStations = (token) => (
  fetch(
    stationUrl,
    {
      // method: 'GET',
      // headers: {...STD_HEADERS, "Authorization": token},
    }
  )
)
