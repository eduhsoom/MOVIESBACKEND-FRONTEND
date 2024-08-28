import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from 'styled-components';

import theme from './styles/theme'
import GlobalStyles from './styles/global';

import { Routes } from './routes/'
import { AuthProvider } from './hooks/auth';


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ToastContainer theme='dark' autoClose={2500}/>
      <GlobalStyles />
      <AuthProvider>
      <Routes />
      </AuthProvider>
    </ThemeProvider> 
  </React.StrictMode>,
)
