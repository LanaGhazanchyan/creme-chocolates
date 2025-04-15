import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const theme = createTheme();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </Provider>
);
