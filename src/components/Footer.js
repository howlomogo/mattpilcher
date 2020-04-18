import React, { Component } from 'react'
import { Link } from 'gatsby'
import { connect } from 'react-redux'

import { reducer1 } from '../state/actions/'

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <section className='footer'>
          <div className='container'>
            <div className='row align-items-center'>
              <div className='col-md-3'>
                <a href='https://github.com/howlomogo' target='_blank'>
                  <div className='ion ion-social-github' />
                </a>

                <a className='social-link' href='https://www.linkedin.com/in/matthew-pilcher-7350894a/' target='_blank'>
                  <div className='ion ion-social-linkedin' />
                </a>
              </div>
              <div className='col-md-6'>
                <p>&copy; 2017, Matt Pilcher. All Rights Reserved</p>
              </div>
              <div className='col-md-3'>
                <a className='footer--logo' href='../index.html'>
                  <img src='../assets/logo.png'/>
                </a>
              </div>
            </div>
          </div>
        </section>
        <script src='//cdnjs.cloudflare.com/ajax/libs/tether/1.4.4/js/tether.min.js'></script>
        <script
          src='https://code.jquery.com/jquery-3.5.0.min.js'
          integrity='sha256-xNzN2a4ltkB44Mc/Jz3pT4iU1cmeR0FkXs4pru/JxaQ='
          crossOrigin='anonymous'></script>
        <script src='https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js'></script>


        <script src='../scripts.js'></script>
        <script src='https://maps.googleapis.com/maps/api/js?key=AIzaSyBK5bt7uP_vjh0yir3mJ2TX5tjEi1JDnAw&amp;callback=initMap' async='async' defer='defer'></script>





      </React.Fragment>
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

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
