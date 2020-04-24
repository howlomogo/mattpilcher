import React, { Component } from 'react'
import { Link } from 'gatsby'
import { connect } from 'react-redux'

import { reducer1 } from '../state/actions/'

import Logo from '../images/logo.png'

class Navigation extends Component {
  render() {
    return (
      <nav className='navbar navbar-expand-lg navbar--container-dark'>
        <div className='container'>
          <a className='navbar-brand' href='http://www.mattpilcher.co.uk'>
            <img src={Logo} alt='Logo'/>
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span className='ion ion-navicon' />
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item'>
                <Link className='nav-link text-uppercase' to='/#about'>About</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link text-uppercase' to='/portfolio'>Portfolio</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link text-uppercase' to='/#contact'>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onToggleDarkMode: () => {
      return dispatch(reducer1.toggleDarkMode())
    }
  }
}

function mapStateToProps(state) {
  return {
    isDarkMode: state.reducer1.isDarkMode
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)
