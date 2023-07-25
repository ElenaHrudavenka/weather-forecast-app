import { AppThunkType } from '../store';
import { AppAPI } from '../../api/api';

type AppStateType = {
  isLoading: boolean;
  access_token: string;
  token_type: string;
};
const initialState: AppStateType = {
  isLoading: false,
  access_token: '',
  token_type: '',
};
export type AppActionType =
  | ReturnType<typeof setIsLoading>
  | ReturnType<typeof setToken>
  | ReturnType<typeof setWeatherData>;

export const appReducer = (state = initialState, action: AppActionType) => {
  switch (action.type) {
    case 'APP/SET-IS-LOADING': {
      return {
        ...state,
        isLoading: action.isLoading,
      };
    }
    case 'APP/SET-TOKEN': {
      return {
        ...state,
        access_token: action.access_token,
        token_type: action.token_type,
      };
    }
    case 'APP/SET-WEATHER-DATA': {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};

export const setIsLoading = (isLoading: boolean) => ({ type: 'APP/SET-IS-LOADING', isLoading } as const);
export const setToken = (access_token: string, token_type: string) =>
  ({ type: 'APP/SET-TOKEN', access_token, token_type } as const);
export const setWeatherData = () => ({ type: 'APP/SET-WEATHER-DATA' } as const);

export const getTokenTC = (): AppThunkType => (dispatch) => {
  dispatch(setIsLoading(true));
  AppAPI.getToken()
    .then((resData) => {
      dispatch(setToken(resData.access_token, resData.token_type));
    })
    .catch((e) => console.log(e))
    .finally(() => {
      dispatch(setIsLoading(true));
    });
};

export const getWeatherDataTC =
  (access_token: string): AppThunkType =>
  (dispatch) => {
    dispatch(setIsLoading(true));
    AppAPI.getWeatherData()
      .then((resData) => {
        console.log(resData);
      })
      .catch((e) => console.log(e))
      .finally(() => {
        dispatch(setIsLoading(true));
      });
  };
