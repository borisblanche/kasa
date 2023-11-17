import React from 'react';
import './App.css';

import NavHeader from '../src/components/header/index'
import Banner from '../src/components/banner'
import Footer from '../src/components/footer'
import Gallery from '../src/components/gallery'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Apropos from './components/apropos/apropos';
// import Home from '../src/pages/home/';
// import Error from './pages/home/Error/';
// import DetailLogement from './components/fiche-logement';
// import { Route } from 'react-router-dom';



function App() {
  return (<div>
    <NavHeader />
    <Banner />
    <Gallery />
    <Footer/>
    </div>
    // <Router>
    // <NavHeader />
    //   <Routes>
    //   <Route path="/" element={<Home />} />
    //   <Route path="/apropos"element={<Apropos/>}/>
    //     <Route path="*" element={<Error />} />
    //     </Routes>
    // <Banner />
    // <Gallery/>
    //     <Footer />
       
    //   </Router>
  
  );
}


export default App;
