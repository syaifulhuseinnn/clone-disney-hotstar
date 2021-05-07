import { configureStore } from "@reduxjs/toolkit";
import movieAndTvReducer from "../features/movieAndTv/movieAndTvSlice";
import genresReducer from "../features/genres/genreSlice";
import tvDetailsReducer from "../features/tvDetails/tvDetailsSlice";

export default configureStore({
  reducer: {
    movieAndTv: movieAndTvReducer,
    genres: genresReducer,
    tv: tvDetailsReducer,
  },
});
