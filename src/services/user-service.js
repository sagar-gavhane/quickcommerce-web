import axios from "./../utils/axios";

class UserService {
  static get() {
    return axios.get("/user");
  }
}

export default UserService;
