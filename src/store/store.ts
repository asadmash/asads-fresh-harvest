// Redux store with rtk query

// imports
import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "@/features/api/apiSlice";
import authReducer from "@/features/auth/authSlice";
import cartReducer from '@/features/cart/cartSlice';
import favReducer from '@/features/fav/favSlice';
// import uiReducer from "@/features/ui/uiSlice";

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authReducer,
          cart: cartReducer,
    fav: favReducer,
        // ui: uiReducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(apiSlice.middleware),
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;