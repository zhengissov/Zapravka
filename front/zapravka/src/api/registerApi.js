import { REST_API_URL, STD_HEADERS } from '../constants/server';

const registerUrl = "http://127.0.0.1:8000/register/";

export const register = (data) => (
  fetch(
    registerUrl,
    {
      method: 'POST',
      headers: {...STD_HEADERS},
      body: JSON.stringify(data)
    }
  )
)
