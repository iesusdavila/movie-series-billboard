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

/*--------------------------------------------------*/
/*------------------ANCHO DEL CONTENEDOR DEL CARRUSEL------------------*/
/*IMPORTANTE: LA  MULTIPLICACION *2 ES PARA QUE AVANCE EN DOS PELICULAS, SI SE DESEA QUE PASE DE TANTO EN TANTO SOLO SE CAMBIA EL FACTOR*/
/*ANCHO EN EL CARRUSEL DE TENDENCIAS*/
const trendMovContWidth = trenMovieContainer[0].offsetWidth * 2;
/*ANCHO EN EL CARRUSEL DE MEJORES VOTADAS*/
const topMovContWidth = topMovieContainer[0].offsetWidth * 2;
/*ANCHO EN EL CARRUSEL DE POPULARES*/
const popularMovContWidth = popularMovieContainer[0].offsetWidth * 2;
/*ANCHO EN EL CARRUSEL DE PROVEEDORES*/
const providerMovContWidth = providersMovieContainer[0].offsetWidth * 2;

/*--------------------------------------------------*/
/*------------------BOTONES DEL CARRUSEL------------------*/
/*ACCION DE BOTONES EN EL CARRUSEL DE TENDENCIAS*/
trenArrowLeft.onclick = () =>
  Move(1, trendingPreview, trendingCarousel, trendMovContWidth);
trenArrowRight.onclick = () =>
  Move(2, trendingPreview, trendingCarousel, trendMovContWidth);

/*ACCION DE BOTONES EN EL CARRUSEL DE MEJORES VOTADAS*/
topArrowLeft.onclick = () =>
  Move(1, topRatedPreview, topRatedCarousel, topMovContWidth);
topArrowRight.onclick = () =>
  Move(2, topRatedPreview, topRatedCarousel, topMovContWidth);

/*ACCION DE BOTONES EN EL CARRUSEL DE POPULARES*/
popularArrowLeft.onclick = () =>
  Move(1, popularPreview, popularCarousel, popularMovContWidth);
popularArrowRight.onclick = () =>
  Move(2, popularPreview, popularCarousel, popularMovContWidth);

/*ACCION DE BOTONES EN EL CARRUSEL DE PROVEEDORES*/
providersArrowLeft.onclick = () =>
  Move(1, providersPreview, providersCarousel, providerMovContWidth);
providersArrowRight.onclick = () =>
  Move(2, providersPreview, providersCarousel, providerMovContWidth);

/*--------------------------------------------------*/
/*------------------BUSQUEDAS------------------*/
/*BUSQUEDAS MOSTRADAS DE FORMA GENERAL*/
async function getMoviesBySearch(query) {
  const { data } = await api("search/movie", {
    params: {
      include_adult: false,
      query,
    },
  });
  const movies = data.results;

  genericSection.innerHTML = "";

  createContainerGenericForMovies(movies, { provider: false });
}

/*--------------------------------------------------*/
/*------------------MOVIE TOP------------------*/
/*MOVIE TOP SE ENCUENTRA AHORA JUNTO A MOVIE TRENDS DEBIDO
A QUE SE NECESITABA AHORRAR CODIGO PORQUE EN LA SECCION DE MOVIE
TOP SE NECESITA LA PRIMERA PELICULA DEL MOVIE TREND O LA PELICULA
QUE SE DESEE LUEGO PORQUE LO MAS PROBABLE ES QUE ESA SECCION DE 
MOVIE TOP SEA AL AZAR*/
/*async function getMovieTopPreview() {
  const { data } = await api("trending/movie/day");
  const movies = data.results;
  movieTop = movies[0];

  const { data: movieDetails } = await api("/movie/" + movieTop.id);

  const { data: dataMovieTrailer } = await api(
    "/movie/" + movieTop.id + "/videos"
  );
  const movieTrailer = dataMovieTrailer.results;

  movieTopPreview.innerHTML = "";
  trendingPreview.innerHTML = "";
  console.log(trendingCarousel);
  trendingCarousel.classList.add("inactive");
  console.log(movieTopPreview_details_title);
  movieTopPreview_details_title.classList.add("inactive");

  createContainerMovies(trendingPreview, movies);
  createContainerMovieTop(movieDetails, movieTrailer);
}*/

