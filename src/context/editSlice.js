import { createSlice } from "@reduxjs/toolkit";

export const editSlice = createSlice({
  name: "module",
  initialState: {
    value: false,
  },
  reducers: {
    edit: (state) => {
      state.value = !state.value;
    },
  },
});

export const { edit, id } = editSlice.actions;

export default editSlice.reducer;
