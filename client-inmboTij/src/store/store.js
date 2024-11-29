import { configureStore } from "@reduxjs/toolkit";
import authReducer from './authSlice'
import propertiesReducer from "./properties";
import contactReducer from "./contactSlice";
import ownerReducer from './ownerSlice';
import serviceReducer from './serviceSlice';
export const store = configureStore({
    reducer:{
        auth: authReducer,
        properties: propertiesReducer,
        contacts: contactReducer,
        owner: ownerReducer,
        service: serviceReducer,
    }
})