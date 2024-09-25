import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const url = import.meta.env.VITE_API_BACK_URL
// const url = 'http://localhost:4000/api'
export const getInqueriesAsync = createAsyncThunk('inqueries', async(token) => {
    try {
        const { data } = await axios.get(`${url}/inqueries`, {
            headers: {
                Authorization: token
            }
        })
        return data
        } catch(error) {
            return error.response.data
        }
})
export const createInquerieAsync = createAsyncThunk("create/inquerie", async(info) => {
    try {
        const { data } = await axios.post(`${url}/contact`, info);
        return data
    }catch (error) {
        error.response.data
    }
})
const contactSlice = createSlice({
    name:'contacts',
    initialState: {
        inqueries:[],
        loading: false
    },
    reducers: {

    },
    extraReducers:(builder) => {
        builder
            .addCase(getInqueriesAsync.pending, (state) => {
                state.loading = true;
            })
            .addCase(getInqueriesAsync.fulfilled, (state, action) => {
                state.loading = false,
                state.inqueries = action.payload.data;
            })
            .addCase(createInquerieAsync.fulfilled, (state, action) => {
                state.inqueries.push(action.payload.data);
                state.loading = false;
                console.log(action);
            })
            .addCase(createInquerieAsync.pending, state => {
                state.loading = true;
            })
    }
});
export const getInqueries = state => state.contacts.inqueries.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

export default contactSlice.reducer;