import "./NewPost.css"

import blogFetch from '../axios/config'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const NewPost = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState();
  const [body, setBody] = useState();

  const createPost = async ()=>{
    const post = {title, body, userId: 1};

    await blogFetch.post("/posts", {
      body: post,
    })

    navigate('/')
  }

  return (
    <div className='new-post'>
      <h2>Inserir novo Post:</h2>
      <form onSubmit={(e)=> {
        e.preventDefault();
        createPost();
      }}>
        <div className="form-control">
          <label htmlFor="title">Título:</label>
          <input type="text" name="title" placeholder='Digite o título' id='title' onChange={(e)=>setTitle(e.target.value)}></input>
        </div>
        <div className="form-control">
          <label htmlFor="body">Conteúdo:</label>
          <textarea name="body" id="body" placeholder='Digite o conteúdo' onChange={(e)=>setBody(e.target.value)}></textarea>
        </div>
        <input type="submit" value="Criar Post" className='btn'></input>
      </form>
    </div>
  )
}

export default NewPost