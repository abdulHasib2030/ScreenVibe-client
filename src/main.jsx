import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Route from './routes/Route.jsx'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './provider/AuthProvider.jsx'
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <AuthProvider>
      <RouterProvider router={Route}>
      </RouterProvider>
    </AuthProvider>
    </HelmetProvider>
    
  </StrictMode>,
)
