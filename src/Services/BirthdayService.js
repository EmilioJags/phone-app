import axios from "axios";
//let URL = "https://ricardo-mycvapp.herokuapp.com/";
//let TEL_URL = URL + "listatelefono/";
let B_URL = "http://localhost:8080/";
let url = "birthdays/";
class PhoneService {
  getBirths() {
    return axios.get(B_URL + url);
  }

  addBirth(birthday) {
    return axios.post(B_URL + "add-birthday", birthday);
  }

  findById(id) {
    let newSearch = B_URL + "find-birth/" + id;
    return axios.get(newSearch);
  }

  findByFilter(str) {
    let newStr = B_URL + "birthdays/find-births/filter?filter=" + str;
    return axios.get(newStr);
  }
  deleteBirth(id) {
    return axios.delete(B_URL + "remove-birth/" + id);
  }
  updateBirth(id, contact) {
    return axios.put(B_URL + "edit-birth/" + id, contact);
  }
}

export default new PhoneService();