/*--------------------------------------------------*/
/*------------------CATEGORIAS------------------*/
/*CATEGORIAS EN EL MENU PRINCIPAL*/
async function getCategoriesMovies() {
  const { data } = await api("genre/movie/list");

  const categories = data.genres;

  categoriesPreview_list.innerHTML = "";

  createContainerCategories(categoriesPreview_list, categories);
}

async function getMoviesByCategory(idCtg, nameCtg) {
  const { data } = await api("/discover/movie", {
    params: {
      sort_by: "popularity.desc",
      include_adult: false,
      include_video: true,
      with_genres: idCtg,
    },
  });
  const movies = data.results;

  categoryPreview_title.innerText = nameCtg;
  genericSection.innerHTML = "";

  createContainerGenericForMovies(movies, { provider: false });
}

/*--------------------------------------------------*/
/*------------------TENDENCIAS------------------*/
/*TENDENCIAS EN EL MENU PRINCIPAL*/
async function getTrendingMoviesPreview() {
  const { data } = await api("trending/movie/day");
  const movies = data.results;

  let movieAzar = Math.floor(Math.random() * (17 - 0 + 1)) + 0;
  movieTop = movies[0];

  const { data: dataMovieTrailer } = await api(
    "/movie/" + movieTop.id + "/videos"
  );
  const movieTrailer = dataMovieTrailer.results;

  const { data: movieDetails } = await api("/movie/" + movieTop.id);
  console.log(movieDetails);

  movieTopPreview_details.innerHTML = "";
  movieTopPreview_video.innerHTML = "";
  trendingPreview.innerHTML = "";

  createContainerMovies(trendingPreview, movies);
  createContainerMovieTop(movieDetails, movieTrailer);
}

/*TENDENCIAS MOSTRADA DE FORMA GENERAL*/
async function getTrendingMovies() {
  const { data } = await api("trending/movie/day");
  const movies = data.results;

  // pageMax = data.total_pages;
  // console.log(pageMax);

  genericSection.innerHTML = "";

  createContainerGenericForMovies(movies, { provider: false });
}

/*--------------------------------------------------*/
/*------------------MEJORES VOTADAS------------------*/
/*MEJORES VOTADAS EN EL MENU PRINCIPAL*/
async function getTopRatedMoviesPreview() {
  const { data } = await api("/movie/top_rated");

  const movies = data.results;

  const topRatedPreview_movieList = document.querySelector(
    ".topRatedCarousel-movieList"
  );

  topRatedPreview_movieList.innerHTML = "";

  createContainerMovies(topRatedPreview_movieList, movies);
}

/*MEJORES VOTADAS MOSTRADA DE FORMA GENERAL*/
async function getTopRatedMovies() {
  const { data } = await api("/movie/top_rated");

  const movies = data.results;

  genericSection.innerHTML = "";

  createContainerGenericForMovies(movies);
}

/*--------------------------------------------------*/
/*------------------POPULARES------------------*/
/*POPULARES EN EL MENU PRINCIPAL*/
async function getPopularMoviesPreview() {
  const { data } = await api("/movie/popular");

  const movies = data.results;

  const popularPreview_movieList = document.querySelector(
    ".popularPreview-movieList"
  );

  popularPreview_movieList.innerHTML = "";

  createContainerMovies(popularPreview_movieList, movies);
}

/*POPULARES MOSTRADA DE FORMA GENERAL*/
async function getPopularMovies() {
  const { data } = await api("/movie/popular");

  const movies = data.results;

  genericSection.innerHTML = "";

  createContainerGenericForMovies(movies);
}

