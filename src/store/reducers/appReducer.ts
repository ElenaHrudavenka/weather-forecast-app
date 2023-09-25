import { AppThunkType } from '../store';
import { AppAPI } from '../../api/api';

type AppStateType = {
  isLoading: boolean;
  access_token: string;
  token_type: string;
};
export type TokenResponseType = {
  access_token: string;
  token_type: string;
};
const initialState: AppStateType = {
  isLoading: false,
  access_token: '',
  token_type: '',
};
export type AppActionType = ReturnType<typeof setIsLoading> | ReturnType<typeof setToken>;

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
    default:
      return state;
  }
};

export const setIsLoading = (isLoading: boolean) => ({ type: 'APP/SET-IS-LOADING', isLoading } as const);
export const setToken = (access_token: string, token_type: string) =>
  ({ type: 'APP/SET-TOKEN', access_token, token_type } as const);

export const getTokenTC = (): AppThunkType => (dispatch) => {
  AppAPI.getToken()
    .then((resData: TokenResponseType) => {
      dispatch(setToken(resData.access_token, resData.token_type));
    })
    .catch((err: any) => console.log(err)); //добавить отображение ошибки
};
