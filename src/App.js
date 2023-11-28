import React from 'react';
import './App.css';
import NavHeader from '../src/components/header/index'
import Banner from '../src/components/banner'
import Footer from '../src/components/footer'
import Gallery from '../src/components/gallery'





function App() {
  return (<div >
     <NavHeader  />
    <Banner />
      <Gallery />
    <Footer/>
    </div>
  
  );
}


export default App;
