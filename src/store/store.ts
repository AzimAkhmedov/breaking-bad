import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { appReducer } from './modules/app';
import { deathsReducer } from './modules/deaths';
import { episodesReducer } from './modules/episodes/index';

export const store = configureStore({
  reducer: {
    app: appReducer,
    episodes: episodesReducer,
    deaths: deathsReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({ serializableCheck: false });
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
