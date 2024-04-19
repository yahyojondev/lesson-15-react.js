import { configureStore } from "@reduxjs/toolkit";
import usersSlice, { addToUsers } from "./usersSlice";
import editSlice from "./editSlice";
import themeSlice from "./themeSlice";

export const store = configureStore({
  reducer: {
    users: usersSlice,
    edit: editSlice,
    theme: themeSlice,
  },
});
