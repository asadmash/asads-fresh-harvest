// Redux store with rtk query

// imports
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { apiSlice } from "@/features/api/apiSlice";
import authReducer from "@/features/auth/authSlice";
import cartReducer from "@/features/cart/cartSlice";
import favReducer from "@/features/fav/favSlice";
// import uiReducer from "@/features/ui/uiSlice";


// Combine reducers
const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  fav: favReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});


//Configure store
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
     getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
