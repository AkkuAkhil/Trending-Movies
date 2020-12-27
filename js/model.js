export const movieData = { movies: {} };
export const loadMovies = async function () {
  try {
    const res = await fetch(
      "https://api.themoviedb.org/3/trending/movie/day?api_key=04b581f83019bf29c2854ac454ed6747&language=en-US&page=1"
    );
    const data = await res.json();
    movieData.movies = await data.results;
  } catch (err) {
    alert(err);
  }
};
