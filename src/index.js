// index.js or main.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';  // or your tailwind CSS file

ReactDOM.render(
  <Router> {/* Router should be at the root level */}
    <App  />
  </Router>,
  document.getElementById('root')
);
