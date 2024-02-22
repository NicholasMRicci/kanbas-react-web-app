import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from '../src/App'; // imports from App.tsx. The .tsx extension is implied
import reportWebVitals from '../src/reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
 <React.StrictMode>
   <App />
 </React.StrictMode>
);
