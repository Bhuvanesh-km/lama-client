import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  files: [],
  loading: false,
  error: null,
};

const filesSlice = createSlice({
  name: "files",
  initialState,
  reducers: {
    addFile(state, action) {
      state.files.push(action.payload);
    },
    addFetchedFiles(state, action) {
      state.files = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const actions = filesSlice.actions;

export default filesSlice.reducer;
