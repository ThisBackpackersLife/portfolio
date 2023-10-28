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
import Popup1 from './Popup1';
import Popup2 from './Popup2';
import Popup3 from './Popup3';

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
      <Popup1 />
      <Popup2 />
      <Popup3/>
    </div>
  )
}

export default App;
