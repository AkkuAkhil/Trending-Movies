const containt = document.querySelector(".containt");

export const displayMovies = async function (movie) {
  //Movie Click Link Creation
  const movieName = movie.title;
  const nameURL = movieName.toLowerCase().split(" ").join("-");
  const movieURL = `https://www.themoviedb.org/movie/${movie.id}-${nameURL}`;

  //Movie Date Setup
  const movieDate = new Date(movie.release_date);
  const movieDateOptions = {
    day: "numeric",
    month: "short",
    year: "numeric",
  };
  const intlDate = new Intl.DateTimeFormat("en-US", movieDateOptions).format(
    movieDate
  );

  //Movie poster Creation
  const markup = `<div class="moviecard">
          <a href="${movieURL}" target="_blank">
            <div class="poster">
                <img
                  src="https://image.tmdb.org/t/p/w260_and_h390_bestv2/${movie.poster_path}"
                  class="poster_image"
                  alt=""
                />
            </div>
            <div class="moviedetais">
              <p class="moviename">${movieName}</p>
              <p class="moviedate">${intlDate}</p>
            </div>
          </a>
        </div>`;

  //Inserting poster into containt
  containt.insertAdjacentHTML("beforeend", markup);
};
