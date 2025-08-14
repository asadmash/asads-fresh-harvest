// Redux store with rtk query

// imports
import { configureStore } from "@reduxjs/toolkit";
import {apiSlice} from "@fetures/api/apiSlice";
import authReducer from "@features/auth/authSlice";
import uiReducer from "@/features/ui/uiSlice";