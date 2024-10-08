import { createAsyncThunk, createSelector, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = import.meta.env.VITE_API_BACK_URL;
// const url = 'http://localhost:4000/api';
const initialState = {
    properties: [],
    loading: false,
    hasFetched: false,
    creationLoading: false
}
export const createPropertyAsync = createAsyncThunk("admin/create", async ({property, token}) => {
    try {

        const response = await axios.post(`${url}/admin/create`, property, {
            headers: {
                Authorization: token,
                'Content-Type':'multipart/form-data'
            }
        })
        return response.data
    } catch (error) {
        return error.response.data
    }   
})
export const getPropertiesAsync = createAsyncThunk("all/properties", async () => {
    try {
        const response = await axios.get(`${url}`);
        return response.data
    } catch(error) {
        return error.response.data
    }
})
export const updatePropertyAsync = createAsyncThunk("admin/update", async ({property, token}) => {
    try{
        const response = await axios.patch(`${url}/admin/edit`, property, {
            headers: {
                Authorization: token,
                'Content-Type':'multipart/form-data'
            }
        });
        return response.data
    } catch(error) {
        return error.response.data
    }
})
export const deletePropertyAsync = createAsyncThunk ("admin/delete", async ({ propertyId, token}) => {
    try {
        const response = await axios.delete(`${url}/admin/delete`, {
            data:{_id: propertyId},
            headers: {
                Authorization: token
            }
        });
        return response.data
    } catch (error) {
        return error.response.data
    }
})
const propertiesSlice = createSlice({
    name: 'properties',
    initialState,
    reducers:{
        uploadNewProperty: (state,action) => {
            state.properties.push(action.payload)
            state.creationLoading = false;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createPropertyAsync.fulfilled, (state, action) => {
                // state.properties.push(action.payload.data)
                state.creationLoading = true
            })
            .addCase(createPropertyAsync.rejected, (state, action) => {
                // state.properties.push(action.payload.data)
                state.creationLoading = false
            })
            .addCase(getPropertiesAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.hasFetched = true;
                state.properties = action.payload.data
            })
            .addCase(getPropertiesAsync.pending, (state) => {
                state.loading = true
            })
            .addCase(updatePropertyAsync.fulfilled, (state, action) => {
                state.properties = state.properties.filter(element => element._id != action.payload.data._id)           
                state.properties.push(action.payload.data)
            })
            .addCase(deletePropertyAsync.fulfilled, (state, action) => {
                state.properties = state.properties.filter(element => element._id != action.payload.data._id);
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
export const { uploadNewProperty } = propertiesSlice.actions;
export default propertiesSlice.reducer;
