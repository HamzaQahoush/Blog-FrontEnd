import axios from "axios";
import "../App.css";

import React, { useState } from "react";
import Modal from "react-modal";
const Form = (props) => {
  const [title, setTitle] = useState("");
  const [body, setbody] = useState("");
  const [image, setimage] = useState("");
  const [author, setauthor] = useState("");
  const [modalOpen, setmodalOpen] = useState(false);

  //fetching url using axios
  const addForm = async (e) => {
    e.preventDefault();
    const res = await axios.post(`http://127.0.0.1:4000/add`, {
      title,
      body,
      image,
      author,
    });

    props.setPosts((prev) => ({
      posts: [...prev.posts, { title, body, image, author }],
    }));

    setmodalOpen(false);
    setTitle("");
    setauthor("");
    setimage("");
    setbody("");
  };
  return (
    <div>
      <span
        className="mx-3 text-center "
        style={{ cursor: "pointer" }}
        onClick={() => {
          setmodalOpen(true);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          class="bi bi-plus-circle-fill"
          viewBox="0 0 16 16"
        >
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
        </svg>
        &nbsp; add
      </span>{" "}
      <Modal
        className="w-50 bg-light"
        isOpen={modalOpen}
        onRequestClose={() => setmodalOpen(false)}
      >
        <form className="form-group  mx-5 py-5" onSubmit={addForm}>
          <div className="mb-3  ">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              required
              value={title || ""}
              onChange={(t) => setTitle(t.target.value)}
              type="text"
              className="form-control "
              placeholder="please enter title"
            />
            <label htmlFor="body" className="form-label">
              description
            </label>
            <textarea
              required
              value={body || ""}
              onChange={(b) => setbody(b.target.value)}
              type="text"
              className="form-control "
              placeholder="please enter description"
            />
            <label htmlFor="body" className="form-label">
              author
            </label>
            <input
              required
              value={author || ""}
              onChange={(b) => setauthor(b.target.value)}
              type="text"
              className="form-control "
              placeholder="please enter your name "
            />
            <label htmlFor="body" className="form-label">
              image
            </label>
            <textarea
              value={image || ""}
              onChange={(b) => setimage(b.target.value)}
              type="image"
              className="form-control "
              placeholder="paste an image url"
            />
          </div>
          <button className="btn btn-primary" type="submit">
            {" "}
            Submit{" "}
          </button>
          <button
            className="btn btn-warning"
            onClick={() => setmodalOpen(false)}
          >
            {" "}
            close
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default Form;
