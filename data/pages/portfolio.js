import React, { Component } from 'react'
import { Link } from 'gatsby'
import { connect } from 'react-redux'

import { reducer1 } from '../state/actions/'
import Footer from '../components/Footer.js'
import Navigation from '../components/Navigation.js'
import Seo from '../components/Seo'
import '../scss/main.scss'
import classNames from 'classnames'
import PortfolioTile from '../components/PortfolioTile'

// images
import CottageGetAwaysMockup from '../images/portfolio/cottage-getaways-mockup.png'
import HomeRenovationsMockup from '../images/portfolio/home-renovations-mockup.png'
import TheVegBoxMockup from '../images/portfolio/the-veg-box-mockup.png'
import KingMakersMockUp from '../images/portfolio/kingmakers-mockup.png'
import ArkoMockup from '../images/portfolio/arko-mockup.png'
import FitnessGymMockUp from '../images/portfolio/fitness-gym-mockup.png'
import TheBeachHutMockup from '../images/portfolio/the-beach-hut-mockup.png'
import DvdFlixMockUp from '../images/portfolio/dvd-flix-mockup.png'
import OscarsRevengeMockUp from '../images/portfolio/oscars-revenge-mockup.png'
import NightmareKidMockUp from '../images/portfolio/nightmare-kid-mockup.png'
import ZybyrdsMockUp from '../images/portfolio/zybyrds-mockup.png'

