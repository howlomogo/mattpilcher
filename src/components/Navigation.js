import React, { Component } from 'react'
import { Link } from 'gatsby'
import { connect } from 'react-redux'

import { reducer1 } from '../state/actions/'

class Navigation extends Component {
  render() {
    return (
      <div className='navbar--container-dark'>
        <div className='container'>
          <nav className='navbar navbar-toggleable-md'>
            <button className='navbar-toggler navbar-toggler-right'
            type='button'
            data-toggle='collapse'
            data-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'>
              <span className='ion ion-navicon' />
            </button>
            <a className='navbar-brand' href='../index.html'>
              <img src='../assets/logo.png'/>
            </a>
            <div className='collapse navbar-collapse' id='navbarSupportedContent'>
              <ul className='navbar-nav ml-auto'>
                <li className='nav-item active'>
                  <a className='nav-link' href='../index.html#about'>
                    ABOUT
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='../portfolio.html'>
                    PORTFOLIO
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='../index.html#contact'>
                    CONTACT
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
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
