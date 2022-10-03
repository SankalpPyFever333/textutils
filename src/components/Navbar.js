// you can write 'rfc' to import react.
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import TextForm from './TextForm';
export default function Navbar(props) {
      // props are properties only that a component have. It isa variable whose value I willl pass.
      // props are Read-only which means they work as a pure function. Pure function are those who do not change their arguments value. Impure function are those who perform operation on their agrumnets itself.
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/title">
            {props.title}
            {/* Here, we can pass title name wherever we write Navbar component. */}
          </Link>
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
                {/* <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>. 
                And we do the same for other component*/}
                {/* For Home, we use link-to. */}
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {props.abouttext}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/textform">
                  {props.TextForm}
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-primary" type="submit" placeholder='search'>
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
Navbar.propTypes = {title:PropTypes.string.isRequired}
// here, we are setting that the value which comes inside the 'title' props, it must be string.
Navbar.propTypes = {abouttext: PropTypes.string.isRequired}
// abouttext also be of string types.

// baiscally above two lines are object.

// you can write above two lines as below:
// Navbar.propTypes = {
//     title: PropTypes.string,
//     abouttext: PropTypes.string
//   }

// If you write Navbar.propTypes = {title:PropTypes.string.isRequired}
// Now this will you have to pass otherwise you will get error.



// You can set default props in case you had not passed values in the component.
Navbar.defaultProps = {
      title: "setTitle",
      abouttext: "AboutME",
      TextForm:"Enter Your TExt"
}
// So if you do not pass any values where you call Navbar component, these values gets passed.




