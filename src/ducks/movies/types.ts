import { createApiConstants } from '../../utils/redux/constant';
import CONSTANTS from './constants';

export const NAMESPACE = 'MOVIES';
export const GET_MOVIES_TYPES = createApiConstants(NAMESPACE, 'get_movies_list');
export const SELECT_MOVIE_TYPE = `${NAMESPACE}/${CONSTANTS.SELECT_MOVIE}`;
