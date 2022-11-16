import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main.scss';
import reportWebVitals from './reportWebVitals';
import HomePage from './pages/Home';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>
);
reportWebVitals();
