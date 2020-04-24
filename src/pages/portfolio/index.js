import React, { Component } from 'react'
import { Link } from 'gatsby'
import { connect } from 'react-redux'
import classNames from 'classnames'

import { reducer1 } from '../../state/actions/'

import Seo from '../../components/Seo'
import Navigation from '../../components/Navigation.js'
import { PortfolioTiles } from "../../components/PortfolioTiles"
import Footer from '../../components/Footer.js'

import '../../scss/main.scss'


class Portfolio extends Component {
  render() {
    return (
      <React.Fragment>
        <Seo title='Portfolio' />
        <Navigation />
        <section className='section section--portfolio'>
          <div className='container'>
            <div className='row text-center'>
              <div className='col-md-12'>
                <h2 className='mb-3 text-uppercase'>
                  Portfolio
                </h2>
                <hr className='hr-dashed--dark mb-3' />
                <p className='mb-3'>Below is a selection of my work, my commerical work is not shown, however I have completed a number of personal projects which I am able to list here.</p>
                <hr className='hr-dashed--dark mb-3' />

                <div className='portfolio--nav'>
                  <button
                    className={classNames('btn filter-button mb-1 text-uppercase', {
                      'active': this.props.activePortfolio === 'all'
                    })}
                    onClick={() => this.props.onTogglePortfolioFilter('all')}>
                    All
                  </button>
                  <button
                    className={classNames('btn filter-button mb-1 text-uppercase', {
                      'active': this.props.activePortfolio === 'web'
                    })}
                    onClick={() => this.props.onTogglePortfolioFilter('web')}>
                    Web
                  </button>
                  <button
                    className={classNames('btn filter-button mb-1 text-uppercase', {
                      'active': this.props.activePortfolio === 'games'
                    })}
                    onClick={() => this.props.onTogglePortfolioFilter('games')}>
                    Games &amp; Apps
                  </button>
                </div>
                <hr className='hr-dashed--dark mb-5 mt-2'/>
              </div>
            </div>

            <PortfolioTiles
              activePortfolio={this.props.activePortfolio}
            />
          </div>
        </section>
        <Footer />
      </React.Fragment>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onToggleDarkMode: () => {
      return dispatch(reducer1.toggleDarkMode())
    },
    onTogglePortfolioFilter: (name) => {
      return dispatch(reducer1.togglePortfolioFilter(name))
    }
  }
}

function mapStateToProps(state) {
  return {
    isDarkMode: state.reducer1.isDarkMode,
    activePortfolio: state.reducer1.activePortfolio
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio)