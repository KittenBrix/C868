export interface ResponseBuilderOpts {
    error: Error;
    log: boolean;
  }
  
export interface ResponseBuilderData<T> {
  data: T;
  msg: string;
  err: boolean;
  options?: ResponseBuilderOpts;
}