import { configureStore } from "@reduxjs/toolkit";
import projectSlice from "./slices/projectSlice";
import filesSlice from "./slices/filesSlice";
import widgetSlice from "./slices/widgetSlice";

export const store = configureStore({
  reducer: {
    project: projectSlice,
    file: filesSlice,
    widget: widgetSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
