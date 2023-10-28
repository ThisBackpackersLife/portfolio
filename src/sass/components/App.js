import React from 'react';
// Import components
import Home from './Home';
import About from './About';
import Stack from './Stack';
import Projects from './Projects';
import Reviews from './Reviews';
import Contact from './Contact';
import Footer from './Footer';
import Nav from './Nav';
import Popup from './Popup';
import Popup2 from './Popup2';

function App() {
  return (
    <div>
      <Nav />
      <Home />
      <About />
      <Stack />
      <Projects />
      <Reviews />
      <Contact />
      <Footer />
      <Popup />
      <Popup2 />
    </div>
  )
}

export default App;
