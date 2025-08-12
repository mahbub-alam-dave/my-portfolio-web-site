import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './pages/Root.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import ProjectDetails from './pages/ProjectDetails.jsx'
import ContextProvider from './contexts/ContextProvider.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about-me',
        element: <About />
      },
      {
        path: '/projects',
        element: <Projects />,
        loader: () => fetch('/Projects.json'),
        hydrateFallbackElement: <span className='loading loading-spinner'></span>
      },
      {
        path: '/project/:title',
        element: <ProjectDetails />,
        loader: async ({params}) => {
          const res = await fetch('/Projects.json')
          const data = await res.json()
          const project = data.find(p => 
            p.title.toLowerCase().split(" ").join('-') === params.title
          );
          if(!project) {
            throw new Response("Project Not found", {status: 404})
          }

          return project;
        },
        hydrateFallbackElement: <span className='loading loading-spinner'></span>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
    <RouterProvider router={router}></RouterProvider>
    </ContextProvider>
  </StrictMode>,
)
