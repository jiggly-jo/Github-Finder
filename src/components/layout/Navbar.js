import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({icon, title}) =>{
  // we use Link because we want the pages to keep its states
    return (
      <nav className='navbar bg-primary'>
        <h1>
          <i className={icon} /> {title}
        </h1>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </nav>
    )
}
//these default props are if you want your component to have defaults for the props used in case none are passed in.
//doing it like this is how you define proptypes for functional comoponents
Navbar.defaultProps ={
  title:'Github Finder',
  icon: 'fab fa-github'
}

//this is for typechecking since we are not using typescript
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}

export default Navbar;