import JSONData from "../content/portfolioTiles.json"


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
                <h2 className='mb-3'>
                  PORTFOLIO
                </h2>
                <hr className='hr-dashed--dark mb-3' />
                <p className='mb-3'>Below is a selection of my work, my commerical work is not shown, however I have completed a number of personal projects which I am able to list here.</p>
                <hr className='hr-dashed--dark mb-3' />

                <ul>
                  {JSONData.content.map((data, index) => {
                    return <li key={`content_item_${index}`}>{data.item}</li>
                  })}
                </ul>

                <div className='portfolio--nav'>
                  <button className='btn filter-button mb-1 active' onClick={() => this.props.onTogglePortfolioFilter('all')}>ALL</button>
                  <button className='btn filter-button mb-1' onClick={() => this.props.onTogglePortfolioFilter('web')}>WEB</button>
                  <button className='btn filter-button mb-1' onClick={() => this.props.onTogglePortfolioFilter('games')}>GAMES &amp; APPS</button>
                </div>
                <hr className='hr-dashed--dark mb-5 mt-2'/>
              </div>
            </div>
            <div className='row row-eq-height'>


              <PortfolioTile
                title='Cottage Getaways'
                description='Website created for a fictitious holiday cottage website with searchable cottages. Created using AngularJS 1.6, Pug, Sass, Javascript, JQuery &amp; Bootstrap 4.'
                completionDate='June 2017'
                hideTag='games'
                image={CottageGetAwaysMockup}
                link='./sites/cottage-getaways'
              />

              <div className='col-md-6 web'>
                <div className='mb-5'>
                  <div className='work--img-container'>
                    <img src={HomeRenovationsMockup} alt='Home Renovations' />
                  </div>
                  <div className='work--text-container'>
                    <h3>HOME RENOVATIONS</h3>
                    <p className='mb-3'>The homepage created for the fictitious company Home Renovation. Created using Pug, Sass, Javascript, JQuery &amp; Bootstrap 4.</p>
                    <p className='mb-5'><span className='font-weight-bold'>Completion Date: </span>May 2017</p>
                    <a href='./sites/home-renovations' target='_blank'>
                      <button className='btn w-100'>VIEW PROJECT</button>
                    </a>
                  </div>
                </div>
              </div>
              <div className='col-md-6 web'>
                <div className='mb-5'>
                  <div className='work--img-container'>
                    <img src={TheVegBoxMockup} alt='The Veg Box' />
                  </div>
                  <div className='work--text-container'>
                    <h3>THE VEG BOX</h3>
                    <p className='mb-3'>The homepage created for the fictitious company The Veg Box. Created using Pug, Sass, Javascript, JQuery &amp; Bootstrap 4.</p>
                    <p className='mb-5'><span className='font-weight-bold'>Completion Date: </span>May 2017</p>
                    <a href='./sites/thevegbox' target='_blank'>
                      <button className='btn w-100'>VIEW PROJECT</button>
                    </a>
                  </div>
                </div>
              </div>
              <div className='col-md-6 web'>
                <div className='mb-5'>
                  <div className='work--img-container'>
                    <img src={KingMakersMockUp} alt='Kingmakers' />
                  </div>
                  <div className='work--text-container'>
                    <h3>KINGMAKERS WINERY</h3>
                    <p className='mb-3'>The homepage created for the fictitious company Kingmakers Winery. Created using Pug, Sass, Javascript, JQuery &amp; Inuit css.</p>
                    <p className='mb-5'><span className='font-weight-bold'>Completion Date: </span>May 2017</p>
                    <a href='./sites/kingmakers' target='_blank'>
                      <button className='btn w-100'>VIEW PROJECT</button>
                    </a>
                  </div>
                </div>
              </div>
              <div className='col-md-6 web'>
                <div className='mb-5'>
                  <div className='work--img-container'>
                    <img src={ArkoMockup} alt='Arko' />
                  </div>
                  <div className='work--text-container'>
                    <h3>ARKO</h3>
                    <p className='mb-3'>The homepage created for the fictitious company Arko. Created using Pug, Sass, Javascript, Angular, JQuery &amp; Inuit css.</p>
                    <p className='mb-5'><span className='font-weight-bold'>Completion Date: </span>Mar 2017</p>
                    <a href='./sites/arko' target='_blank'>
                      <button className='btn w-100'>VIEW PROJECT</button>
                    </a>
                  </div>
                </div>
              </div>
              <div className='col-md-6 web'>
                <div className='mb-5'>
                  <div className='work--img-container'>
                    <img src={FitnessGymMockUp} alt='Fitness Gym' />
                  </div>
                  <div className='work--text-container'>
                    <h3>FITNESS GYM</h3>
                    <p className='mb-3'>A website created for a fictitious gym. Created using HTML, Sass, Javascript, jQuery &amp; Bootstrap.</p>
                    <p className='mb-5'><span className='font-weight-bold'>Completion Date: </span>Apr 2015</p>
                    <a href='./sites/arko' target='_blank'>
                      <button className='btn w-100'>VIEW PROJECT</button>
                    </a>
                  </div>
                </div>
              </div>
              <div className='col-md-6 web'>
                <div className='mb-5'>
                  <div className='work--img-container'>
                    <img src={TheBeachHutMockup} alt='The Beach Hut' />
                  </div>
                  <div className='work--text-container'>
                    <h3>THE BEACH HUT</h3>
                    <p className='mb-3'>A one page website created for a fictitious restaurant. Created using HTML, CSS, Javascript, jQuery &amp; Bootstrap.</p>
                    <p className='mb-5'><span className='font-weight-bold'>Completion Date: </span>Mar 2015</p>
                    <a href='./sites/the-beach-hut' target='_blank'>
                      <button className='btn w-100'>VIEW PROJECT</button>
                    </a>
                  </div>
                </div>
              </div>
              <div className='col-md-6 web'>
                <div className='mb-5'>
                  <div className='work--img-container'>
                    <img src={DvdFlixMockUp} alt='Dvd Flix' />
                  </div>
                  <div className='work--text-container'>
                    <h3>DVD FLIX</h3>
                    <p className='mb-3'>A website created for a fictitious dvd store. Created using PHP, SQL, MySQL, HTML, CSS, Javascript &amp; Bootstrap.</p>
                    <p className='mb-5'><span className='font-weight-bold'>Completion Date: </span>Mar 2015</p>
                    <a href='./sites/dvd-flix' target='_blank'>
                      <button className='btn w-100'>VIEW PROJECT</button>
                    </a>
                  </div>
                </div>
              </div>
              <div className='col-md-6 games'>
                <div className='mb-5'>
                  <div className='work--img-container'>
                    <img src={OscarsRevengeMockUp} alt='Oscars Revenge' />
                  </div>
                  <div className='work--text-container'>
                    <h3>OSCARS REVENGE</h3>
                    <p className='mb-3'>Help Oscar travel through over 40 levels in this challenging platformer, avoiding deathly obstacles and dangerous enemies.</p>
                    <a href='/projects/oscarsrevenge.html'>
                      <button className='btn w-100'>VIEW PROJECT</button>
                    </a>
                  </div>
                </div>
              </div>
              <div className='col-md-6 games'>
                <div className='mb-5'>
                  <div className='work--img-container'>
                    <img src='assets/portfolio/nightmare-kid-mockup.png'/>
                    <img src={NightmareKidMockUp} alt='Nightmare Kid' />
                  </div>
                  <div className='work--text-container'>
                    <h3>NIGHTMARE KID</h3>
                    <p className='mb-3'>Nightmare Kid is a fast paced shooter where you use a mixture of upgrades and strategy to repel the ever increasing number of monsters and ghouls.</p>
                    <a href='/projects/nightmarekid.html'>
                      <button className='btn w-100'>VIEW PROJECT</button>
                    </a>
                  </div>
                </div>
              </div>
              <div className='col-md-6 games'>
                <div className='mb-5'>
                  <div className='work--img-container'>
                    <img src='../images/portfolio/zybyrds-mockup.png' alt='Zybyrds' />
                  </div>
                  <div className='work--text-container'>
                    <h3>ZYBYRDS</h3>
                    <p className='mb-3'>Zybyrds is a shooter game where you need to kill a certain amount of birds each wave in order to continue to the next level.</p>
                    <a href='/projects/zybyrds.html'>
                      <button className='btn w-100'>VIEW PROJECT</button>
                    </a>
                  </div>
                </div>
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
