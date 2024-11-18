import AsyncStorage from "@react-native-async-storage/async-storage";
import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {persistReducer, persistStore} from "redux-persist";
import {bookReducer, newBookReducer, trendingBookReducer} from "./slice";
const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  book: bookReducer,
  trendingBook: trendingBookReducer,
  newBook: newBookReducer,
});

export const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    });
  },
});

export const persistor = persistStore(store);
export const clearPersistedData = () => {
  persistor.purge();
};
export default store;
