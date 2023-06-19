import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home/Index'
import About from '../Pages/About'

export default function AllRouter() {
  return (

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

  )
}

