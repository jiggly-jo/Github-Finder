import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({icon, title}) =>{
    return (
      <nav className='navbar bg-primary'>
        <h1>
          <i className={icon} /> {title}
        </h1>
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