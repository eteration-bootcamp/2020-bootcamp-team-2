import React from 'react';
import Navbar from "./app/components/Navbar";
import Footer from "./app/components/Footer";
import Header from "./app/components/Header/Header";
import Cards from "./app/components/Header/Cards";
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
