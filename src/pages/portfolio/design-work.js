import React, { Component } from 'react'
import { Link } from 'gatsby'
import { connect } from 'react-redux'
import classNames from 'classnames'

import { reducer1 } from '../../state/actions/'

import Seo from '../../components/Seo'
import Navigation from '../../components/Navigation.js'
import Footer from '../../components/Footer.js'

import '../../scss/main.scss'
import HC1_thumb from '../../images/portfolio/design-work/hc-1-thumb.jpg'
import HC1 from '../../images/portfolio/design-work/mattpilcher-hardcloud-1.jpg'

import HC2_thumb from '../../images/portfolio/design-work/hc-2-thumb.jpg'
import HC2 from '../../images/portfolio/design-work/mattpilcher-hardcloud-2.jpg'

import UP1_thumb from '../../images/portfolio/design-work/uni-1-thumb.jpg'
import UP1 from '../../images/portfolio/design-work/mattpilcher-unipro-1.jpg'

import UP2_thumb from '../../images/portfolio/design-work/uni-2-thumb.jpg'
import UP2 from '../../images/portfolio/design-work/mattpilcher-unipro-2.jpg'

import UP3_thumb from '../../images/portfolio/design-work/uni-3-thumb.jpg'
import UP3 from '../../images/portfolio/design-work/mattpilcher-unipro-3.jpg'

import B1_thumb from '../../images/portfolio/design-work/blue-1-thumb.jpg'
import B1 from '../../images/portfolio/design-work/mattpilcher-blue-1.jpg'

import B2_thumb from '../../images/portfolio/design-work/blue-2-thumb.jpg'
import B2 from '../../images/portfolio/design-work/mattpilcher-blue-2.jpg'

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
                  Design Work
                </h2>
                <hr className='hr-dashed--dark mb-3' />
                <p className='mb-3'>Below is a very small selection of commercial design work I've done over the years while at Hardcloud, Blueprint &amp; Unipro.</p>
                <hr className='hr-dashed--dark mb-3' />
              </div>
            </div>
            <div className='row'>
              <div className='col-xs-12 col-sm-12'>
                <h4 className='mb-2 text-center'>Newsletters &amp; Website Graphics</h4>
                <hr className='hr-dashed--dark mb-3' />
              </div>
              <div className='col-sm-4'>
                <a href={UP2} target='_blank'>
                  <img className='img-fluid mb-4 design-thumb-link' src={UP2_thumb} alt='Logo'/>
                </a>
              </div>
              <div className='col-sm-4'>
                <a href={UP3} target='_blank'>
                  <img className='img-fluid mb-4 design-thumb-link' src={UP3_thumb} alt='Logo'/>
                </a>
              </div>
              <div className='col-sm-4'>
                <a href={UP1} target='_blank'>
                  <img className='img-fluid mb-4 design-thumb-link' src={UP1_thumb} alt='Logo'/>
                </a>
              </div>

              <div className='col-sm-4'>
                <a href={HC1} target='_blank'>
                  <img className='img-fluid mb-4 design-thumb-link' src={HC1_thumb} alt='Logo'/>
                </a>
              </div>
              <div className='col-sm-4'>
                <a href={HC2} target='_blank'>
                  <img className='img-fluid mb-4 design-thumb-link' src={HC2_thumb} alt='Logo'/>
                </a>
              </div>

              <div className='col-xs-12 col-sm-12'>
                <h4 className='mb-2 text-center'>Website Mockup</h4>
                <hr className='hr-dashed--dark mb-3' />
              </div>

              <div className='col-sm-4'>
                <a href={B2} target='_blank'>
                  <img className='img-fluid mb-4 design-thumb-link' src={B2_thumb} alt='Logo'/>
                </a>
              </div>

              <div className='col-sm-4'>
                <a href={B1} target='_blank'>
                  <img className='img-fluid mb-4 design-thumb-link' src={B1_thumb} alt='Logo'/>
                </a>
              </div>
            </div>
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
