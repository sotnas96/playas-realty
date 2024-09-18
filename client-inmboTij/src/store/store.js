import { configureStore } from "@reduxjs/toolkit";
import authReducer from './authSlice'
import propertiesReducer from "./properties";
import contactReducer from "./contactSlice";
export const store = configureStore({
    reducer:{
        auth: authReducer,
        properties: propertiesReducer,
        contacts: contactReducer
    }
})