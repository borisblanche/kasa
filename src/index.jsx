import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Apropos from '../src/pages/apropos/apropos';
import Error from '../../kasa/src/pages/Error/index';
import appartements from "../src/appartements.json"
import DetailLogement from './components/fiche-logement';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 


ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/apropos" element={<Apropos />} />
      <Route path="*" element={<Error />} />
      <Route path="/fiche-logement/:id" element={<DetailLogement appartements={appartements} />} />
      {/* <Route path="/fiche-logement/:id" component={Carousel} /> */}
    </Routes>
  </Router>,
  document.getElementById('root')
);


