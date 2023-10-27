import React from 'react';
import './App.css';
import Header from './components/header';
import About from './components/about';
import Portfolio from './components/portfolio';
import Contact from './components/contact';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;