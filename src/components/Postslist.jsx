import React from "react";
import APIService from "./APIServices";
function PostList(props) {
  const editPost = (post) => {
    props.editPost(post);
  };

  const deletePost = (post) => {
    APIService.DeletePost(post.id).then(() => props.deletePost(post));
    console.log(post.id);
  };
  return (
    <div className="container px-4 px-lg-5">
      {props.posts &&
        props.posts.posts.map((post) => {
          return (
            <div>
              <hr />
              <div
                className="row gx-4 gx-lg-5 justify-content-center"
                key={post.id}
              >
                <div className="col-md-10 col-lg-8 col-xl-7">
                  <div className="post-preview">
                    <h2 className="post-title">{post.title}</h2>
                    <h3 class="post-subtitle">{post.body}</h3>
                    <img className="w-50 img-fluid" src={post.image} alt="" />

                    <p className="post-meta">
                      Posted by
                      <a href="#!"> {post.author} </a> at -{post.date}
                    </p>
                    <button
                      className="btn btn-secondary mx-2"
                      onClick={() => editPost(post)}
                    >
                      Update
                    </button>
                    <button
                      onClick={() => deletePost(post)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default PostList;
