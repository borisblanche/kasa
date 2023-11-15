import React from 'react';
import './App.css';

import NavHeader from './components/header'
import Banner from './components/banner';
import Footer from './components/footer';
import Gallery from '../../components/gallery';



function App() {
  return (<div>
    <NavHeader />
      <Banner />
      <Gallery/>
    <Footer/>
    </div>
  );
}

export default App;