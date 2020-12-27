import * as moviesModel from "./model.js";
import * as movieView from "./view.js";

const controlMovies = async function () {
  await moviesModel.loadMovies();
  await moviesModel.movieData.movies.forEach((mov) => {
    movieView.displayMovies(mov);
  });
};
controlMovies();
