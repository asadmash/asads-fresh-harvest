// import the base api setup
import { apiSlice } from "../api/apiSlice";

// extend base api with auth endports
export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // login
    login: builder.mutation<
      { token: string },
      { email: string; password: string }
    >({
      query: (credentials) => ({
        //a post request to auth/login with creadentials
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
    // signup
    signup: builder.mutation<
      { token: string },
      { email: string; password: string }
    >({
      query: (credentials) => ({
        //a post request to users/register with creadentials
        url: "/users/register",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

// export rtk generated hooks
export const { useLoginMutation, useSignupMutation } = authApi;
