import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiKey } from "../../common/endpoints";

const generateEndpoint = (id, seasons) => {
  return seasons.map(
    (season) =>
      `https://api.themoviedb.org/3/tv/${id}/season/${season.season_number}?api_key=${apiKey}&language=en-US&append_to_response=videos`
  );
};

const getTvSeasonDetails = async (id, seasons) => {
  const generatedEndpoint = await generateEndpoint(id, seasons);
  const requestTvSeasonDetails = await generatedEndpoint.map((endpoint) =>
    fetch(endpoint)
  );
  const responseTvSeasonDetails = await Promise.all(requestTvSeasonDetails);
  const responseTvSeasonDetailsJson = await Promise.all(
    responseTvSeasonDetails.map((response) => response.json())
  );
  return responseTvSeasonDetailsJson;
};

export const getTvDetails = createAsyncThunk("tv/getDetails", async (tv_id) => {
  try {
    const requestTvDetails = await fetch(
      `https://api.themoviedb.org/3/tv/${tv_id}?api_key=${apiKey}`
    );
    const responseTvDetails = await requestTvDetails.json();
    const requestTvSeasonDetails = await getTvSeasonDetails(
      responseTvDetails.id,
      responseTvDetails.seasons
    );

    return {
      tvDetails: responseTvDetails,
      tvSeasonDetails: requestTvSeasonDetails,
    };
  } catch (error) {
    console.log(error);
  }
});

export const tvSlice = createSlice({
  name: "tv",
  initialState: {
    status: "idle",
    data: undefined,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getTvDetails.pending]: (state, action) => {
      state.status = "loading";
    },
    [getTvDetails.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.data = action.payload;
    },
    [getTvDetails.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export const tvDetails = (state) => state.tv.data;

export default tvSlice.reducer;
