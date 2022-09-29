header_list_home.addEventListener("click", () => {
  location.hash = "#home";
});

searchBtn.addEventListener("click", () => {
  location.hash = "#search=" + searchForm.value;
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

  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;

  // if (infiniteScroll) {
  //   window.addEventListener("scroll", infiniteScroll, { passive: false });
  // }
}

function homePage() {
  searchForm.value = "";

  movieTopPreview_details.classList.remove("inactive");
  movieTopPreview_video.classList.remove("inactive");

  categoriesPreview.classList.remove("inactive");
  categoryPreview_title.classList.add("inactive");
  categoriesPreview_list.classList.remove("inactive");

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

  getTrendingMoviesPreview();
  //getMovieTopPreview();
  getCategoriesMovies();
  getTopRatedMoviesPreview();
  getPopularMoviesPreview();
  getProvidersMoviesPreview();
}

function searchPage() {
  movieTopPreview_details.classList.add("inactive");
  movieTopPreview_video.classList.add("inactive");
  categoryPreview_title.classList.remove("inactive");
  categoriesPreview_list.classList.add("inactive");
  trendingMoviesPreview.classList.add("inactive");
  topRatedMoviesPreview.classList.add("inactive");
  popularMoviesPreview.classList.add("inactive");
  providersMoviesPreview.classList.add("inactive");
  genericSection.classList.remove("inactive");

  const query = location.hash.split("=")[1];
  getMoviesBySearch(query);
}

function categoriesPage() {
  movieTopPreview_details.classList.add("inactive");
  movieTopPreview_video.classList.add("inactive");
  categoryPreview_title.classList.remove("inactive");
  categoriesPreview_list.classList.add("inactive");
  trendingMoviesPreview.classList.add("inactive");
  topRatedMoviesPreview.classList.add("inactive");
  popularMoviesPreview.classList.add("inactive");
  providersMoviesPreview.classList.add("inactive");
  genericSection.classList.remove("inactive");

  let [idCategory, nameCategory] = location.hash.split("=")[1].split("-");
  //o => %C3%B3  //e => %C3%A9  //i => %C3%AD  //u => %C3%BA
  if (nameCategory.includes("%C3%B3")) {
    nameCategory = nameCategory.replace("%C3%B3", "o");
    if (nameCategory.includes("%20")) {
      nameCategory = nameCategory.replace("%20", " ");
    }
  } else if (nameCategory.includes("%C3%A9")) {
    nameCategory = nameCategory.replace("%C3%A9", "e");
  } else if (nameCategory.includes("%C3%AD")) {
    nameCategory = nameCategory.replace("%C3%AD", "i");
    if (nameCategory.includes("%20de%20")) {
      nameCategory = nameCategory.replace("%20de%20", " de ");
    }
  } else if (nameCategory.includes("%C3%BA")) {
    nameCategory = nameCategory.replace("%C3%BA", "u");
  }

  getMoviesByCategory(idCategory, nameCategory);
}

function trendsPage() {
  movieTopPreview_details.classList.add("inactive");
  movieTopPreview_video.classList.add("inactive");
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
  movieTopPreview_details.classList.add("inactive");
  movieTopPreview_video.classList.add("inactive");
  categoriesPreview.classList.add("inactive");
  trendingMoviesPreview.classList.add("inactive");
  topRatedBtn.classList.add("inactive");
  topRatedCarousel.classList.add("inactive");
  popularMoviesPreview.classList.add("inactive");
  providersMoviesPreview.classList.add("inactive");
  genericSection.classList.remove("inactive");

  getTopRatedMovies();
}

function popularPage() {
  movieTopPreview_details.classList.add("inactive");
  movieTopPreview_video.classList.add("inactive");
  categoriesPreview.classList.add("inactive");
  trendingMoviesPreview.classList.add("inactive");
  topRatedMoviesPreview.classList.add("inactive");
  popularBtn.classList.add("inactive");
  popularCarousel.classList.add("inactive");
  providersMoviesPreview.classList.add("inactive");
  genericSection.classList.remove("inactive");

  getPopularMovies();
}

function providersPage() {
  movieTopPreview_details.classList.add("inactive");
  movieTopPreview_video.classList.add("inactive");
  categoriesPreview.classList.add("inactive");
  trendingMoviesPreview.classList.add("inactive");
  topRatedMoviesPreview.classList.add("inactive");
  popularMoviesPreview.classList.add("inactive");
  providersBtn.classList.add("inactive");
  providersCarousel.classList.add("inactive");
  genericSection.classList.remove("inactive");

  getProvidersMovies();
}
