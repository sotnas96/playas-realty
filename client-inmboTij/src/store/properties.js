import { createAsyncThunk, createSelector, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    properties: [],
    loading: false
}
export const createPropertyAsync = createAsyncThunk("admin/create", async ({property, token}) => {
    try {

        const createProperty = await axios.post('http://localhost:4000/api/admin/create', property, {
            headers: {
                Authorization: token,
                'Content-Type':'multipart/form-data'
            }
        })
        return createProperty.data
    } catch (error) {
        return error.response.data
    }   
})
export const getPropertiesAsync = createAsyncThunk("all/properties", async () => {
    try {
        const response = await axios.get('http://localhost:4000/api');
        return response.data
    } catch(error) {
        return error.response.data
    }
})
const propertiesSlice = createSlice({
    name: 'properties',
    initialState,
    reducers:{
        
    },
    extraReducers: (builder) => {
        builder
            .addCase(createPropertyAsync.fulfilled, (state, action) => {
                state.properties.push(action.payload.data)
            })
            .addCase(getPropertiesAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.properties = action.payload.data
            })
            .addCase(getPropertiesAsync.pending, (state) => {
                state.loading = true
            })
    }
}
)
export const getProperties = state => state.properties.properties;
export const getLoadingState = state => state.properties.loading;

export const selectPropertyById = createSelector(
    state => state.properties.properties,
    (_, id) => id,
    (properties, id) => {
        const property = properties.find(property => property._id == id)
        return property ? property : null;
    }
    
);
export default propertiesSlice.reducer;