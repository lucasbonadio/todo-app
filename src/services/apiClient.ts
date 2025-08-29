// src/services/apiClient.ts

const API_BASE_URL = 'https://todoappapi-production-06e5.up.railway.app/api';

async function client<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ message: 'Ocorreu um erro na requisição.' }));
    throw new Error(errorData.message || 'Falha na requisição');
  }

  if (response.status === 204) {
    return undefined as T;
  }

  return response.json();
}

export const api = {
  get: <T>(endpoint: string) => client<T>(endpoint),
  
  post: <T, U>(endpoint: string, body: U) => client<T>(endpoint, {
    method: 'POST',
    body: JSON.stringify(body),
  }),

  put: <T, U>(endpoint: string, body: U) => client<T>(endpoint, {
    method: 'PUT',
    body: JSON.stringify(body),
  }),

  delete: <T>(endpoint: string) => client<T>(endpoint, {
    method: 'DELETE',
  }),
};