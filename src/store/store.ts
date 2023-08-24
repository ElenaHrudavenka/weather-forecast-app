import { useDispatch } from 'react-redux';
import { AnyAction, applyMiddleware, combineReducers, createStore } from 'redux';
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { appReducer } from './reducers/appReducer';
import { weatherReducer } from './reducers/weatherReducer';
import { locationReducer } from './reducers/locationReducer';

export type AppRootStateType = ReturnType<typeof rootReducer>;
export type AppThunkType = ThunkAction<void, AppRootStateType, unknown, AnyAction>;
export const AppDispatch = () => useDispatch<ThunkDispatch<AppRootStateType, void, AnyAction>>();

const rootReducer = combineReducers({
  app: appReducer,
  weather: weatherReducer,
  location: locationReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
