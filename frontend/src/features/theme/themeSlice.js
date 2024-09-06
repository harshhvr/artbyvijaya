import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  themes: [
    { id: 1, name: "light", palette: {} },
    { id: 2, name: "dark", palette: {} },
  ],
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {},
});

export const {} = themeSlice.actions;

export default themeSlice.reducer;
