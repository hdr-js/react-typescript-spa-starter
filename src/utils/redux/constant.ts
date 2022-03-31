export interface IAPIContants {
  REQUEST?: string;
  SUCCESS?: string;
  FAILURE?: string;
}

export const apiConstants: string[] = ['REQUEST', 'SUCCESS', 'FAILURE'];

export const createConstants =
  (namespace, prefix = null): Function =>
  (...constants): IAPIContants =>
    constants.reduce(
      (result: IAPIContants, constant: string) => ({
        [constant.toUpperCase()]: `${namespace}/${
          prefix ? `${prefix.toUpperCase()}_` : ''
        }${constant.toUpperCase()}`,
        ...result,
      }),
      {},
    );

export const createApiConstants = (namespace: string, prefix: string): IAPIContants =>
  createConstants(namespace, prefix)(...apiConstants);
