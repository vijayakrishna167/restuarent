import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import StorecontextProvider from './context/Storecontext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StorecontextProvider>
  <App />
  </StorecontextProvider>
  </BrowserRouter>

)
