import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Import your CSS file here if needed
import App from './App'; // Import your main component (App) here
import reportWebVitals from './reportWebVitals'; // Optional: Import for performance monitoring

ReactDOM.render(
  <React.StrictMode>
    <App /> {/* Render your main component (App) here */}
  </React.StrictMode>,
  document.getElementById('root') // Mount your React application in the root element of your HTML
);

// Optional: If you want to measure performance in your app, pass a function to log results
reportWebVitals(console.log);
