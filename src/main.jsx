import React from 'react'
import ReactDOM from 'react-dom/client'

import router from './router';
import { RouterProvider } from "react-router-dom";

import './index.css'
import { WindowsProvider } from './context/Windows';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WindowsProvider>
      <RouterProvider router={router} />
    </WindowsProvider>
  </React.StrictMode>,
)
