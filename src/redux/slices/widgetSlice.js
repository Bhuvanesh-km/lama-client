import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  widgetData: [],
  loading: false,
  error: null,
};

const widgetSlice = createSlice({
  name: "widget",
  initialState,
  reducers: {
    addFetchedWidgetData(state, action) {
      state.widgetData = action.payload;
    },
    updateWidgetData(state, action) {
      state.widgetData = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const actions = widgetSlice.actions;

export default widgetSlice.reducer;
