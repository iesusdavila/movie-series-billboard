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

const trendMovContWidth = trenMovieContainer[0].offsetWidth;
const topMovContWidth = topMovieContainer[0].offsetWidth;
const popularMovContWidth = popularMovieContainer[0].offsetWidth;

trenArrowLeft.onclick = () =>
  Move(1, trendingPreview, trendingCarousel, trendMovContWidth);
trenArrowRight.onclick = () =>
  Move(2, trendingPreview, trendingCarousel, trendMovContWidth);

topArrowLeft.onclick = () =>
  Move(1, topRatedPreview, topRatedCarousel, topMovContWidth);
topArrowRight.onclick = () =>
  Move(2, topRatedPreview, topRatedCarousel, topMovContWidth);

popularArrowLeft.onclick = () =>
  Move(1, popularPreview, popularCarousel, popularMovContWidth);
popularArrowRight.onclick = () =>
  Move(2, popularPreview, popularCarousel, popularMovContWidth);

async function getCategoriesMovies() {
  const { data } = await api("genre/movie/list");

  const categories = data.genres;

  const categoriesPreview_list = document.querySelector(
    ".categoriesPreview-list"
  );
  categoriesPreview_list.innerHTML = "";

  createContainerCategories(categoriesPreview_list, categories);
}

async function getTrendingMoviesPreview() {
  const { data } = await api("trending/movie/day");

  const movies = data.results;

  const trendingPreview_movieList = document.querySelector(
    ".trendingPreview-movieList"
  );

  trendingPreview_movieList.innerHTML = "";

  createContainerMovies(trendingPreview_movieList, movies);
}

async function getTopRatedMoviesPreview() {
  const { data } = await api("/movie/top_rated");

  const movies = data.results;

  const topRatedPreview_movieList = document.querySelector(
    ".topRatedCarousel-movieList"
  );

  topRatedPreview_movieList.innerHTML = "";

  createContainerMovies(topRatedPreview_movieList, movies);
}

async function getPopularMoviesPreview() {
  const { data } = await api("/movie/popular");

  const movies = data.results;

  const popularPreview_movieList = document.querySelector(
    ".popularPreview-movieList"
  );

  popularPreview_movieList.innerHTML = "";

  createContainerMovies(popularPreview_movieList, movies);
}

function createContainerCategories(parentTag, arrayCategories) {
  arrayCategories.forEach((category) => {
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
    parentTag.appendChild(category_container);
  });
}

function createContainerMovies(parentTag, arrayMovies) {
  arrayMovies.forEach((movie, index) => {
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

    const h3Pos = document.createElement("h3");
    h3Pos.classList.add("movie-position");
    h3Pos.innerText = index + 1;

    const h3Star = document.createElement("h3");
    h3Star.classList.add("movie-star");
    h3Star.innerText = "⭐" + parseFloat(movie.vote_average).toFixed(1);

    // observer.observe(imageMovie);

    movie_container.appendChild(imageMovie);
    movie_container.appendChild(h3Pos);
    movie_container.appendChild(h3Star);
    parentTag.appendChild(movie_container);
  });
}

function Move(direc, sectionPreview, sectionCarousel, movieContainerWidth) {
  const sectionPreviewWidth = sectionPreview.offsetWidth;
  const sectionCarouselWidth = sectionCarousel.offsetWidth;

  sectionPreview.style.left == ""
    ? (leftPosition = sectionPreview.style.left = 0)
    : (leftPosition = parseFloat(sectionPreview.style.left.slice(0, -2) * -1));

  const rightLimit = leftPosition < sectionPreviewWidth - sectionCarouselWidth;
  const leftLimit = leftPosition > 0;

  if (rightLimit && direc == 2) {
    console.log("igual a 2");
    sectionPreview.style.left = `${
      -1 * (leftPosition + movieContainerWidth)
    }px`;
  } else if (leftLimit && direc == 1) {
    console.log("igual a 1");
    sectionPreview.style.left = `${
      -1 * (leftPosition - movieContainerWidth)
    }px`;
  } else if (!rightLimit) {
    console.log("Borrar la flecha");
  }
}

getCategoriesMovies();
getTrendingMoviesPreview();
getTopRatedMoviesPreview();
getPopularMoviesPreview();
