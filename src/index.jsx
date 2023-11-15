// import React from 'react';
// import ReactDOM from 'react-dom/client';
// // import { Link } from 'react-router-dom';
// // import { Routes, Route } from 'react-router-dom'
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
// import Home from './pages/Home';
import Apropos from '../src/pages/apropos/apropos';
import Error from '../../kasa/src/pages/Error/index';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/apropos" element={<Apropos />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);