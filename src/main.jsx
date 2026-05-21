import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { RouterProvider } from "react-router";
import { router } from './Router/Router.jsx';
import AuthProvider from './context/AuthProvider/AuthProvider.jsx';
import 'leaflet/dist/leaflet.css';
import { Toaster } from 'react-hot-toast';
// --------------AOS(ANIMATE ON SCROLL)-------------


import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()


createRoot(document.getElementById('root')).render(
 
  <StrictMode>
    <div className='urbanist max-w-8xl mx-auto'>
 
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
  <RouterProvider router={router} />
    <Toaster />
 </AuthProvider></QueryClientProvider>
 </div>
  </StrictMode>,
)
