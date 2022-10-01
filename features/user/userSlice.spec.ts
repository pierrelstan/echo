import userReducer, { userAuthentication } from "./userSlice";

import { initialState } from "./userSlice";
const dummyDataUser = {
  user: {
    isAuth: true,
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRlbW91c2VyQHRlc3QuY29tIiwiaWF0IjoxNjY0NDc3NTk2LCJleHAiOjE2NjQ1MTM1OTZ9.Dt5PbZlaQO-ogyK7wqiUV8fpxc_QItjZrSRLfyorskc",
    user: {
      _id: "631ca88585a9572ba6119c57",
      email: "demouser@test.com",
      createdAt: "2022-09-10T15:08:53.850Z",
      password: "$2a$10$Cr7/9pAAmLyzRGJZsVYXJurL9H4/tZkdnJyMcjaDtgLvueBafFwGG",
      updatedAt: "2022-09-10T15:08:53.850Z",
    },
  },
};
describe("user reducer", () => {
  it("should handle initial state", () => {
    expect(userReducer(undefined, { type: "unknown" })).toEqual(initialState);
  });

  it("login", () => {
    const actual = userReducer(initialState, userAuthentication(dummyDataUser));
    expect(actual.isAuth).toBe(true);
  });
});
