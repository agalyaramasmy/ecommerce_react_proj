import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18+ uses ReactDOM.createRoot
import App from './App'; // Your main App component

// Select the root element from index.html
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element with id "root" not found in index.html');
}

// Create the React app and render it
const root = ReactDOM.createRoot(rootElement);
root.render(
 
    <App />
 
);
