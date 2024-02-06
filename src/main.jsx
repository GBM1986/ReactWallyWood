import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './components/AuthProvider/AuthProvider.jsx';
import { CartProvider } from './components/CartProvider/CartProvider.jsx'; // Import CartProvider

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider> {/* Wrap App component with AuthProvider */}
      <CartProvider> {/* Wrap App component with CartProvider */}
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>,
);
