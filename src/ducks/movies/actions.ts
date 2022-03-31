import { createAction, createApiAction } from '../../utils/redux/actions';
import api from './api';
import { GET_MOVIES_TYPES, SELECT_MOVIE_TYPE } from './types';

export const getMovies = createApiAction(GET_MOVIES_TYPES, api.getMoviesRequest);
export const selectMovie = createAction(SELECT_MOVIE_TYPE);
