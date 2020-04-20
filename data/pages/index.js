import React, { Component } from "react"
import { Link } from "gatsby"
import { connect } from 'react-redux'

import Image from "../components/image"
import Seo from "../components/Seo"

import { reducer1 } from '../state/actions/'

class IndexPage extends Component {
  render() {
    return (
      <div>
        <Seo title="Home" />
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <button
        style={this.props.isDarkMode ? { background: 'black', color: 'white'} : null}
        onClick={() => this.props.onToggleDarkMode()}>
        Dark mode {this.props.isDarkMode ? 'on' : 'off'}
        </button>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
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

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage)
