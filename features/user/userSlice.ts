import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartProduct, CartProductData } from "@/utils/types";
import type { AppState } from "redux/store";

export interface UserState {
  isAuth: boolean;
  token: string;
  user: { _id: string; email: string; password: string };
  cart: CartProductData[];
}

export const initialState: UserState = {
  isAuth: false,
  token: "",
  user: { _id: "", email: "", password: "" },
  cart: [],
};

export const userSlice = createSlice({
  name: "user/auth",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<CartProduct>) => {
      const { id } = action.payload;
      const existingItem = state.cart.find((x) => x.id === id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.cart.push(action.payload);
      }
    },
    removeProducts: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        cart: state.cart.filter((x) => x.id !== action.payload),
      };
    },
    changeProductQuantity: (state, action: PayloadAction<CartProduct>) => {
      const { quantity, id } = action.payload;
      return {
        ...state,
        cart: state.cart
          .map((x) => {
            if (x.id === id)
              return {
                ...x,
                quantity,
              };
            return x;
          })
          .filter((x) => x.quantity),
      };
    },
    removeProduct: (state, action: PayloadAction<string | string[]>) => {
      return {
        ...state,
        cart: state.cart.filter((x) => x.id !== action.payload),
      };
    },
    login: (state, action) => {
      state.isAuth = true;
      state.token = action.payload.token;
      state.user = { ...action.payload.user };
    },
    logout: (state) => {
      state.isAuth = false;
      state.token = "";
      state.user = { _id: "", email: "", password: "" };
    },
  },
});

export const {
  login,
  logout,
  addProduct,
  removeProducts,
  changeProductQuantity,
  removeProduct,
} = userSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectIsAuth = (state: AppState) => state.user.isAuth;
export const selectIsCart = (state: AppState) => state.user.cart;
export default userSlice.reducer;
