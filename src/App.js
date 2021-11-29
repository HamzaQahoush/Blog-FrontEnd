import Nav from "./components/nav";
import Header from "./components/header";
import Footer from "./components/footer";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./components/form";
import { useState, useEffect } from "react";
import PostList from "./components/Postslist";

function App() {
  const [posts, setPosts] = useState();
  const [editedPost, setEditedPost] = useState();

  useEffect(() => {
    fetch("http://127.0.0.1:5000/get")
      .then((resp) => resp.json())
      .then((resp) => setPosts(resp))

      .catch((error) => console.log(error));
  }, []);
  //edit
  const editPost = (post) => {
    setEditedPost(post);
  };

  const addForm = () => {
    setEditedPost({ title: "", body: "" });
  };

  //delete
  const deletePost = (post) => {
    const new_posts = posts.posts.filter((p) => {
      return p.id !== post.id;
    });
    setPosts({ posts: new_posts });
  };
  return (
    <div className="app">
      <Nav />
      <Header />
      <Form post={editedPost} setPosts={setPosts} />
      <PostList posts={posts} editPost={editPost} deletePost={deletePost} />

      <Footer />
    </div>
  );
}

export default App;
