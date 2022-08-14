import React from 'react'
import {
  Routes,
  Route,
} from 'react-router-dom'

import './App.scss'

import MainLayout from './layouts/MainLayout'

function App() {
  return (
    <div
      className="app"
    >
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/lines" element={<MainLayout />} />
      </Routes>
    </div>
  );
}

export default App
