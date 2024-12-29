import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './layout.jsx'
import { Route, RouterProvider , createBrowserRouter, createRoutesFromElements  } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { gitHubInfoLoader } from './components/Github/Github.jsx'


// Method no. 1 


// const router = createBrowserRouter([
//   {
//     path:"/",
//     element: <Layout/>,
//     children:
//     [ 
//       {
//         path:"",
//         element:<Home/>
//       } , 
//       {
//         path: "about",
//         element:<About/>
//       },
//       {
//         path: "contact",
//         element:<Contact/>
//       }
//     ]
//   }
// ])


// Method no. 2 

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route  path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route
       loader={gitHubInfoLoader} 
       path='github'
       element={<Github  />} 
       />

    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <RouterProvider router={router} />
  </StrictMode>,
)