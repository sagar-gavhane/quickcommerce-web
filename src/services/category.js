import axios from "./../utils/axios";

class CategoryService {
  static get() {
    return axios.get("/category");
  }

  static getFeatured() {
    return axios.get("/category/featured");
  }
}

export default CategoryService;
