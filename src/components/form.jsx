import axios from "axios";
import React, { useState } from "react";
import Modal from "react-modal";
// import APIService from "./APIServices";
const Form = (props) => {
  const [title, setTitle] = useState("");
  const [body, setbody] = useState("");
  const [image, setimage] = useState("");
  const [author, setauthor] = useState("");
  const [modalOpen, setmodalOpen] = useState(false);
  //   const updatePost = () => {
  //     APIService.UpdatePost(props.post.id, { title, body, image, author })
  //       .then((resp) => console.log(resp))
  //       .catch((error) => console.log(error));
  //   };
  const addForm = async (e) => {
    e.preventDefault();
    // APIService.addPost({ title, body, image, author })
    //   .then((resp) => console.log(resp))
    //   .catch((error) => console.log(error));
    const res = await axios.post(`http://127.0.0.1:5000/add`, {
      title,
      body,
      image,
      author,
    });
    // console.log(res.data);
    props.setPosts((prev) => ({
      posts: [...prev.posts, { title, body, image, author }],
    }));
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
      <Modal
        isOpen={modalOpen}
        onRequestClose={() => setmodalOpen(false)}
        className="row d-flex justify-content-center"
      >
        <form className="form-group" onSubmit={addForm}>
          <div className="mb-3  ">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              value={title}
              onChange={(t) => setTitle(t.target.value)}
              type="text"
              className="form-control "
              placeholder="please enter title"
            />
            <label htmlFor="body" className="form-label">
              description
            </label>
            <textarea
              value={body}
              onChange={(b) => setbody(b.target.value)}
              type="text"
              className="form-control "
              placeholder="please enter description"
            />
            <label htmlFor="body" className="form-label">
              author
            </label>
            <textarea
              value={author}
              onChange={(b) => setauthor(b.target.value)}
              type="text"
              className="form-control "
              placeholder="please enter your name "
            />
            <label htmlFor="body" className="form-label">
              image
            </label>
            <textarea
              value={image}
              onChange={(b) => setimage(b.target.value)}
              type="image"
              className="form-control "
              placeholder="paste an image url"
            />
          </div>
          <button type="submit"> submit </button>

          <button onClick={() => setmodalOpen(false)}> close</button>
        </form>
      </Modal>
    </div>
  );
};

export default Form;
