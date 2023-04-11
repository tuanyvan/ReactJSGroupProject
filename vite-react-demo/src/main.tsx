import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Welcome from './Welcome'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Welcome />}></Route>
          <Route path="app" element={<App />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
