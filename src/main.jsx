import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './assets/main.css';
import App from './App.jsx';
import { BrowserRouter, HashRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <BrowserRouter> */}
    <HashRouter>
      <App />
    </HashRouter>
    {/* </BrowserRouter> */}
  </StrictMode>
);
