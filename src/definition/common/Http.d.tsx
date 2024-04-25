export interface HttpResponse {
  code: number;
  data: any;
}
export class ServiceError {
  public code: number;
  public data: any;

  constructor(code: number, data: any) {
    this.code = code;
    this.data = data;
  }
}
