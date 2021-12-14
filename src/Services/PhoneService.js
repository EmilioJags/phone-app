import axios from "axios";

let TEL_URL = "http://localhost:8080/listatelefono/";

class PhoneService {
  getPhones() {
    return axios.get(TEL_URL);
  }

  createPhone(phone) {
    return axios.post(TEL_URL, TEL_URL);
  }

  findById(id) {
    let newSearch = TEL_URL + "/" + id;
    return axios.get(newSearch, id);
  }
}

export default new PhoneService();
