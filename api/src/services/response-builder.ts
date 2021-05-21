import { ResponseBuilderOpts, ResponseBuilderData } from '../common/types/response_builder';

/**
 * @description ResponseBuilder is a utility that helps standardize the
 * datasets of all data returned, especially useful when handling API calls
 * @param {any} data Data to be sent to the caller.
 * @param {string} msg A message describing the results of the data returned
 * @param {boolean} err A flag that represents if the response should be
 * handled as an error
 * @param {ResponseBuilderOpts} options Additional options.
 * @returns {ResponseBuilderData}
 */
export const ResponseBuilder = <T>(
  data: any = null,
  msg: string = null,
  err: boolean = false,
  options?: ResponseBuilderOpts
): ResponseBuilderData<T> => {
  if (options && options.log) {
    console.error(options.error);
  }

  return {
    data,
    msg,
    err,
    options
  };
};

export const ResponseHandler = (
  ctx: any,
  payload: ResponseBuilderData<any> = {
    data: null,
    msg: null,
    err: null,
    options: null
  }
): ResponseBuilderData<any> => {
  const { data, msg, err, options } = payload;

  if (err && options) {
    ctx.app.emit('error', options.error, ctx);
  }

  return {
    data,
    err,
    msg
  };
};

export default ResponseBuilder;
