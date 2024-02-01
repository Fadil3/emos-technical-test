import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="*"
          element={<h1 className='w-4/12 text-center mx-auto mt-20 font-bold text-2xl'>404</h1>}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
