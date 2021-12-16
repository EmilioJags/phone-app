import axios from "axios";

let TEL_URL = "http://192.168.100.11:8080/listatelefono/";

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
    let newStr =
      "http://192.168.100.11:8080/listatelefono/find-phones/filter?filter=" +
      str;
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
