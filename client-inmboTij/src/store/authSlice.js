import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
    admin: null,
    isAuth: false,
    status: 'idle'
}
export const signInAsync = createAsyncThunk("admin/login", async (credentials) => {
    try {
        const { data } = await axios.post('http://back-playa-realty.us-east-1.elasticbeanstalk.com/api/login', credentials)
        return data
    }catch(error) {
        return error.response.data
    }
})
export const checkTokenAsync = createAsyncThunk("admin/checkToken", async (token) => {
    try {
        const { data } = await axios.get('http://back-playa-realty.us-east-1.elasticbeanstalk.com/api/checkToken',{
            headers: {
                Authorization:token
            }
        } );
        return data
    }catch(error){
        return error.response.data
    }
})

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers: {
        
        logout: (state, action) => {
            state.admin = null;
            state.isAuth = false;
            localStorage.removeItem('token');
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(signInAsync.fulfilled, (state, action) => {
                state.admin = action.payload.token;
                state.isAuth = action.payload.success;
                if (action.payload.success) localStorage.setItem('token', action.payload.token);
            })
            .addCase(checkTokenAsync.fulfilled, (state, action) => {
                state.admin = action.payload.success ? action.payload.token : null;
                state.isAuth = action.payload.success;
            })
    }
})
export const { logout } = authSlice.actions;
export default authSlice.reducer; 