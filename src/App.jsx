import React from "react";
import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import NewsBoard from "./Components/NewsBoard";
import Footer from "./Components/Footer";
import "./App.css";

const App = () => {
  const [category, setCategory] = useState("general");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return (
    <div>
      <Navbar
        setCategory={setCategory}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        setQuery={setQuery}
      />
      <NewsBoard query={query} category={category} />
      <Footer />
    </div>
  );
};

export default App;