import React from "react";
import OnePost from "./onePost";
import APIService from "./APIServices";
function PostList(props) {
  const deletePost = (post) => {
    APIService.DeletePost(post.id).then(() => props.deletePost(post));
    console.log(post.id);
  };
  return (
    <div className="container px-4 px-lg-5">
      {props.posts &&
        props.posts.posts.map((post) => {
          return (
            <OnePost
              updatedData={props.updatedData}
              key={post.id}
              post={post}
              setPosts={props.setPosts}
              deletePost={deletePost}
            />
          );
        })}
    </div>
  );
}

export default PostList;
