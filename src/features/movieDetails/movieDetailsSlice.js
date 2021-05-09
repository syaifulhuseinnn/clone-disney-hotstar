import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiKey } from "../../common/endpoints";

export const getMovieDetails = createAsyncThunk(
  "movie/getDetails",
  async (id) => {
    try {
      const requestMovieDetails = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US&append_to_response=videos`
      );
      const responseMovieDetails = await requestMovieDetails.json();
      return responseMovieDetails;
    } catch (error) {
      console.log(error);
    }
  }
);

export const movieSlice = createSlice({
  name: "movie",
  initialState: {
    status: "idle",
    data: undefined,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getMovieDetails.pending]: (state, action) => {
      state.status = "loading";
    },
    [getMovieDetails.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.data = action.payload;
    },
    [getMovieDetails.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export const movieDetails = (state) => state.movie.data;

export default movieSlice.reducer;