/*--------------------------------------------------*/
/*------------------PROVEEDORES------------------*/
/*PROVEEDORES EN EL MENU PRINCIPAL*/
async function getProvidersMoviesPreview() {
  const { data } = await api("/watch/providers/movie");

  const movies = data.results;

  const providersPreview_movieList = document.querySelector(
    ".providersPreview-movieList"
  );

  providersPreview_movieList.innerHTML = "";

  createContainerProvidersMovies(providersPreview_movieList, movies);
}

/*PROVEEDORES MOSTRADA DE FORMA GENERAL*/
async function getProvidersMovies() {
  const { data } = await api("/watch/providers/movie");
  const movies = data.results;

  genericSection.innerHTML = "";

  createContainerGenericForMovies(movies, { provider: true });
}

/*--------------------------------------------------*/
/*------------------CONTENEDORES------------------*/
/*CONTENEDOR PARA PELICULA TOP EN EL MENU PRINCIPAL*/
function createContainerMovieTop(movieTop, movieTrailer) {
  const movieTit = document.createElement("h2");
  movieTit.classList.add("movieTopPreview-details--title");
  movieTit.innerHTML = movieTop.title;

  const movieContainerStarCtg = document.createElement("div");
  movieContainerStarCtg.classList.add("movieTopPreview-details--category-star");

  const movieCtgList = document.createElement("ol");
  movieCtgList.classList.add("movieTopPreview-details--category");
  movieTop.genres.forEach((element) => {
    const category = document.createElement("li");
    category.innerText = element.name;
    movieCtgList.appendChild(category);
  });

  const movieStar = document.createElement("h3");
  movieStar.classList.add("movieTopPreview-details--star");
  movieStar.innerText = "⭐" + parseFloat(movieTop.vote_average).toFixed(1);

  movieContainerStarCtg.appendChild(movieCtgList);
  movieContainerStarCtg.appendChild(movieStar);

  const movieProduction = document.createElement("h3");
  movieProduction.classList.add("movieTopPreview-details--production");
  const movieSpanProduc = document.createElement("span");
  movieSpanProduc.innerText = movieTop.production_companies[0].name;
  movieProduction.innerText = "Productora: ";
  movieProduction.appendChild(movieSpanProduc);

  const movieDate = document.createElement("h3");
  movieDate.classList.add("movieTopPreview-details--date");
  const movieSpanDate = document.createElement("span");
  movieSpanDate.innerText = movieTop.release_date;
  movieDate.innerText = "Lanzamiento: ";
  movieDate.appendChild(movieSpanDate);

  const movieDescrip = document.createElement("h3");
  movieDescrip.classList.add("movieTopPreview-details--description");
  movieDescrip.innerText = movieTop.overview;

  const movieLink = document.createElement("a");
  movieLink.classList.add("movieTopPreview-details--link");
  movieLink.href = movieTop.homepage;
  movieLink.target = "_blank";
  movieLink.innerHTML = "Link oficial de la pelicula";

  movieTopPreview_details.appendChild(movieTit);
  movieTopPreview_details.appendChild(movieContainerStarCtg);
  movieTopPreview_details.appendChild(movieProduction);
  movieTopPreview_details.appendChild(movieDate);
  movieTopPreview_details.appendChild(movieDescrip);
  movieTopPreview_details.appendChild(movieLink);

  const video = document.createElement("iframe");
  const trailerKey = movieTrailer[0].key;
  video.src = `https://www.youtube.com/embed/${trailerKey}?autoplay=0&loop=1&playlist=${trailerKey}&controls=1&vq=hd1080&rel=0&iv_load_policy=3&fs=0&color=white&disablekb=1&modestbranding=1&mute=1`;
  video.title = "YouTube video player";
  video.frameBorder = "0";
  video.allow =
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";

  movieTopPreview_video.appendChild(video);

  // // observer.observe(imageMovie);
}

/*CONTENEDOR PARA CATEGORIAS EN EL MENU PRINCIPAL*/
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

/*CONTENEDOR PARA PELICULAS EN EL MENU PRINCIPAL*/
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

