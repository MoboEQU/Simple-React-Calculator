import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from '@mui/material';
import theme from './theme';
import { CssBaseline } from '@mui/material';

//Purpose: The purpose of this file is to serve as a top-level view of all the app's components
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme = {theme}> {/* Theme Provider and CssBaseline provide our "dark" color style from material UI */}
    <CssBaseline/>
    <App />
    </ThemeProvider>
  </React.StrictMode>
);


