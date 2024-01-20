import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import LandingPage from './components/landingPage/landingPage.jsx'
import WorkPage from './components/work/WorkPage.jsx'
import AboutPage from './components/about/AboutPage.jsx'
import Contact from './components/contact/ContactFrontPage.jsx'
import ContactPage from './components/contact/ContactPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/work',
    element: <WorkPage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
