import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Root element not found");
}
// eslint-disable-next-line @typescript-eslint/no-redeclare
const root = ReactDOM.createRoot(rootElement as Element);


root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
