import { AxiosError } from 'axios';
import { Movie } from '../../interfaces/MoviePayloads';

interface IMoviesState {
  list: {
    data: Movie[];
    isLoading: boolean;
    error: AxiosError;
  };
  selectedMovie: Movie;
}

const initialState: IMoviesState = {
  list: {
    data: [],
    isLoading: false,
    error: null,
  },
  selectedMovie: null,
};

const reducer = (state = initialState, action) => {
  const MasterMap = {
    'MOVIES/GET_MOVIES_LIST_REQUEST': (): IMoviesState => ({
      ...state,
      list: {
        ...state.list,
        isLoading: true,
      },
    }),
    'MOVIES/GET_MOVIES_LIST_SUCCESS': (): IMoviesState => ({
      ...state,
      list: {
        ...state.list,
        data: action?.payload?.movies,
        isLoading: false,
      },
    }),
    'MOVIES/GET_MOVIES_LIST_FAILURE': (): IMoviesState => ({
      ...state,
      list: {
        ...state.list,
        error: action?.payload,
        isLoading: false,
      },
    }),
    'MOVIES/SELECT_MOVIE': (): IMoviesState => ({
      ...action.payload,
    }),
  };

  try {
    return MasterMap[action?.type]();
  } catch {
    return initialState;
  }
};

export default reducer;
