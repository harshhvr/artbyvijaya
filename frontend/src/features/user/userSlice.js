import { createSlice } from "@reduxjs/toolkit";
import { users } from "../../data/users";

const initialState = {
  isActive: true,
  user: users[0],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signIn: (state) => {
      state.isActive = true;
      state.user = users[0];
    },
    signOut: (state) => {
      state.isActive = false;
      state.user = null;
    },
  },
});

export const { signIn, signOut } = userSlice.actions;

export default userSlice.reducer;
