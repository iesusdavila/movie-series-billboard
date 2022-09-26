header_list_home.addEventListener("click", () => {
  location.hash = "#home";
});

trendingBtn.addEventListener("click", () => {
  location.hash = "#trends";
});

topRatedBtn.addEventListener("click", () => {
  location.hash = "#topRated";
});

popularBtn.addEventListener("click", () => {
  location.hash = "#popular";
});

providersBtn.addEventListener("click", () => {
  location.hash = "#providers";
});

window.addEventListener("DOMContentLoaded", navigator, false);
window.addEventListener("hashchange", navigator, false);

function navigator() {
  console.log({ location });
  /*if (infiniteScroll) {
    window.removeEventListener("scroll", infiniteScroll, { passive: false });
    infiniteScroll = undefined;
  }*/
  if (location.hash.startsWith("#trends")) {
    trendsPage();
  } else if (location.hash.startsWith("#home")) {
    homePage();
  } else if (location.hash.startsWith("#topRated")) {
    topRatedPage();
  } else if (location.hash.startsWith("#popular")) {
    popularPage();
  } else if (location.hash.startsWith("#providers")) {
    providersPage();
  } else if (location.hash.startsWith("#search=")) {
    searchPage();
  } else if (location.hash.startsWith("#movie=")) {
    movieDetailsPage();
  } else if (location.hash.startsWith("#category=")) {
    categoriesPage();
  } else {
    homePage();
  }

  // document.body.scrollTop = 0;
  // document.documentElement.scrollTop = 0;

  // if (infiniteScroll) {
  //   window.addEventListener("scroll", infiniteScroll, { passive: false });
  // }
}

function homePage() {
  categoriesPreview.classList.remove("inactive");
  trendingMoviesPreview.classList.remove("inactive");
  trendingBtn.classList.remove("inactive");
  trendingCarousel.classList.remove("inactive");
  topRatedMoviesPreview.classList.remove("inactive");
  topRatedBtn.classList.remove("inactive");
  topRatedCarousel.classList.remove("inactive");
  popularMoviesPreview.classList.remove("inactive");
  popularBtn.classList.remove("inactive");
  popularCarousel.classList.remove("inactive");
  providersMoviesPreview.classList.remove("inactive");
  providersBtn.classList.remove("inactive");
  providersCarousel.classList.remove("inactive");
  genericSection.classList.add("inactive");

  getCategoriesMovies();
  getTrendingMoviesPreview();
  getTopRatedMoviesPreview();
  getPopularMoviesPreview();
  getProvidersMoviesPreview();
}

function trendsPage() {
  categoriesPreview.classList.add("inactive");
  trendingBtn.classList.add("inactive");
  trendingCarousel.classList.add("inactive");
  topRatedMoviesPreview.classList.add("inactive");
  popularMoviesPreview.classList.add("inactive");
  providersMoviesPreview.classList.add("inactive");
  genericSection.classList.remove("inactive");

  getTrendingMovies();

  // infiniteScroll = getPaginatedTrendingMovies;
}

function topRatedPage() {
  categoriesPreview.classList.add("inactive");
  trendingMoviesPreview.classList.add("inactive");
  topRatedBtn.classList.add("inactive");
  topRatedCarousel.classList.add("inactive");
  popularMoviesPreview.classList.add("inactive");
  providersMoviesPreview.classList.add("inactive");

  // getTrendingMovies();
}

function popularPage() {
  categoriesPreview.classList.add("inactive");
  trendingMoviesPreview.classList.add("inactive");
  topRatedMoviesPreview.classList.add("inactive");
  popularBtn.classList.add("inactive");
  popularCarousel.classList.add("inactive");
  providersMoviesPreview.classList.add("inactive");

  // getTrendingMovies();
}

function providersPage() {
  categoriesPreview.classList.add("inactive");
  trendingMoviesPreview.classList.add("inactive");
  topRatedMoviesPreview.classList.add("inactive");
  popularMoviesPreview.classList.add("inactive");
  providersBtn.classList.add("inactive");
  providersCarousel.classList.add("inactive");
}
