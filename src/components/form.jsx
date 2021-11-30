import axios from "axios";
import React, { useState } from "react";
import Modal from "react-modal";
const Form = (props) => {
  const [title, setTitle] = useState("");
  const [body, setbody] = useState("");
  const [image, setimage] = useState("");
  const [author, setauthor] = useState("");
  const [modalOpen, setmodalOpen] = useState(false);

  //fetching url
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
      <button
        className="btn btn-secondary mx-2"
        onClick={() => {
          setmodalOpen(true);
        }}
      >
        {" "}
        add post
      </button>
      <Modal isOpen={modalOpen} onRequestClose={() => setmodalOpen(false)}>
        <form className="form-group" onSubmit={addForm}>
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
