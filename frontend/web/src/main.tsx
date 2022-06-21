import React from 'react'
import ReactDOM from 'react-dom'
//import { createRoot } from 'react-dom/client'
import { App } from './App'
import { AuthProvider } from './contexts/auth'
import './styles/global.css'

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

/*createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
)*/