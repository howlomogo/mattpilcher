import React, { Component } from 'react'
import { Link } from 'gatsby'
import { connect } from 'react-redux'
import classNames from 'classnames'

import { reducer1 } from '../state/actions/'

import CottageGetAwaysMockup from '../images/portfolio/cottage-getaways-mockup.png'

class PortfolioTile extends Component {
  render() {
    return (
      <div className={classNames('col-md-6 className', {
        'd-none': this.props.activePortfolio === this.props.hideTag
      })}>
        <div className='mb-5'>
          <div className='work--img-container'>
            <img src={this.props.image} alt={this.props.title} />
          </div>
          <div className='work--text-container'>
            <h3 className='text-uppercase'>{this.props.title}</h3>
            <p className='mb-3'>{this.props.description}</p>
            <p className='mb-5'><span className='font-weight-bold'>Completion Date: </span>{this.props.completionDate}</p>
            <a href={this.props.link} target='_blank'>
              <button className='btn w-100 text-uppercase'>View Project</button>
            </a>
          </div>
        </div>
      </div>
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
    activePortfolio: state.reducer1.activePortfolio
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioTile)
