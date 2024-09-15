import React, { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const Navbar = ({ setCategory, isDarkMode, setIsDarkMode, setQuery }) => {
  const [query, setQueryState] = useState("");

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      setCategory("");
      setQueryState(query);
      setQuery(query); // Add this line to update the query state in App
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span className="badge bg-success text-white fs-4">Just Heads</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {[
              "general",
              "technology",
              "business",
              "health",
              "sports",
              "science",
              "entertainment",
            ].map((category) => (
              <li className="nav-item" key={category}>
                <div
                  className="nav-link"
                  onClick={() => setCategory(category)}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </div>
              </li>
            ))}
          </ul>
          <input
            type="text"
            className="form-control me-2"
            placeholder="Search news with keywords"
            value={query}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch(e);
              }
            }}
            onChange={(e) => setQueryState(e.target.value)}
          />
          <button
            type="button"
            className="btn btn-outline-success ms-3"
            onClick={() => setIsDarkMode(!isDarkMode)}
          >
            {isDarkMode ? (
              <FaSun size={20} />
            ) : (
              <FaMoon size={20} />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;