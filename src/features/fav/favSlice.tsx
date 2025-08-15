import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '@/types/product';

interface FavState {
  items: Product[];
}

const initialState: FavState = {
  items: [],
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
  },
});

export const { addToFav, removeFromFav, clearFav } = favSlice.actions;
export default favSlice.reducer;