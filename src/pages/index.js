import React, { Component } from 'react'
import { Link } from 'gatsby'
import { connect } from 'react-redux'

import { reducer1 } from '../state/actions/'
import Footer from '../components/Footer.js'
import Navigation from '../components/Navigation.js'
import Seo from "../components/Seo"
import Map from '../components/Map'
import '../scss/main.scss'

// Not going to create a seperate component for every image... Stupid that this has to be done like this
import BannerPhoto from '../images/banner-photo.png'
import CottageGetAways from '../images/latest/cottage-getaways.jpg'
import CottageGetAwaysScreen from '../images/latest/cottage-getaways-screen.png'
import HomeRenovations from '../images/latest/home-renovations.jpg'
import HomeRenovationsScreen from '../images/latest/home-renovations-screen.png'
import TheVegBox from '../images/latest/the-veg-box.jpg'
import TheVegBoxScreen from '../images/latest/the-veg-box-screen.png'

class About extends Component {
  render() {
    return (
      <React.Fragment>
        <Seo title='About' />
        <Navigation />

        <section className='section section--banner'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12'>
                <div className='animated fadeIn'>
                  <img src={BannerPhoto} alt='Banner Photo' className='mb-4' />
                  <h1 className='mb-3 text-uppercase'>Matt Pilcher</h1>
                </div>
                <div className='animated fadeIn banner--frontend'>
                  <hr className='hr-dashed--light mb-3'/>
                  <h3 className='mb-3'>Front End Developer &amp; Designer</h3>
                  <hr className='hr-dashed--light mb-5' />
                </div>
                <Link className='animated fadeIn' to='/portfolio'>
                  <button className='btn inverted text-uppercase'>
                    View My Work
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className='section section--about' id='about'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12'>
                <div className='wow fadeIn' data-wow-duration='1s'>
                  <h3 className='mb-3'>Hi, I’m Matt a <span className='color--primary'>Front End Developer </span>&amp; <span className='color--primary'>Designer </span>based in Hampshire, UK</h3>
                  <hr className='hr-dashed--dark mb-3' />
                </div>
                <p className='wow fadeIn' data-wow-duration='1s'>
                  I have 10 years experience working within the web and design industry along side digital agencies and software companies, with knowledge gained from working on a wide range of projects.
                  I am very passionate about web development and enjoy creating cleanly written responsive websites and user interfaces.
                </p>
                <p className='wow fadeIn' data-wow-duration='1s'>
                  I'm currently looking for my next developer role, please feel free to <a href='../mattpilcher_cv.pdf' target='_blank'>view my CV</a> or contact me if you have a position you feel I may be suited for.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className='section section--skills' id='skills'>
          <div className='container'>
            <div className='row text-center'>
              <div className='col-md-12'>
                <div className='wow fadeIn' data-wow-duration='1s'>
                  <h2 className='mb-3 text-uppercase'>Technical Skills</h2>
                  <hr className='hr-dashed--light mb-3'/>
                </div>
                <p className='wow fadeIn' data-wow-duration='1s'>
                  My main skills are listed below and I use Javascript, HTML &amp; CSS on a daily basis.
                  The framework will depend on my current project and I particulary enjoy working with React &amp; Redux.
                  I have experience working with a few backend technologies as listed below, I am however predominantly looking for a front end focused position.
                </p>

                <p className='mb-5 wow fadeIn' data-wow-duration='1s'>
                  While programming I like to follow best practises and also enjoy keeping upto date with and learning new technologies and frameworks.
                </p>
              </div>
            </div>

            <div className='row'>
              <div className='col-md-8'>
                <div className='wow fadeIn' data-wow-duration='1s'>
                  <h3 className='mb-2 color--primary text-uppercase'>
                    Main Skills &amp; Tools
                  </h3>
                  <hr className='hr-dashed--light-full mb-5'/>
                </div>
              </div>
              <div className='col-md-4 mobile--hide'>
                <div className='wow fadeIn' data-wow-duration='1s'>
                  <h3 className='mb-2 color--primary text-uppercase'>
                    Other Skills
                  </h3>
                  <hr className='hr-dashed--light-full mb-5'/>
                </div>
              </div>
            </div>
            <div className='row mb-4 wow fadeIn' data-wow-duration='1s'>
              <div className='col-md-4'>
                <ul>
                  <li><span>Javascript</span></li>
                  <li><span>React &amp; Redux</span></li>
                  <li><span>jQuery</span></li>
                  <li><span>Webpack</span></li>
                  <li><span>NPM &amp; Basic Node</span></li>
                  <li><span>Git &amp; Bitbucket</span></li>
                  <li><span>GraphQL / Apollo</span></li>
                  <li><span>Grunt, Gulp & Bower</span></li>
                  <li><span>ExpressJS</span></li>
                </ul>
              </div>
              <div className='col-md-4'>
                <ul>
                  <li><span>HTML &amp; Jade</span></li>
                  <li><span>CSS, LESS &amp; SASS</span></li>
                  <li><span>Bootstrap</span></li>
                  <li><span>AWS (Mainly S3)</span></li>
                  <li><span>Jira</span></li>
                  <li><span>Photoshop</span></li>
                  <li><span>Illustrator</span></li>
                  <li><span>Sketch</span></li>
                </ul>
              </div>
              <div className='col-md-4'>
                <ul>
                  <li><span>GatsbyJS</span></li>
                  <li><span>AngularJS V1</span></li>
                  <li><span>Mocha, Chai &amp; Sinon</span></li>
                  <li><span>TravisCI &amp; CircleCI</span></li>
                  <li><span>Flash &amp; Actionscript</span></li>
                  <li><span>PHP &amp; SQL</span></li>
                  <li><span>Wordpress</span></li>
                  <li><span>Unity (with C#)</span></li>
                  <li><span>MongoDB</span></li>
                </ul>
              </div>
            </div>



            <div className='row'>
              <div className='col-md-12 text-center wow fadeIn' data-wow-duration='1s'>
                <hr className='hr-dashed--light-full mb-5'/>
                {/* <p className='mb-5'>Please view my CV to see my previous experience.</p> */}
                <a href='../mattpilcher_cv.pdf' target='_blank'>
                  <button className='btn inverted'>VIEW MY CV</button>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className='section section--latest'>
          <div className='container'>
            <div className='row no-gutters text-center'>
              <div className='col-md-12'>
                <div className='wow fadeIn' data-wow-duration='1s'>
                  <h2 className='mb-3 text-uppercase'>
                    Latest Projects
                  </h2>
                  <hr className='hr-dashed--dark mb-6'/>
                </div>
              </div>
            </div>
          </div>
          <div className='container-fluid px-0 wow fadeIn' data-wow-duration='1s'>
            <div className='row no-gutters mb-6'>
              <div className='col-md-4'>
                <a href='/sites/cottage-getaways/' target='_blank'>
                  <div className='work--grid' style={{ backgroundImage: 'url(' + CottageGetAways + ')'}}>
                    <div className='work--overlay'></div>
                    <div className='work--container'>
                      <h4>
                        Cottage Getaways
                      </h4>
                      <img src={CottageGetAwaysScreen} alt='Cottage Get Aways'/>
                    </div>
                  </div>
                </a>
              </div>
              <div className='col-md-4'>
                <a href='/sites/renovation/' target='_blank'>
                  <div className='work--grid' style={{ backgroundImage: 'url(' + HomeRenovations + ')'}}>
                    <div className='work--overlay' />
                    <div className='work--container'>
                      <h4>Home Renovations</h4>
                      <img src={HomeRenovationsScreen} alt='Home Renovations' />
                    </div>
                  </div>
                </a>
              </div>
              <div className='col-md-4'>
                <a href='/sites/the-veg-box/' target='_blank'>
                  <div className='work--grid' style={{ backgroundImage: 'url(' + TheVegBox + ')'}}>
                    <div className='work--overlay' />
                    <div className='work--container'>
                      <h4>The Veg Box</h4>
                      <img src={TheVegBoxScreen} alt='The Veg Box' />
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className='row no-gutters text-center'>
              <div className='col-md-12'>
                <a href='/portfolio'>
                  <button className='btn inverted color--dark-blue text-uppercase'>
                    View My Work
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className='section section--contact' id='contact'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6'>
                <div className='wow fadeIn' data-wow-duration='1s' style={{zIndex: '3'}}>
                  <h2 className='mb-2 text-uppercase'>Contact</h2>
                  <hr className='hr--primary hr--left mb-2' />
                </div>
                {/*
                  <div className='wow fadeIn' data-wow-duration='1s' style={{zIndex: '3'}}>
                    <p className='mb-4'>Please feel free to contact me.</p>
                  </div>
                */}
                <div className='wow fadeIn' data-wow-duration='1s' style={{zIndex: '3'}}>
                  <h4 className='mb-1'>T: <span>+44(0)7954 588390</span></h4>
                  <h4 className='mb-4'>E: <span>mattpilcher87@gmail.com</span></h4>
                </div>
                <div className='mb-4 wow fadeIn' data-wow-duration='1s' style={{zIndex: '3'}}>
                  <a className='social-link' href='https://github.com/howlomogo' target='_blank'>
                    <div className='ion ion-social-github' />
                  </a>
                  <a className='social-link' href='https://www.linkedin.com/in/matthew-pilcher-7350894a/' target='_blank'>
                    <div className='ion ion-social-linkedin' />
                  </a>
                </div>
              </div>
              {/*
                <div className='col-md-6'>
                  <form className='wow fadeIn' data-wow-duration='1s' style={{zIndex: '3'}} method='post' action='sendmail.php'>
                    <input className='mb-2' id='Name' placeholder='Name' type='text' name='Name' />
                    <input className='mb-2' id='Email' placeholder='Email' type='text' name='Email' />
                    <textarea className='mb-2' id='Message' placeholder='Message' name='Message' rows='6' />
                    <button className='btn w-100 text-uppercase' type='submit' name='submit'>Send Message</button>
                  </form>
                </div>
              */}
            </div>
          </div>
        </section>
        <Map />

        <Footer />
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

export default connect(mapStateToProps, mapDispatchToProps)(About)
