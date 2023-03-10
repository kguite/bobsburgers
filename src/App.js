import React from "react";
import './App.css';
import './style.css';
import Navbar from "../src/components/Navbar";
import Header from "../src/components/Header";
import Characters from "../src/components/Characters";
import BurgerOfTheDay from "../src/components/BurgerOfTheDay";
import Quiz from "../src/components/Quiz";
import Footer from "../src/components/Footer";



function App() {


  return (
    <div className="App">
      <Navbar  />
      <Header />
      <Characters  />
      <BurgerOfTheDay />
      <Quiz />
      <Footer />
    </div>
  );

  
}

export default App;
