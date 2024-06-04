import { configureStore } from "@reduxjs/toolkit";
import projectSlice from "./slices/projectSlice";
import filesSlice from "./slices/filesSlice";

export const store = configureStore({
  reducer: {
    project: projectSlice,
    file: filesSlice,
  },
});
