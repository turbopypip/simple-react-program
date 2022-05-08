import React, {useRef, useState} from "react";
import ReactDOM from "react-dom";
import "./styles/App.css";
import PostItem from "./components/postItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/Button/MyButton";
import MyInput from "./components/UI/Input/MyInput";
import PostForm from "./components/UI/PostForm";
import MySelect from "./components/UI/Select/MySelect";


function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'бб', body: 'дд'},
    {id: 2, title: 'яя', body: 'аа'},
    {id: 3, title: 'аа', body: '9'}
  ]);
  
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }
  
  const [selectedSort, setSelectedSort] = useState('')
  
  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts(...[posts].sort((a, b) => a[sort].localeCompare(b[sort])))
  }
  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{margin: '15px 0'}}/>
      <div>
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          dafaultValue="Сортировка"
          options={[
            {value: 'title', name:'По названию'},
            {value: 'body', name: 'По описанию'}
          ]}
        />
      </div>
      
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
