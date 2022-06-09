export const baseUri = process.env.REACT_APP_BASE_URL;
export const apiKey = process.env.REACT_APP_API_KEY;

const tvNetworkDisneyNew = {
  params: "/discover/tv",
  query:
    "&language=en-US&sort_by=first_air_date.desc&page=1&timezone=Asia/Jakarta&include_null_first_air_dates=false&with_networks=2739",
};

const tvDiscoverIndonesia = {
  params: "/discover/tv",
  query:
    "&sort_by=popularity.desc&page=1&timezone=Asia/Jakarta&include_null_first_air_dates=false&watch_region=ID&with_original_language=id&first_air_date.gte=2021-01-01&first_air_date.lte=2021-04-30",
};

const tvOriginalDisney = {
  params: "/discover/tv",
  query:
    "&language=en-US&timezone=Asia/Jakarta&with_networks=2739&include_null_first_air_dates=false&first_air_date_year=2021",
};

const movieMarvel = {
  params: "/discover/movie",
  query:
    "&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=true&page=1&with_companies=420",
};

const moviePopularDisney = {
  params: "/discover/movie",
  query:
    "&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=true&page=1&with_companies=2",
};

const movieUpcomingDisney = {
  params: "/discover/movie",
  query:
    "&language=en-US&sort_by=first_air_date.desc&include_adult=true&include_video=true&page=1&with_companies=2",
};

const movieIndonesia = {
  params: "/discover/movie",
  query:
    "&region=ID&sort_by=popularity.desc&include_adult=true&include_video=true&page=1&with_original_language=id&watch_region=ID",
};

const trending = {
  params: "/trending/all/week",
};

const genreMovie = {
  params: "/genre/movie/list",
  query: "&language=en-US",
};

const genreTv = {
  params: "/genre/tv/list",
  query: "&language=en-US",
};

export const tvSeasonDetails = {
  params: "/tv",
  query: "&language=en-US&append_to_response=videos",
};

export const tvNewDisneyEndpoint = `${baseUri}${tvNetworkDisneyNew.params}?api_key=${apiKey}${tvNetworkDisneyNew.query}`;
export const tvDiscoverIndonesiaEndpoint = `${baseUri}${tvDiscoverIndonesia.params}?api_key=${apiKey}${tvDiscoverIndonesia.query}`;
export const tvOriginalDisneyEndpoint = `${baseUri}${tvOriginalDisney.params}?api_key=${apiKey}${tvOriginalDisney.query}`;
export const movieMarvelEndpoint = `${baseUri}${movieMarvel.params}?api_key=${apiKey}${movieMarvel.query}`;
export const moviePopularDisneyEndpoint = `${baseUri}${moviePopularDisney.params}?api_key=${apiKey}${moviePopularDisney.query}`;
export const movieUpcomingDisneyEndpoint = `${baseUri}${movieUpcomingDisney.params}?api_key=${apiKey}${movieUpcomingDisney.query}`;
export const movieIndonesiaEndpoint = `${baseUri}${movieIndonesia.params}?api_key=${apiKey}${movieIndonesia.query}`;
export const allTrending = `${baseUri}${trending.params}?api_key=${apiKey}`;
export const genreMovieList = `${baseUri}${genreMovie.params}?api_key=${apiKey}${genreMovie.query}`;
export const genreTvList = `${baseUri}${genreTv.params}?api_key=${apiKey}${genreTv.query}`;
