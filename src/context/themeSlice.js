import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    value: false,
  },
  reducers: {
    toogleMode: (state) => {
      state.value = !state.value;
    },
  },
});

export const { toogleMode } = themeSlice.actions;

export default themeSlice.reducer;
