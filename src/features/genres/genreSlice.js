import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { genreMovieList, genreTvList } from "../../common/endpoints";

const endpoints = [genreMovieList, genreTvList];

export const getGenres = createAsyncThunk("genres/getGenres", async () => {
  try {
    const request = await endpoints.map((endpoint) => fetch(endpoint));
    const responses = await Promise.all(request);
    const jsonData = await Promise.all(
      responses.map((response) => response.json())
    );
    return jsonData;
  } catch (error) {
    console.log(error);
  }
});

export const genresSlice = createSlice({
  name: "genres",
  initialState: {
    status: "idle",
    data: [],
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getGenres.pending]: (state, action) => {
      state.status = "loading";
    },
    [getGenres.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.data = state.data.concat(action.payload);
    },
    [getGenres.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export const selectAllGenres = (state) => state.genres.data;
export default genresSlice.reducer;
