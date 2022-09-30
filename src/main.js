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
/*ANCHO EN EL CARRUSEL DE ACTORES*/
const actorsContWidth = actorsContainer[0].offsetWidth * 2;
/*ANCHO EN EL CARRUSEL DE PELICULAS SIMILARES*/
const movSimContWidth = movieMSContainer[0].offsetWidth * 2;
/*ANCHO EN EL CARRUSEL DE PELICULAS RECOMENDADAS*/
const movRecContWidth = movieMRContainer[0].offsetWidth * 2;

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

/*ACCION DE BOTONES EN EL CARRUSEL DE ACTORES*/
actorsArrowLeft.onclick = () =>
  Move(1, actorsPreview, movieActCarousel, actorsContWidth);
actorsArrowRight.onclick = () =>
  Move(2, actorsPreview, movieActCarousel, actorsContWidth);

/*ACCION DE BOTONES EN EL CARRUSEL DE PELICULAS SIMILARES*/
movieSimArrowLeft.onclick = () =>
  Move(1, movieMSPreview, movieMSCarousel, movSimContWidth);
movieSimArrowRight.onclick = () =>
  Move(2, movieMSPreview, movieMSCarousel, movSimContWidth);

/*ACCION DE BOTONES EN EL CARRUSEL DE PELICULAS RECOMENDADAS*/
movieRecArrowLeft.onclick = () =>
  Move(1, movieMRPreview, movieMRCarousel, movRecContWidth);
movieRecArrowRight.onclick = () =>
  Move(2, movieMRPreview, movieMRCarousel, movRecContWidth);

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

  providersMoviesPreview.innerHTML = ""; //Cuando hagas lo de proveedores comenta esta linea
  //providersPreview_movieList.innerHTML = "";

  //createContainerProvidersMovies(providersPreview_movieList, movies);
}

/*PROVEEDORES MOSTRADA DE FORMA GENERAL*/
async function getProvidersMovies() {
  const { data } = await api("/watch/providers/movie");
  const movies = data.results;

  genericSection.innerHTML = "";

  createContainerGenericForMovies(movies, { provider: true });
}

/*--------------------------------------------------*/
/*------------------DETALLES DE PELICULA------------------*/
async function getDetailsMovie(id) {
  const { data: movieDetalles } = await api("movie/" + id);
  const { data: movieTrailer } = await api("movie/" + id + "/videos");
  const infoTrailer = movieTrailer.results[0];
  const { data: movieCredits } = await api("movie/" + id + "/credits");
  const { data: movieSimilar } = await api("movie/" + id + "/similar");
  const movSimResults = movieSimilar.results;
  const { data: movieRecom } = await api("movie/" + id + "/recommendations");
  const movRecResults = movieRecom.results;

  movieDetails.innerHTML = "";
  movieVideo.innerHTML = "";
  moviePosters.innerHTML = "";
  movieIndustry.innerHTML = "";
  actorsPreview.innerHTML = "";
  movieMSPreview.innerHTML = "";
  movieMRPreview.innerHTML = "";

  createContainerMovieDetails(
    movieDetalles,
    infoTrailer,
    movieCredits,
    movSimResults,
    movRecResults
  );
}

