import React from 'react';
// Import components
import Home from './Home';
// import Grid from './Grid';
import About from './About';
import Stack from './Stack';
import Projects from './Projects';
import Reviews from './Reviews';
import Contact from './Contact';


function App() {
  return (
    <div>
      <Home />
      {/* <Grid /> */}
      <About />
      <Stack />
      <Projects />
      <Reviews />
      <Contact />
    </div>
  )
}

export default App;
