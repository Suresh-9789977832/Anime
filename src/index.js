import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Globalcontextprovider } from './context/Global';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <Globalcontextprovider>
    <App />
    </Globalcontextprovider>
  </React.StrictMode>
);