function createContainerMovieDetails(
  movie,
  trailer,
  creditos,
  moviesSimilar,
  moviesRecome
) {
  /*DETALLES DE PELICULA*/
  const title = document.createElement("h2");
  title.classList.add("movieDetail-details--title");
  title.innerText = movie.title;

  const listCtgStar = document.createElement("div");
  listCtgStar.classList.add("movieDetail-details--category-star");
  const listCtg = document.createElement("ol");
  listCtg.classList.add("movieDetail-details--category");
  movie.genres.forEach((category) => {
    const ctg = document.createElement("li");
    ctg.innerText = category.name;
    listCtg.appendChild(ctg);
  });
  const star = document.createElement("h3");
  star.classList.add("movieDetail-details--star");
  star.innerText = "⭐" + movie.vote_average;
  listCtgStar.appendChild(listCtg);
  listCtgStar.appendChild(star);

  const movieDate = document.createElement("h3");
  movieDate.classList.add("movieDetail-details--date");
  const movieSpanDate = document.createElement("span");
  movieSpanDate.innerText = movie.release_date;
  movieDate.innerText = "Lanzamiento: ";
  movieDate.appendChild(movieSpanDate);

  const movieDuration = document.createElement("h3");
  movieDuration.classList.add("movieDetail-details--duration");
  const movieSpanDuration = document.createElement("span");
  movieSpanDuration.innerText = movie.runtime + " minutos";
  movieDuration.innerText = "Duracion: ";
  movieDuration.appendChild(movieSpanDuration);

  const movieLang = document.createElement("h3");
  movieLang.classList.add("movieDetail-details--languages");
  const movieSpanLang = document.createElement("span");
  let idiomas = "";
  movie.spoken_languages.forEach((lang, index) => {
    if (index + 1 == movie.spoken_languages.length) {
      idiomas = idiomas + lang.english_name;
    } else {
      idiomas = idiomas + lang.english_name + ", ";
    }
  });
  movieSpanLang.innerText = idiomas;
  movieLang.innerText = "Idiomas: ";
  movieLang.appendChild(movieSpanLang);

  const movieDescrip = document.createElement("h3");
  movieDescrip.classList.add("movieDetail-details--description");
  movieDescrip.innerText = movie.overview;

  movieDetails.appendChild(title);
  movieDetails.appendChild(listCtgStar);
  movieDetails.appendChild(movieDate);
  movieDetails.appendChild(movieDuration);
  movieDetails.appendChild(movieLang);
  movieDetails.appendChild(movieDescrip);

  if (movie.homepage) {
    const link = document.createElement("a");
    link.href = movie.homepage;
    link.target = "_blank";
    link.classList.add("movieDetail-details--link");
    link.innerText = "Reproducir Pelicula";
    movieDetails.appendChild(link);
  }

  /*TRAILER DE PELICULA*/
  if (trailer) {
    const video = document.createElement("iframe");
    video.src = `https://www.youtube.com/embed/${trailer.key}?autoplay=0&amp;loop=1&amp;playlist=${trailer.key}&amp;controls=1&amp;vq=hd1080&amp;rel=0&amp;iv_load_policy=3&amp;fs=0&amp;color=white&amp;disablekb=1&amp;modestbranding=1&amp;mute=1`;
    video.title = "YouTube video player";
    video.frameBorder = "0";
    video.allow =
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";

    movieDetails.classList.remove("movieDetail-details-withoutTrailer");
    movieVideo.appendChild(video);
  } else {
    movieDetails.classList.add("movieDetail-details-withoutTrailer");
  }

  /*POSTER FRONTAL*/
  const imgFront = document.createElement("img");
  imgFront.src = "https://image.tmdb.org/t/p/w500/" + movie.poster_path;
  imgFront.alt = "Imagen de portada de la pelicula";
  imgFront.classList.add("movieDetails-imgFront");

  moviePosters.appendChild(imgFront);

  /*INDUSTRIA*/
  const titleCred = document.createElement("h3");
  titleCred.classList.add("industry--credits");
  titleCred.innerText = "Creditos";

  const listDirectors = document.createElement("div");
  listDirectors.classList.add("movieDetail-directors");
  const directTitle = document.createElement("h3");
  directTitle.classList.add("directors-header");
  directTitle.innerText = "Directores";
  const listDirect = document.createElement("ol");
  listDirect.classList.add("directors-listDirectors");

  listDirectors.appendChild(directTitle);
  listDirectors.appendChild(listDirect);

  const listProducer = document.createElement("div");
  listProducer.classList.add("movieDetail-productors");
  const prodTitle = document.createElement("h3");
  prodTitle.classList.add("productors-header");
  prodTitle.innerText = "Directores";
  const listProd = document.createElement("ol");
  listProd.classList.add("productors-listProductors");

  listProducer.appendChild(prodTitle);
  listProducer.appendChild(listProd);

  creditos.crew.forEach((person) => {
    if (person.job == "Producer") {
      const productor = document.createElement("li");
      productor.innerText = person.name;
      listProd.appendChild(productor);
    }

    if (person.job == "Director") {
      const director = document.createElement("li");
      director.innerText = person.name;
      listDirect.appendChild(director);
    }
  });

  const imgInd = document.createElement("img");
  imgInd.src =
    "https://image.tmdb.org/t/p/w300/" +
    movie.production_companies[0].logo_path;
  imgInd.alt = "Logo de la industria";
  imgInd.classList.add("industry-logo");

  const imgTras = document.createElement("img");
  imgTras.src = "https://image.tmdb.org/t/p/w500/" + movie.backdrop_path;
  imgTras.alt = "Imagen trasera de la pelicula";
  imgTras.classList.add("movieDetails-imgBack");

  movieIndustry.appendChild(titleCred);
  movieIndustry.appendChild(listDirectors);
  movieIndustry.appendChild(listProducer);
  movieIndustry.appendChild(imgInd);
  movieIndustry.appendChild(imgTras);

  /*ACTORES*/
  creditos.cast.slice(0, 20).forEach((person) => {
    const movie_container = document.createElement("div");
    movie_container.classList.add("movie-container");

    const imgActor = document.createElement("img");
    imgActor.classList.add("movie-img");
    imgActor.alt = person.name;
    if (person.profile_path) {
      imgActor.setAttribute(
        "src",
        "https://image.tmdb.org/t/p/w300/" + person.profile_path
      );
      const nameActor = document.createElement("h3");
      nameActor.classList.add("actors-name");
      nameActor.innerText = person.name;
      movie_container.appendChild(imgActor);
      movie_container.appendChild(nameActor);
      actorsPreview.appendChild(movie_container);
    }
  });

  /*PELICULAS SIMILARES*/
  moviesSimilar.forEach((movSimilar) => {
    const movie_container = document.createElement("div");
    movie_container.classList.add("movie-container");
    movie_container.addEventListener("click", () => {
      location.hash = "#movie=" + movSimilar.id;
    });

    const imgMS = document.createElement("img");
    imgMS.classList.add("movie-img");
    imgMS.alt = movSimilar.title;
    imgMS.setAttribute(
      "src",
      "https://image.tmdb.org/t/p/w300/" + movSimilar.poster_path
    );

    const nameActor = document.createElement("h3");
    nameActor.classList.add("movie-star");
    nameActor.innerText = movSimilar.title;

    movie_container.appendChild(imgMS);
    movie_container.appendChild(nameActor);
    movieMSPreview.appendChild(movie_container);
  });

  /*PELICULAS RECOMENDADAS*/
  if (moviesRecome.length !== 0) {
    movieDetailsMovRec.classList.remove("inactive");
    moviesRecome.forEach((movRec) => {
      const movie_container = document.createElement("div");
      movie_container.classList.add("movie-container");
      movie_container.addEventListener("click", () => {
        location.hash = "#movie=" + movRec.id;
      });

      if (movRec.poster_path) {
        const imgMR = document.createElement("img");
        imgMR.classList.add("movie-img");
        imgMR.alt = movRec.title;
        imgMR.setAttribute(
          "src",
          "https://image.tmdb.org/t/p/w300/" + movRec.poster_path
        );

        const nameMR = document.createElement("h3");
        nameMR.classList.add("movie-star");
        nameMR.innerText = movRec.title;

        movie_container.appendChild(imgMR);
        movie_container.appendChild(nameMR);
        movieMRPreview.appendChild(movie_container);
      }
    });
  } else {
    movieDetailsMovRec.classList.add("inactive");
  }
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
    category.addEventListener("click", () => {
      location.hash = `#category=${element.id}-${element.name}`;
    });
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

  const movieDuration = document.createElement("h3");
  movieDuration.classList.add("movieTopPreview-details--duration");
  const movieSpanDuration = document.createElement("span");
  movieSpanDuration.innerText = movieTop.runtime + " minutos";
  movieDuration.innerText = "Duracion: ";
  movieDuration.appendChild(movieSpanDuration);

  const movieDescrip = document.createElement("h3");
  movieDescrip.classList.add("movieTopPreview-details--description");
  movieDescrip.innerText = movieTop.overview;

  const movieLink = document.createElement("a");
  movieLink.classList.add("movieTopPreview-details--link");
  movieLink.href = movieTop.homepage;
  movieLink.target = "_blank";
  movieLink.innerHTML = "Reproducir Pelicula";

  movieTopPreview_details.appendChild(movieTit);
  movieTopPreview_details.appendChild(movieContainerStarCtg);
  movieTopPreview_details.appendChild(movieProduction);
  movieTopPreview_details.appendChild(movieDate);
  movieTopPreview_details.appendChild(movieDuration);
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
