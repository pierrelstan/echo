import axios from "axios";
import routes from "@/utils/routes";
import { Product } from "@/utils/types";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import type { AppState } from "redux/store";

export interface ProductState {
  products: Product[];
  loading: "idle" | "pending" | "succeeded" | "rejected";
}

export const initialState: ProductState = {
  products: [],
  loading: "idle",
};

export const getProductsCategoryAsync = createAsyncThunk(
  "product/getProductCategory",
  async (category: string | string[], thunkAPI) => {
    const { data: products } = await axios.get(
      `${process.env.NEXT_PUBLIC_DATABASE_URL}` + routes.categories(category),
      {
        signal: thunkAPI.signal,
      }
    );
    return products.products;
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductsCategoryAsync.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(getProductsCategoryAsync.fulfilled, (state, action) => {
      state.products = action.payload;
      state.loading = "succeeded";
    });
    builder.addCase(getProductsCategoryAsync.rejected, (state) => {
      state.loading = "rejected";
    });
  },
});

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectProducts = (state: AppState) => state.product;

export default productSlice.reducer;
