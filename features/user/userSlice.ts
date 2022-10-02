import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { AppState } from "redux/store";

export interface UserState {
  isAuth: boolean;
  token: string;
  user: { _id: string; email: string; password: string };
}

export const initialState: UserState = {
  isAuth: false,
  token: "",
  user: { _id: "", email: "", password: "" },
};

export const userSlice = createSlice({
  name: "user/auth",
  initialState,
  reducers: {
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

export const { login, logout } = userSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectIsAuth = (state: AppState) => state.user.isAuth;

export default userSlice.reducer;
