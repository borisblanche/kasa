import React from 'react';
import './App.css';
import NavHeader from '../src/components/header/index'
import Banner from '../src/components/banner'
import Footer from '../src/components/footer'
import Gallery from '../src/components/gallery'
import background1 from '../src/assets/banner.png';






function App() {
  return (<div >
     <NavHeader  />
    <Banner backgroundImage={background1} title="Chez vous , partout et ailleurs"/>
      <Gallery />
    <Footer/>
    </div>
  
  );
}


export default App;
