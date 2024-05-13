import { combineReducers, configureStore } from '@reduxjs/toolkit';
import chooseSlice from '../features/Choose/chooseSlice';
import popularSetsSlice from '../features/PopularSets/popularSetsSlice';
import careSlice from '../features/Care/careSlice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['choose', 'popularSets','care'],
}

const rootReducer = combineReducers({
  choose: chooseSlice,
  popularSets: popularSetsSlice,
  care: careSlice
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})


export default store;
export const persistor = persistStore(store)