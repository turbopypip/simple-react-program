import React, {useRef, useState} from "react";
import ReactDOM from "react-dom";
import "./styles/App.css";
import PostItem from "./components/postItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/Button/MyButton";
import MyInput from "./components/UI/Input/MyInput";
import PostForm from "./components/UI/PostForm";


function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: 'Description'},
    {id: 2, title: 'Javascript 2', body: 'Description'},
    {id: 3, title: 'Javascript 3', body: 'Description'}
  ]);
  
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }
  
  return (
    <div className="App">
      <PostForm create={createPost} />
      {
        posts.length
        ?
          <PostList remove={removePost} posts = {posts} title={'Посты про Js'} />
        :
          <h1 style={{textAlign: 'center'}}>Посты не найдены!</h1>
      }
    </div>
  );
}

export default App;
