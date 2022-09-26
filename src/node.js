/*HEADER-TODOS LOS ELEMENTOS*/
const header = document.getElementById("header");
const header_logo_title = document.querySelector(".header-logo-title");
const header_icon = document.querySelector(".header-icon");
const header_title = document.querySelector(".header-title");
const searchForm = document.querySelector("#searchForm");
const searchBtn = document.querySelector("#searchBtn");
const header_list = document.querySelector(".header-list");
const header_list_home = document.querySelector(".header-list--home");
const header_list_movies = document.querySelector(".header-list--movies");
const header_list_series = document.querySelector(".header-list--series");
const header_list_information = document.querySelector(
  ".header-list--information"
);

/*CATEGORIAS MOVIES - TODOS LOS ELEMENTOS*/
const categoriesPreview = document.getElementById("categoriesPreview");

/*TRENDING PREVIEW MOVIES - TODOS LOS ELEMENTOS*/
const trendingMoviesPreview = document.getElementById("trendingPreview");
const trendingPreview_header = document.querySelector(
  ".trendingPreview-header"
);
const trendingPreview_title = document.querySelector(".trendingPreview-title");
// const trendingPreview_btn = document.querySelector(".trendingPreview-btn");
const trendingBtn = document.querySelector(".trendingPreview-btn");
const trenArrowLeft = document.querySelector("#trendArrowLeft");
const trenArrowRight = document.querySelector("#trendArrowRight");
const trendingPreview = document.querySelector(".trendingPreview-movieList");
const trendingCarousel = document.querySelector(".trendingCarousel");
const trenMovieContainer = document.querySelectorAll(
  ".trendingPreview-movieList .movie-container"
);

/*TOP RATED MOVIES PREVIEW - TODOS LOS ELEMENTOS*/
const topRatedMoviesPreview = document.getElementById("topRatedPreview");
const topRatedPreview_header = document.querySelector(
  ".topRatedPreview-header"
);
const topRatedPreview_title = document.querySelector(".topRatedPreview-title");
// const topRatedPreview_btn = document.querySelector(".topRatedPreview-btn");
const topRatedBtn = document.querySelector(".topRatedPreview-btn");
const topArrowLeft = document.querySelector("#topRatArrowLeft");
const topArrowRight = document.querySelector("#topRatArrowRight");
const topRatedPreview = document.querySelector(".topRatedCarousel-movieList");
const topRatedCarousel = document.querySelector(".topRatedCarousel");
const topMovieContainer = document.querySelectorAll(
  ".topRatedCarousel-movieList .movie-container"
);

/*POPULAR MOVIES PREVIEW - TODOS LOS ELEMENTOS*/
const popularMoviesPreview = document.getElementById("popularPreview");
const popularPreview_header = document.querySelector(".popularPreview-header");
const popularPreview_title = document.querySelector(".popularPreview-title");
// const popularPreview_btn = document.querySelector(".topRatedPreview-btn");
const popularBtn = document.querySelector(".popularPreview-btn");
const popularArrowLeft = document.querySelector("#popularArrowLeft");
const popularArrowRight = document.querySelector("#popularArrowRight");
const popularPreview = document.querySelector(".popularPreview-movieList");
const popularCarousel = document.querySelector(".popularCarousel");
const popularMovieContainer = document.querySelectorAll(
  ".popularPreview-movieList .movie-container"
);

/*PROVIDERS MOVIE PREVIEW - TODOS LOS ELEMENTOS*/
const providersMoviesPreview = document.getElementById("providersPreview");
const providersPreview_header = document.querySelector(
  ".providersPreview-header"
);
const providersPreview_title = document.querySelector(
  ".providersPreview-title"
);
// const providersPreview_btn = document.querySelector(".topRatedPreview-btn");
const providersBtn = document.querySelector(".providersPreview-btn");
const providersArrowLeft = document.querySelector("#providersArrowLeft");
const providersArrowRight = document.querySelector("#providersArrowRight");
const providersPreview = document.querySelector(".providersPreview-movieList");
const providersCarousel = document.querySelector(".providersCarousel");
const providersMovieContainer = document.querySelectorAll(
  ".providersPreview-movieList .movie-container"
);

/*SECCION GENERICA PARA LISTAR LAS PELICULAS - TODOS LOS ELEMENTOS*/
const genericSection = document.querySelector("#genericList");
