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
                <p>&copy; {new Date().getFullYear()}, Matt Pilcher. All Rights Reserved</p>
              </div>
              <div className='col-md-3' />
            </div>
          </div>
        </section>
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
