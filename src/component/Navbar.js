import React from 'react'
import PropTypes from 'prop-types';
import{Link} from "react-router-dom";
export default function Navbar(props) {
  return (
   <><nav className={`navbar bg-${props.clr} border-bottom border-body`} data-bs-theme={`${props.clr}`}>
 <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About us</ Link>
        </li>
         <label className="form-check-label" htmlFor="switchCheckDefault">
            {props.text1}
          </label>
      </ul>
      
    </div>
  </div>
</nav> 
</nav>

   </>
  )
}
