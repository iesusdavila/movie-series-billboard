/*HEADER-TODOS LOS ELEMENTOS*/
const header = document.getElementById("header");
const header_logo_title = document.querySelector(".header-logo-title");
const header_icon = document.querySelector(".header-icon");
const header_title = document.querySelector(".header-title");
const searchForm = document.querySelector("#searchForm input");
const searchBtn = document.querySelector("#searchBtn");
const header_list = document.querySelector(".header-list");
const header_list_home = document.querySelector(".header-list--home");
const header_list_movies = document.querySelector(".header-list--movies");
const header_list_series = document.querySelector(".header-list--series");
const header_list_information = document.querySelector(
  ".header-list--information"
);

/*--------------------------------------------------*/
/*MOVIE TOP EN EL INICIO - TODOS LOS ELEMENTOS*/
const movieTopPreview = document.getElementById("movieTopPreview");
const movieTopPreview_container = document.querySelector(
  ".movieTopPreview-container"
);
const movieTopPreview_details = document.querySelector(
  ".movieTopPreview-details"
);
const movieTopPreview_details_title = document.querySelector(
  ".movieTopPreview-details--title"
);
const movieTopPreview_details_category_star = document.querySelector(
  ".movieTopPreview-details--category-star"
);
const movieTopPreview_details_category = document.querySelector(
  ".movieTopPreview-details--category"
);
const movieTopPreview_details_star = document.querySelector(
  ".movieTopPreview-details--star"
);
const movieTopPreview_details_description = document.querySelector(
  ".movieTopPreview-details--description"
);

const movieTopPreview_video = document.querySelector(".movieTopPreview-video");

/*--------------------------------------------------*/
/*CATEGORIAS MOVIES - TODOS LOS ELEMENTOS*/
const categoriesPreview = document.getElementById("categoriesPreview");
const categoryPreview_header = document.querySelector(
  ".categoriesPreview-header"
);
const categoryPreview_title = document.querySelector(
  ".categoriesPreview-title"
);
const categoriesPreview_list = document.querySelector(
  ".categoriesPreview-list"
);

/*--------------------------------------------------*/
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

/*--------------------------------------------------*/
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

/*--------------------------------------------------*/
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

/*--------------------------------------------------*/
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

/*--------------------------------------------------*/
/*SECCION GENERICA PARA LISTAR LAS PELICULAS - TODOS LOS ELEMENTOS*/
const genericSection = document.querySelector("#genericList");

/*--------------------------------------------------*/
/*SECCION PARA LOS DETALLES DE PELICULAS - TODOS LOS ELEMENTOS*/
const movieDetail = document.querySelector("#movieDetail");

/*DETALLES Y VIDEO*/
const movieDetailsVideo = document.querySelector(".movieDetail-details-video");
const movieDetails = document.querySelector(".movieDetail-details");
const movieVideo = document.querySelector(".movieDetail-video");

/*POSTER E INDUSTRIA*/
const moviePosterIndustry = document.querySelector(
  ".movieDetail-poster-industry"
);
const moviePosters = document.querySelector(".movieDetail-poster");
const movieIndustry = document.querySelector(".movieDetail-industry");

/*ACTORES*/
const movieDetailsActors = document.querySelector(".movieDetails-actors");
const movieActHeader = document.querySelector(".movieDetails-actors-header");
const movieActCarousel = document.querySelector(".actorsCarousel");
const actorsPreview = document.querySelector(".movieDetails-actors-movieList");
const actorsContainer = document.querySelectorAll(
  ".movieDetails-actors-movieList .movie-container"
);
const actorsArrowLeft = document.querySelector("#actorArrowLeft");
const actorsArrowRight = document.querySelector("#actorArrowRight");

/*PELICULAS SIMILARES*/
const movieDetailsMovSim = document.querySelector(
  ".movieDetails-moviesSimilar"
);
const movieMSHeader = document.querySelector(
  ".movieDetails-moviesSimilar-header"
);
const movieMSCarousel = document.querySelector(".moviesSimilarCarousel");
const movieMSPreview = document.querySelector(
  ".movieDetails-moviesSimilar-movieList"
);
const movieMSContainer = document.querySelectorAll(
  ".movieDetails-moviesSimilar-movieList .movie-container"
);
const movieSimArrowLeft = document.querySelector("#movSimArrowLeft");
const movieSimArrowRight = document.querySelector("#movSimArrowRight");

/*PELICULAS RECOMENDADAS*/
const movieDetailsMovRec = document.querySelector(".movieDetails-moviesRecom");
const movieMRHeader = document.querySelector(
  ".movieDetails-moviesRecom-header"
);
const movieMRCarousel = document.querySelector(".moviesRecomCarousel");
const movieMRPreview = document.querySelector(
  ".movieDetails-moviesRecom-movieList"
);
const movieMRContainer = document.querySelectorAll(
  ".movieDetails-moviesRecom-movieList .movie-container"
);
const movieRecArrowLeft = document.querySelector("#moviRecArrowLeft");
const movieRecArrowRight = document.querySelector("#moviRecArrowRight");
