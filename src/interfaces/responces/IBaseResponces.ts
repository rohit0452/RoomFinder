export default class IBaseResponces {
  constructor(
    statusCode?: number,
    status?: any,
    message?: string,
    data?: any,
    error?: any
  ) {
    this.statusCode = statusCode || 400;
    this.status = status || "Fail";
    this.message = message;
    this.data = data;
    this.error = error;
  }
  statusCode: number;
  status: string;
  message: string;
  data: any;
  error: any;
}
