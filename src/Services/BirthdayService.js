import axios from "axios";
//let URL = "https://ricardo-mycvapp.herokuapp.com/";
//let B_URL = "http://localhost:8080/";
let B_URL = "https://ricardo-mycvapp.herokuapp.com/";
let url = "birthdays/";
let full_url = B_URL + url;
class BirthdayService {
  getBirths() {
    return axios.get(full_url);
  }

  addBirth(birthday) {
    return axios.post(full_url + "add-birthday", birthday);
  }

  findById(id) {
    let newSearch = full_url + "birthday/" + id;
    return axios.get(newSearch);
  }

  findByFilter(str) {
    let newStr = full_url + "find-births/filter?filter=" + str;
    return axios.get(newStr);
  }
  deleteBirth(id) {
    return axios.delete(full_url + "remove-birth/" + id);
  }
  updateBirth(id, contact) {
    return axios.put(full_url + "edit-birth/" + id, contact);
  }
}

export default new BirthdayService();
