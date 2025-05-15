// Common interfaces shared across different endpoints

export interface DotTONOptions {
  apiKey?: string;
  baseUrl?: string;
  timeout?: number;
}

export interface DotTONErrorResponse {
  ok: false;
  code: number;
  error: string;
  message: string;
}

// Base response interface that all responses extend
export interface BaseResponse {
  ok: boolean;
}