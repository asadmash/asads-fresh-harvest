import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// define the state type
interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
  showModal: boolean; 
    redirectAfterLogin: string | null;
}

// define initial state
const initialState: AuthState = {
  token: null,
  isAuthenticated: false,
  showModal: false,
    redirectAfterLogin: null,
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
      state.showModal = false; // close modal on login
    },
    logout(state) {
        // clear token
      state.token = null;
    //   mark user as logged out
      state.isAuthenticated = false;
    },
     openAuthModal(state, action: PayloadAction<string | null>) {
      state.showModal = true;
      state.redirectAfterLogin = action.payload ?? null;
    },
      closeAuthModal(state) {
      state.showModal = false;
    },
    setRedirectAfterLogin(state, action: PayloadAction<string>) {
      state.redirectAfterLogin = action.payload;
    },
    
 clearRedirectAfterLogin(state) {
      state.redirectAfterLogin = null;
    },
  },
});

// export action and reducer
export const { setToken, logout, openAuthModal, closeAuthModal, setRedirectAfterLogin, clearRedirectAfterLogin, } = authSlice.actions;
export default authSlice.reducer;