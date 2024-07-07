import React from "react"

const Navbar = ({ setCategory, setCountry, isDarkMode, setIsDarkMode }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><span className="badge bg-light text-dark fs-4">Just Heads</span></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {['general', 'technology', 'business', 'health', 'sports', 'science', 'entertainment'].map(category => (
              <li className="nav-item" key={category}>
                <div className="nav-link" onClick={() => setCategory(category)}>{category.charAt(0).toUpperCase() + category.slice(1)}</div>
              </li>
            ))}
          </ul>
          <form className="d-flex ms-3">
            <select className="form-select me-2" onChange={(e) => setCountry(e.target.value)}>
              {['in', 'us', 'gb', 'au', 'ca'].map(country => (
                <option value={country} key={country}>{country.toUpperCase()}</option>
              ))}
            </select>
            <button type="button" className="btn btn-outline-light" onClick={() => setIsDarkMode(!isDarkMode)}>
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
