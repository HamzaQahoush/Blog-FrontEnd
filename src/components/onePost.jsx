import React, { useState, useEffect } from "react";
import APIService from "./APIServices";
import moment from "moment";
import { Form } from "react-bootstrap";

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
              className="btn-close-white "
              aria-label="Close"
              onClick={() => setToggle(!toggle)}
            >
              <span aria-hidden="true">&times;</span>
            </button>

            <Form>
              <Form.Group className="mb-3 ">
                <Form.Label></Form.Label>
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="title "
                  disabled={toggle}
                  required
                  value={title}
                  onChange={(e) => setEditTitle(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label></Form.Label>
                <Form.Control
                  transparent-input
                  as="textarea"
                  rows={3}
                  onChange={(e) => setEditBody(e.target.value)}
                  name="body"
                  disabled={toggle}
                  required
                  value={body}
                  type="text"
                  placeholder="What's on your mind?"
                />
              </Form.Group>
            </Form>

            <img className=" img-fluid w-70" src={props.post.image} alt="" />
            <input
              onChange={(e) => setEditImage(e.target.value)}
              name="image"
              hidden={toggle}
              disabled={toggle}
              required
              defaultValue={image || ""}
              type="text"
              className="form-control "
              placeholder="paste an image url"
            />
            <p className="post-meta">
              Posted by
              <a href="#!"> {author} </a> at -
              {moment(props.post.date).startOf("hour").fromNow()}
            </p>
            <input
              onChange={(e) => setEditAuthor(e.target.value)}
              name="author"
              hidden={toggle}
              disabled={toggle}
              required
              defaultValue={author || ""}
              type="text"
              className="form-control "
              placeholder="update the author"
            />
            <button
              className="btn btn-outline-secondary mx-2"
              onClick={() => setToggle(!toggle)}
            >
              Edit
            </button>
            <button
              className="btn btn-outline-primary mx-2"
              onClick={(e) => editPost(e, props.post)}
            >
              {" "}
              save changes{" "}
            </button>
            <button
              onClick={() => props.deletePost(props.post)}
              className="btn btn-outline-danger"
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
