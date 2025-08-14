import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// define the state type
interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
}

// define initial state
const initialState: AuthState = {
  token: null,
  isAuthenticated: false,
};

// the auth slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken(state, action: PayloadAction<string>) {
        // save the token to state
      state.token = action.payload;
    //   user authenticated
      state.isAuthenticated = true;
    },
    logout(state) {
        // clear token
      state.token = null;
    //   mark user as logged out
      state.isAuthenticated = false;
    },
  },
});

// export action and reducer
export const { setToken, logout } = authSlice.actions;
export default authSlice.reducer;