import React, { Component } from "react"
import { Link } from "gatsby"
import { connect } from 'react-redux'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import { reducer1 } from '../state/actions/'

class IndexPage extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Home" />
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
        <Link to="/page-2/">Go to page 2</Link>
      </Layout>
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
