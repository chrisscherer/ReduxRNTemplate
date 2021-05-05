import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { GetProductFromBarcode } from '../services/product.service.js';

const initialState = {
    items:[],
    products: []
}

export const findProductByBarcode = createAsyncThunk(
    'audit/GetProductFromBarcode',
    async (barcode) => {
        const response = await GetProductFromBarcode(barcode);
        return response.product;
    }
);

export const auditSlice = createSlice({
    name: 'audit',
    initialState,
    reducers : {
        addItem: (state, action) => {
            state.items = [...state.items, action.payload];
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(findProductByBarcode.pending, (state) => {
                state.status = "loading";
            })
            .addCase(findProductByBarcode.fulfilled, (state, action) => {
                state.status = 'idle';
                state.products = [...state.products, action.payload];
                console.log(state.products);
            });
    }
});

export const { addItem } = auditSlice.actions;
export default auditSlice.reducer;