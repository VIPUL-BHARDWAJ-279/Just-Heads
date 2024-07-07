import React from "react";
import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar"
import NewsBoard from "./Components/NewsBoard"
import Footer from "./Components/Footer"
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [category, setCategory] = useState("general");
  const [country, setCountry] = useState("in");
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  return (
    <div>
      <Navbar 
        setCategory={setCategory} 
        setCountry={setCountry} 
        isDarkMode={isDarkMode} 
        setIsDarkMode={setIsDarkMode} 
      />
      <NewsBoard category={category} country={country} />
      <Footer />
    </div>
  )
}

export default App
