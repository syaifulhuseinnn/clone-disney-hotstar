export function genreIdToName(genreId, genreList) {
  return genreId.map((id) => {
    const listGenreTv = genreList[1].genres.find((genre) => genre.id === id);
    const listGenreMovie = genreList[0].genres.find((genre) => genre.id === id);
    return listGenreTv ? (id = listGenreTv.name) : (id = listGenreMovie.name);
  });
}
