import React, { Component } from 'react';
import PropTypes from 'prop-types'

export class Navbar extends Component {
//these default props are if you want your component to have defaults for the props used in case none are passed in.
  static defaultProps ={
    title:'Github Finder',
    icon: 'fab fa-github'
  }

  //this is for typechecking since we are not using typescript
  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  }
  render() {
    return (
      <nav className='navbar bg-primary'>
        <h1>
          <i className={this.props.icon} /> {this.props.title}
        </h1>
      </nav>
    )
  }
}

export default Navbar