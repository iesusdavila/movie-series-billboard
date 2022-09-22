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

getCategoriesMovies();
