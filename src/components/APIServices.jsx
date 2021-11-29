import axios from "axios";
export default class APIService {
  static UpdatePost(id, body) {
    return fetch(`http://127.0.0.1:5000/update/${id}/`, {
      method: "PUT",
      headers: { "Content-Type": "application.json" },
      body: JSON.stringify(body),
    }).then((resp) => resp.json());
  }

  async addPost(body) {
    // return fetch(`http://127.0.0.1:5000/add`, {
    //   method: "POST",
    //   headers: { "Content-Type": "application.json" },
    //   body: JSON.stringify(body),
    // })
    //   .then((resp) => resp.json())
    //   .then((res) => console.log(res));
    const res = await axios.post(`http://127.0.0.1:5000/add`, body);
    console.log(res.data);
    return res.data;
  }

  static DeletePost(id) {
    return fetch(`http://127.0.0.1:5000/delete/${id}/`, {
      method: "DELETE",
      headers: { "Content-Type": "application.json" },
    });
  }
}
