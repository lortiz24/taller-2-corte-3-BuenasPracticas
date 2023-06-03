import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Home } from './pages/Home';
import { ThemeProvider } from '@mui/material';
import { darkTheme } from './themes/darkTheme';
import CssBaseline from '@mui/material/CssBaseline';
import { MainLayout } from './layout/MainLayout';



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <MainLayout>
        <Home />
      </MainLayout>
    </ThemeProvider>
  </React.StrictMode>,
)
