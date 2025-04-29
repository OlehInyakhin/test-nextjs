import { AxiosError } from 'axios';

export type Language = 'en';
export type ErrorType = 'information' | 'error' | 'warning';

export type Error = {
  errors: { message: string; type: ErrorType }[];
  error?: string;
  properties?: Record<string, unknown>;
};

export type BackendError = AxiosError<Error>;

export const isObject = (obj: unknown): obj is object => {
  return typeof obj === 'object' && obj !== null;
};

export const isArray = (arr: unknown): arr is Array<unknown> => {
  return Array.isArray(arr);
};

export const isBackendError = (error: unknown): error is BackendError => {
  return (
    isObject(error) &&
    'response' in error &&
    isObject(error.response) &&
    'data' in error.response &&
    isObject(error.response.data) &&
    'errors' in error.response.data &&
    isArray(error.response.data.errors) &&
    isObject(error.response.data.errors[0]) &&
    'message' in error.response.data.errors[0]
  );
};
