import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

const Header = () => {
  return (<>
      <header className="header_section bg-dark">
      <div className="container-fluid">
        <Nav className="navbar navbar-expand-lg custom_nav-container">
          <Link to="/" classNameName="navbar-brand">

          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
              <ul className="navbar-nav  ">
                <li className="nav-item active">
                  <Link to="/" className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item ">
                  <Link to="/why" className="nav-link"> Why us </Link>
                </li>
                <li className="nav-item">
                  <Link to="/trainers" className="nav-link" href="trainer.html"> trainers</Link>
                </li>
                <li className="nav-item">
                  <Link to="contact" className="nav-link" href="contact.html"> Contact Us</Link>
                </li>
              </ul>
              <div className="user_option">
                <form className="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0">
                  <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit"></button>
                </form>
              </div>
            </div>
          </div>
          </Nav>
      </div>
    </header>
    </>
  )
}

export default Header
