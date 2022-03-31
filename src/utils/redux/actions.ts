import { AxiosError, AxiosResponse } from 'axios';
import { IAPIContants } from './constant';

interface IAction {
  type: string;
  payload?: any;
  meta?: any;
  error?: boolean;
}

export const createAction =
  (type: string, error: boolean = null): Function =>
  (payload: any = null, meta: any = null): IAction => ({
    type,
    payload,
    meta,
    error,
  });

export const createErrorAction = (type: string): Function => createAction(type, true);

const mergeMeta = (left: any = {}, right: any = {}): any => {
  const newMeta = { ...left, ...right };
  return Object.keys(newMeta).length ? newMeta : null;
};

export const createApiAction = (constants: IAPIContants, request: Function, options: any = {}) => {
  const requestAction = createAction(constants.REQUEST);
  const successAction = createAction(constants.SUCCESS);
  const failureAction = createErrorAction(constants.FAILURE);

  return (payload: any, meta: any = {}) =>
    (dispatch: Function, getState: Function) => {
      const finalMeta = mergeMeta(options.meta, meta);
      dispatch(requestAction(payload, finalMeta));

      return request(payload, finalMeta, dispatch, getState)
        .then((response: AxiosResponse) => {
          const data = response && response.data ? response.data : response;
          dispatch(successAction(data, finalMeta));
          return response;
        })
        .catch((error: AxiosError) => {
          dispatch(failureAction(error, finalMeta));
          throw error;
        });
    };
};
