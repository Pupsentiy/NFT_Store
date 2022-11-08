import { toast } from 'react-toastify';

import { API } from '../common/enums';

async function http(path: string, config: RequestInit) {
  try {
    const request = new Request(path, config);
    const response = await fetch(request);

    if (response.status !== 200 && 201) {
      console.error(response.statusText);
    }
    if (response.statusText === 'Unauthorized') {
      window.location.href = '/auth';
    }
    if (response.status === 401) {
      return;
    }
    if (!localStorage.getItem('accessToken') && !localStorage.getItem('refreshToken')) {
      console.error('Login error please re-login');
    }
    return await response.json();
  } catch (err: any) {
    console.error(err.message);
  }
}

const headers = {
  'Content-Type': 'application/json',
};
const authorizationHeaders = { Authorization: `Bearer ${localStorage.getItem('accessToken')}` };
console.log(authorizationHeaders, 'authorizationHeaders')

export async function httpQuery<U>(method: string, path: string, body?: U) {
  if ((method === 'POST' || method === 'PUT' || method === 'PATCH') && authorizationHeaders.Authorization) {
    const config = {
      method,
      headers: {
        ...headers,
        ...authorizationHeaders,
      },
      body: JSON.stringify(body),
    };

    return await http(`${API.mainPath}${path}`, config);
  } else if (method === 'GET' && authorizationHeaders.Authorization) {
    const config = {
      method,
      headers: {
        ...headers,
        ...authorizationHeaders,
      },
    };
    return await http(`${API.mainPath}${path}`, config);
  }
  return await http(`${API.mainPath}${path}`, { method, headers });
}

export async function authQuery<T, U>(body: T, path: string): Promise<U> {
  const config = {
    method: 'POST',
    body: JSON.stringify(body),
    headers,
  };
  const inviteSignUpConfig = {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      ...headers,
      ...authorizationHeaders,
    },
  };

  return await http(`${API.mainPath}${path}`, path === 'pathForAfterInvite' ? inviteSignUpConfig : config);
}