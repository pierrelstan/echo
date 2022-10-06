import { dummyDataUser } from "@/utils/test.utils";
import userReducer, { login, logout } from "./userSlice";

import { initialState } from "./userSlice";

describe("user reducer", () => {
  it("should handle initial state", () => {
    expect(userReducer(undefined, { type: "unknown" })).toEqual(initialState);
  });

  it("login", () => {
    const actual = userReducer(initialState, login(dummyDataUser));
    expect(actual.isAuth).toBe(true);
  });
  it("logout", () => {
    const actual = userReducer(initialState, logout());
    expect(actual.isAuth).toBe(false);
  });
});
