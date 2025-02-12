import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { FireContextProvider } from './context/Firebase.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <FireContextProvider>
        <App />
      </FireContextProvider>
    </Router>
  </React.StrictMode>
)
