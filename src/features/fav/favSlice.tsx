import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '@/types/product';

interface FavState {
  items: Product[];
  isFavSidebarOpen: boolean;
}

const initialState: FavState = {
  items: [],
  isFavSidebarOpen: false,
};

const favSlice = createSlice({
  name: 'fav',
  initialState,
  reducers: {
    addToFav: (state, action: PayloadAction<Product>) => {
      const exists = state.items.find(item => item.id === action.payload.id);
      if (!exists) state.items.push(action.payload);
    },
    removeFromFav: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    clearFav: (state) => {
      state.items = [];
    },
    openFavSidebar: (state) => {
      state.isFavSidebarOpen = true;
    },
    closeFavSidebar: (state) => {
      state.isFavSidebarOpen = false;
    },
  },
});

export const { addToFav, removeFromFav, clearFav, openFavSidebar, closeFavSidebar } = favSlice.actions;
export default favSlice.reducer;