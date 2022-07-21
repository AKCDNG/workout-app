import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { WorkoutsContextProvider } from './context/workoutsContext';
import { authContextProvider } from './context/authContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <authContextProvider>
      <WorkoutsContextProvider>
        <App />
      </WorkoutsContextProvider>
    </authContextProvider>
  </React.StrictMode>
);
