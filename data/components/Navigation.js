import React, { Component } from 'react'
import { Link } from 'gatsby'
import { connect } from 'react-redux'

import { reducer1 } from '../state/actions/'

import Logo from '../images/logo.png'

class Navigation extends Component {
  render() {
    return (
      // <nav class="navbar navbar-expand-lg navbar-light bg-light">
      //   <a class="navbar-brand" href="#">
      //     <img src={Logo} alt='Logo'/>
      //   </a>
      //   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      //     <span class="navbar-toggler-icon"></span>
      //   </button>
      //   <div class="collapse navbar-collapse" id="navbarNav">
      //     <ul class="navbar-nav">
      //       <li class="nav-item active">
      //         <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      //       </li>
      //       <li class="nav-item">
      //         <a class="nav-link" href="#">Features</a>
      //       </li>
      //       <li class="nav-item">
      //         <a class="nav-link" href="#">Pricing</a>
      //       </li>
      //       <li class="nav-item">
      //         <a class="nav-link disabled" href="#">Disabled</a>
      //       </li>
      //     </ul>
      //   </div>
      // </nav>


      
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
            <Link className='nav-link' to="/about/">
              <img src={Logo} alt='Logo'/>
            </Link>
            </a>
            <div className='collapse navbar-collapse' id='navbarSupportedContent'>
              <ul className='navbar-nav ml-auto'>
                <li className='nav-item active'>
                  <Link className='nav-link' to="/about/#about">ABOUT</Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to="/portfolio/">PORTFOLIO</Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to="/about/#contact">CONTACT</Link>
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