/*CONTENEDOR PARA PROVEEDORES EN EL MENU PRINCIPAL*/
function createContainerProvidersMovies(parentTag, arrayProviders) {
  arrayProviders.forEach((movie, index) => {
    if (index < 20) {
      const movie_container = document.createElement("div");
      movie_container.classList.add("movie-container");
      movie_container.addEventListener("click", () => {
        location.hash = "#movie=" + movie.id;
      });

      const imageMovie = document.createElement("img");
      imageMovie.classList.add("movie-img");
      imageMovie.alt = movie.provider_name;
      imageMovie.setAttribute(
        "src",
        "https://image.tmdb.org/t/p/w300/" + movie.logo_path
      );

      const h3Pos = document.createElement("h3");
      h3Pos.classList.add("movie-star");
      h3Pos.innerText = movie.provider_name;

      // observer.observe(imageMovie);
      movie_container.appendChild(imageMovie);
      movie_container.appendChild(h3Pos);
      parentTag.appendChild(movie_container);
    }
  });
}

/*CONTENEDOR PARA SECCIONES GENERICAS PARA CADA CASO*/
function createContainerGenericForMovies(
  arrayMovies,
  { provider } = { provider: false }
) {
  arrayMovies.forEach((movie) => {
    const movie_container = document.createElement("div");
    movie_container.classList.add("movie-container");
    movie_container.addEventListener("click", () => {
      location.hash = "#movie=" + movie.id;
    });

    const imageMovie = document.createElement("img");
    imageMovie.classList.add("movie-img");
    imageMovie.alt = movie.title;
    if (provider) {
      //COMENTADO: SON MUCHOS PROVEEDORES QUE OFRECE DIRECTO LA API, NO OFRECE PAGINACION
      // imageMovie.setAttribute(
      //   "src",
      //   "https://image.tmdb.org/t/p/w300/" + movie.logo_path
      // );
    } else {
      imageMovie.setAttribute(
        "src",
        "https://image.tmdb.org/t/p/w300/" + movie.poster_path
      );
    }

    // observer.observe(imageMovie);

    movie_container.appendChild(imageMovie);
    genericSection.appendChild(movie_container);
  });
}

/*--------------------------------------------------*/
/*------------------CARRUSEL DE FOTOS------------------*/
/*CREACION DEL MOVIMIENTO DEL CARRUSEL*/

function Move(direc, sectionPreview, sectionCarousel, movieContainerWidth) {
  const sectionPreviewWidth = sectionPreview.offsetWidth;
  const sectionCarouselWidth = sectionCarousel.offsetWidth;
  let verf = 0;

  //Acceso a los botones de nuestro carrusel
  const btnLeft = sectionCarousel.querySelector(".arrowLeft");
  const btnRight = sectionCarousel.querySelector(".arrowRight");
  btnLeft.classList.remove("inactive");
  btnRight.classList.remove("inactive");

  if (!sectionPreview.style.left) {
    sectionPreview.style.left = 0;
  }

  leftPosition = parseFloat(sectionPreview.style.left.slice(0, -2) * -1);

  const rightLimit = leftPosition < sectionPreviewWidth - sectionCarouselWidth;
  const leftLimit = leftPosition > 0;

  if (rightLimit && direc == 2) {
    sectionPreview.style.left = `${
      -1 * (leftPosition + movieContainerWidth)
    }px`;
  } else if (leftLimit && direc == 1) {
    sectionPreview.style.left = `${
      -1 * (leftPosition - movieContainerWidth)
    }px`;
  }

  let valueFuture = sectionPreview.style.left.slice(0, -2) * -1;
  const comprLimitRight = !(
    valueFuture <
    sectionPreviewWidth - sectionCarouselWidth
  );

  //Comprobacion que hemos llegado al limite derecho
  if (comprLimitRight) {
    btnRight.classList.add("inactive");
  }

  //Comprobacion que hemos llegado al limite izquierdo
  if (sectionPreview.style.left === "0px") {
    btnLeft.classList.add("inactive");
  }
}
