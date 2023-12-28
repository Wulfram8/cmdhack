import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline, CssVarsProvider } from '@mui/joy';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <CssVarsProvider disableTransitionOnChange>
        <CssBaseline />
        <App />
      </CssVarsProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
