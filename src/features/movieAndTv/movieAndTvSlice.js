import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  tvNewDisneyEndpoint,
  tvOriginalDisneyEndpoint,
  movieMarvelEndpoint,
  moviePopularDisneyEndpoint,
  movieUpcomingDisneyEndpoint,
  movieIndonesiaEndpoint,
  allTrending,
} from "../../common/endpoints";

const endpoints = [
  tvNewDisneyEndpoint,
  tvOriginalDisneyEndpoint,
  movieMarvelEndpoint,
  moviePopularDisneyEndpoint,
  movieUpcomingDisneyEndpoint,
  movieIndonesiaEndpoint,
  allTrending,
];

export const getMovieAndTv = createAsyncThunk(
  "movieAndTv/getMovieAndTv",
  async () => {
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
  }
);

export const movieAndTvSlice = createSlice({
  name: "movieAndTv",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getMovieAndTv.pending]: (state, action) => {
      state.status = "loading";
    },
    [getMovieAndTv.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.data = state.data.concat(action.payload);
    },
    [getMovieAndTv.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export const selectAllMovieAndTv = (state) => state.movieAndTv.data;

export default movieAndTvSlice.reducer;
