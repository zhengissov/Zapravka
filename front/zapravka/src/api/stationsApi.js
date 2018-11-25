import { REST_API_URL, STD_HEADERS } from '../constants/server';

const stationUrl = REST_API_URL + "stations/";

export const getStations = (data) => (
  fetch(
    stationUrl+data,
    {
      // method: 'GET',
      // headers: {...STD_HEADERS, "Authorization": token},
    }
  )
)
