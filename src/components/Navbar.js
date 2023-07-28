import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props){
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">{props.Home}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">{props.About}</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}
Navbar.propTypes ={title:PropTypes.string.isRequired,
                   About:PropTypes.string
                }
//If default prpos are not set and isrequired is not given then error occurs
  
Navbar.defaultProps={
    title:"Set title here" ,
    About:"About text here" 
};