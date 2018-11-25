import { REST_API_URL, STD_HEADERS } from '../constants/server';

const loginUrl = "http://127.0.0.1:8000/login/";

export const login = (data) => (
  fetch(
   loginUrl,
    {
      method: 'POST',
      headers: {...STD_HEADERS},
      body: JSON.stringify(data)
    }
  )
)
