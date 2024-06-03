import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // projects: [
  //   {
  //     id: 1,
  //     name: "Project name",
  //     files: [
  //       {
  //         id: 1,
  //         name: "File name",
  //         type: "audio",
  //         url: "https://www.example.com",
  //        source: "RSS feed",
  //       },
  //   },
  projects: [],
  loading: false,
  error: null,
};

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    addProject(state, action) {
      state.projects.push(action.payload);
    },
    addFiletoProject(state, action) {
      const name = action.payload.name;
      const { id, fileName, fileLink } = action.payload.file;
      const project = state.projects.find((project) => project.name === name);
      project.files.push({
        id: id,
        name: fileName,
        url: fileLink,
      });
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const actions = projectSlice.actions;

export default projectSlice.reducer;
