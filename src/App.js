import React from 'react';
import Header from './components/Header';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Carousel />
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}

export default App;
