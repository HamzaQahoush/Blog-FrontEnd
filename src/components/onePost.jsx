import React, { useState, useEffect } from "react";
import APIService from "./APIServices";

import "../App.css";

const OnePost = (props) => {
  let [toggle, setToggle] = useState(true);
  const [title, setEditTitle] = useState("");
  const [body, setEditBody] = useState("");
  const [image, setEditImage] = useState("");
  const [author, setEditAuthor] = useState("");
  useEffect(() => {
    setEditTitle(props.post.title);
    setEditBody(props.post.body);
    setEditImage(props.post.image);
    setEditAuthor(props.post.author);
  }, [props.post]);
  const editPost = (e) => {
    e.preventDefault();
    APIService.UpdatePost(props.post.id, {
      title,
      body,
      image,
      author,
    }).then((resp) => props.updatedData(resp));
    setToggle(!toggle);
  };

  return (
    <div>
      <hr />
      <div className="row gx-4 gx-lg-5 justify-content-center">
        <div className="col-md-10 col-lg-8 col-xl-7">
          <div className="post-preview">
            <button
              type="button"
              className="btn-close-white"
              aria-label="Close"
              onClick={() => setToggle(!toggle)}
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <input
              onChange={(e) => setEditTitle(e.target.value)}
              name="title"
              className="form-control "
              disabled={toggle}
              required
              value={title}
              type="text"
              placeholder="please enter title"
            />
            <textarea
              onChange={(e) => setEditBody(e.target.value)}
              name="body"
              disabled={toggle}
              required
              value={body}
              type="text"
              className="form-control "
              placeholder="please enter title"
            />
            <img className=" img-fluid" src={props.post.image} alt="" />
            <input
              onChange={(e) => setEditImage(e.target.value)}
              name="image"
              hidden={toggle}
              disabled={toggle}
              required
              defaultValue={props.post.image || ""}
              type="text"
              className="form-control "
              placeholder="paste an image url"
            />
            <p className="post-meta">
              Posted by
              <a href="#!"> {author} </a> at -{props.post.date}
            </p>
            <input
              onChange={(e) => setEditAuthor(e.target.value)}
              name="author"
              hidden={toggle}
              disabled={toggle}
              required
              defaultValue={props.post.author || ""}
              type="text"
              className="form-control "
              placeholder="update the author"
            />
            <button
              className="btn btn-secondary mx-2"
              onClick={() => setToggle(!toggle)}
            >
              Edit
            </button>
            <button
              className="btn btn-primary mx-2"
              onClick={(e) => editPost(e, props.post)}
            >
              {" "}
              save changes{" "}
            </button>
            <button
              onClick={() => props.deletePost(props.post)}
              className="btn btn-danger"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnePost;
