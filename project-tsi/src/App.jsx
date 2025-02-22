import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header.jsx'
import Home from './pages/Home.tsx'
import About from './pages/About.tsx'
import Blog from './pages/Blog.tsx'

function App() {
  return (
    <>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route to="/" element={<Home/>}/>
        <Route to="/about" element={<About/>}/>
        <Route to="/blog" element={<Blog/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App
