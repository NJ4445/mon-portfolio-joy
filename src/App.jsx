// App.js
import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Projects from './components/Projects/Projects'; 
import Contact from './components/Contact/Contact';  
import About from './components/About/About';  
import Skills from './components/Skills/Skills'; 

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <About />
      <Skills /> 
      <Projects /> 
      <Contact />  
      <Footer />
    </div>
  );
}

export default App;
