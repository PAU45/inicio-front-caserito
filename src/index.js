// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';  // Asegúrate de que la ruta sea correcta
import App from './App';
import reportWebVitals from './reportWebVitals';

// Renderiza la aplicación principal
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Para medir el rendimiento de la aplicación (opcional)
reportWebVitals();
