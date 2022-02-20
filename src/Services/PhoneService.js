import axios from "axios";
let URL = "https://ricardo-mycvapp.herokuapp.com/";
//let URL = "http://localhost:8080/";
let TEL_URL = URL + "listatelefono/";

class PhoneService {
  getPhones() {
    return axios.get(TEL_URL);
  }

  createPhone(phone) {
    return axios.post(TEL_URL + "add-phone", phone);
  }

  findById(id) {
    let newSearch = TEL_URL + "find-phone/" + id;
    return axios.get(newSearch);
  }
  findByFilter(str) {
    let newStr = TEL_URL + "find-phones/filter?filter=" + str;
    return axios.get(newStr);
  }
  deleteContact(id) {
    return axios.delete(TEL_URL + "remove-phone/" + id);
  }
  updateContact(id, contact) {
    return axios.put(TEL_URL + "edit-phone/" + id, contact);
  }
}

export default new PhoneService();
