import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import WorkPage from './components/work/WorkPage.jsx'
import AboutPage from './components/about/AboutPage.jsx'
import ContactPage from './components/contact/ContactPage.jsx'
import HomePage from './components/HomePage/HomePage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
