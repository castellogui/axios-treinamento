import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {createBrowserRouter, RouterProvider, Route} from "react-router-dom"

//Paginas
import Home from "./routes/Home";
import NewPost from './routes/NewPost';

const router = createBrowserRouter([
  {
    element: <App/>,
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path:"/new",
        element: <NewPost/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
)
