export default class APIService {
  static UpdatePost(id, body) {
    return fetch(`http://127.0.0.1:5000/update/${id}`, {
      method: "PUT",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((resp) => resp.json());
  }

  static DeletePost(id) {
    return fetch(`http://127.0.0.1:5000/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    });
  }
}
