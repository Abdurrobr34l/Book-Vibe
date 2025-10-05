import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './Routes/Routes'

// import { createBrowserRouter, RouterProvider } from 'react-router'

// const router = createBrowserRouter([
//   {
//     path:"/",
//     element: <h1>I am from router</h1>,
//   },
// ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
