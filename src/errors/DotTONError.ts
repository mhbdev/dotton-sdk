export class DotTONError extends Error {
  statusCode: number;
  data: any;

  constructor(message: string, statusCode: number, data?: any) {
    super(message);
    this.name = 'DotTONError';
    this.statusCode = statusCode;
    this.data = data;
  }
}