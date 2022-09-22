const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    "Content-Type": "aplication/json;charset=utf-8",
  },
  params: {
    api_key: API_KEY,
    language: "es-MX",
  },
});

const arrowLeft = document.querySelector(".arrowLeft");
const arrowRight = document.querySelector(".arrowRight");
const trendingPreview = document.querySelector(".trendingPreview-movieList");
const trendingCarousel = document.querySelector(".trendingCarousel");
const movieContainer = document.querySelectorAll(
  ".trendingPreview-movieList .movie-container"
);

const movieContainerWidth = movieContainer[0].offsetWidth;
console.log(movieContainer);

arrowLeft.onclick = () => Move(1);
arrowRight.onclick = () => Move(2);

async function getCategoriesMovies() {
  const { data } = await api("genre/movie/list");

  const categories = data.genres;

  const categoriesPreview_list = document.querySelector(
    ".categoriesPreview-list"
  );
  categoriesPreview_list.innerHTML = "";

  categories.forEach((category) => {
    const category_container = document.createElement("div");
    category_container.classList.add("category-container");

    const category_title = document.createElement("h3");
    category_title.setAttribute("id", "id" + category.id);
    category_title.classList.add("category-title");
    category_title.innerText = category.name;
    category_title.addEventListener("click", () => {
      location.hash = `#category=${category.id}-${category.name}`;
    });

    category_container.appendChild(category_title);
    categoriesPreview_list.appendChild(category_container);
  });
}

async function getTrendingMoviesPreview() {
  const { data } = await api("trending/movie/day");

  const movies = data.results;

  const trendingPreview_movieList = document.querySelector(
    ".trendingPreview-movieList"
  );

  trendingPreview_movieList.innerHTML = "";

  movies.forEach((movie) => {
    const movie_container = document.createElement("div");
    movie_container.classList.add("movie-container");
    movie_container.addEventListener("click", () => {
      location.hash = "#movie=" + movie.id;
    });

    const imageMovie = document.createElement("img");
    imageMovie.classList.add("movie-img");
    imageMovie.alt = movie.title;
    imageMovie.setAttribute(
      "src",
      "https://image.tmdb.org/t/p/w300/" + movie.poster_path
    );

    // observer.observe(imageMovie);

    movie_container.appendChild(imageMovie);
    trendingPreview_movieList.appendChild(movie_container);
  });
}

function Move(value) {
  const trendingPreviewWidth = trendingPreview.offsetWidth;
  const trendingCarouselWidth = trendingCarousel.offsetWidth;

  trendingPreview.style.left == ""
    ? (leftPosition = trendingPreview.style.left = 0)
    : (leftPosition = parseFloat(trendingPreview.style.left.slice(0, -2) * -1));

  console.log(trendingPreview.style.left.slice(0, -2) * -1);
  console.log(leftPosition);
  console.log({
    trendingPreviewWidth,
    trendingCarouselWidth,
  });

  const rightLimit =
    leftPosition < trendingPreviewWidth - trendingCarouselWidth;
  const leftLimit = leftPosition > 0;

  if (rightLimit && value == 2) {
    trendingPreview.style.left = `${
      -1 * (leftPosition + movieContainerWidth)
    }px`;
  } else if (leftLimit && value == 1) {
    trendingPreview.style.left = `${
      -1 * (leftPosition - movieContainerWidth)
    }px`;
  } else if (!rightLimit) {
    console.log("Borrar la flecha");
  }
}

getCategoriesMovies();
getTrendingMoviesPreview();
