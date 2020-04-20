import React, { Component } from 'react'
import { Link } from 'gatsby'
import { connect } from 'react-redux'

import { reducer1 } from '../state/actions/'
import Footer from '../components/Footer.js'
import Navigation from '../components/Navigation.js'
import Seo from "../components/Seo"
import Map from '../components/Map'
import '../scss/main.scss'

// images
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
                  <h1 className='mb-3'>MATT PILCHER</h1>
                </div>
                <div className='animated fadeIn banner--frontend'>
                  <hr className='hr-dashed--light mb-3'/>
                  <h3 className='mb-3'>Front End Developer &amp; Designer</h3>
                  <hr className='hr-dashed--light mb-5'/>
                </div>
                <a className='animated fadeIn' href='/portfolio.html'>
                  <button className='btn inverted'>
                    VIEW MY WORK
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className='section section--about' id='about'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12'>
                <div className='wow fadeIn' data-wow-duration='1s'>
                  <h3 className='mb-3'>I’m Matt a <span className='color--primary'>Front End Developer </span>&amp; <span className='color--primary'>Designer </span>based in Hampshire, UK</h3>
                  <hr className='hr-dashed--dark mb-3'/>
                </div>
                <p className='wow fadeIn' data-wow-duration='1s'>
                  I have been programming for over 10 years and have 5 years commercial experience working within the web industry along side digital agencies and software companies. I am very passionate about web development and enjoy creating cleanly written, responsive websites.
                </p>
                <p className='wow fadeIn' data-wow-duration='1s'>
                  I also have an interest in game development and have released 2 games onto the app store. I am always open to new opportunities including freelance work so please feel free to contact me if you are in need of a front end developer.
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
                  <h2 className='mb-3'>TECHNICAL SKILLS</h2>
                  <hr className='hr-dashed--light mb-3'/>
                </div>
                <p className='mb-5 wow fadeIn' data-wow-duration='1s'>
                  My main skills are listed below, I use Javascript, HTML &amp; Sass / CSS on a daily basis. The framework will depend on my current project, While programming I like to follow best practises and keep code as clean as possible.
                </p>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-8'>
                <div className='wow fadeIn' data-wow-duration='1s'>
                  <h3 className='mb-2 color--primary'>
                    MAIN SKILLS &amp; TOOLS
                  </h3>
                  <hr className='hr-dashed--light-full mb-5'/>
                </div>
              </div>
              <div className='col-md-4 mobile--hide'>
                <div className='wow fadeIn' data-wow-duration='1s'>
                  <h3 className='mb-2 color--primary'>
                    OTHER SKILLS
                  </h3>
                  <hr className='hr-dashed--light-full mb-5'/>
                </div>
              </div>
            </div>
            <div className='row mb-4 wow fadeIn' data-wow-duration='1s'>
              <div className='col-md-4'>
                <ul>
                  <li><span>Javascript, ES6 &amp; JSX</span></li>
                  <li><span>React &amp; Redux</span></li>
                  <li><span>AngularJS &amp; jQuery</span></li>
                  <li><span>Node &amp; Git</span></li>
                  <li><span>Webpack, Gulp &amp; Bower</span></li>
                </ul>
              </div>
              <div className='col-md-4'>
                <ul>
                  <li><span>HTML5 &amp; Jade</span></li>
                  <li><span>CSS3, Sass &amp; Bootstrap</span></li>
                  <li><span>Atom &amp; Sublime 3</span></li>
                  <li><span>Photoshop &amp; Illustator</span></li>
                  <li><span>Sketch</span></li>
                </ul>
              </div>
              <div className='col-md-4'>
                <ul>
                  <li><span>Wordpress</span></li>
                  <li><span>PHP &amp; MySQL</span></li>
                  <li><span>Flash &amp; Actionscript</span></li>
                  <li><span>C# &amp; Unity 3D</span></li>
                  <li><span>MongoDB </span></li>
                </ul>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-12 text-center wow fadeIn' data-wow-duration='1s'>
                <hr className='hr-dashed--light-full mb-5'/>
                <p className='mb-5'>Please view my CV to see a <span className='color--primary'>full list </span>of my technial skills.</p><a href='assets/mattpilcher_cv.pdf' target='_blank'>
                  <button className='btn inverted'>VIEW MY CV</button></a>
              </div>
            </div>
          </div>
        </section>
        <section className='section section--latest'>
          <div className='container'>
            <div className='row no-gutters text-center'>
              <div className='col-md-12'>
                <div className='wow fadeIn' data-wow-duration='1s'>
                  <h2 className='mb-3'>
                    LATEST PROJECTS
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
              <div className='col-md-4'><a href='/sites/home-renovations/' target='_blank'>
                  <div className='work--grid' style={{ backgroundImage: 'url(' + HomeRenovations + ')'}}>
                    <div className='work--overlay'></div>
                    <div className='work--container'>
                      <h4>Home Renovations</h4>
                      <img src={HomeRenovationsScreen} alt='Home Renovations'/>
                    </div>
                  </div></a></div>
              <div className='col-md-4'><a href='/sites/thevegbox/' target='_blank'>
                  <div className='work--grid' style={{ backgroundImage: 'url(' + TheVegBox + ')'}}>
                    <div className='work--overlay'></div>
                    <div className='work--container'>
                      <h4>The Veg Box</h4>
                      <img src={TheVegBoxScreen} alt='The Veg Box' />
                    </div>
                  </div></a></div>
            </div>
            <div className='row no-gutters text-center'>
              <div className='col-md-12'><a href='/portfolio.html'>
                  <button className='btn inverted color--dark-blue'>VIEW MY WORK</button></a></div>
            </div>
          </div>
        </section>
        <section className='section section--contact' id='contact'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6'>
                <div className='wow fadeIn' data-wow-duration='1s' style={{zIndex: '3'}}>
                  <h2 className='mb-2'>CONTACT</h2>
                  <hr className='hr--primary hr--left mb-2'/>
                </div>
                <div className='wow fadeIn' data-wow-duration='1s' style={{zIndex: '3'}}>
                  <p className='mb-4'>Please feel free to contact me through the details below or via the form, I am avaliable for freelance and contract work.</p>
                </div>
                <div className='wow fadeIn' data-wow-duration='1s' style={{zIndex: '3'}}>
                  <h4 className='mb-1'>T: <span>+44(0)7954 588390</span></h4>
                  <h4 className='mb-4'>E: <span>mattpilcher87@gmail.com</span></h4>
                </div>
                <div className='mb-4 wow fadeIn' data-wow-duration='1s' style={{zIndex: '3'}}><a className='social-link' href='https://github.com/howlomogo' target='_blank'>
                    <div className='ion ion-social-github'></div></a><a className='social-link' href='https://www.linkedin.com/in/matthew-pilcher-7350894a/' target='_blank'>
                    <div className='ion ion-social-linkedin'></div></a></div>
              </div>
              <div className='col-md-6'>
                <form className='wow fadeIn' data-wow-duration='1s' style={{zIndex: '3'}} method='post' action='sendmail.php'>
                  <input className='mb-2' id='Name' placeholder='Name' type='text' name='Name'/>
                  <input className='mb-2' id='Email' placeholder='Email' type='text' name='Email'/>
                  <textarea className='mb-2' id='Message' placeholder='Message' name='Message' rows='6'></textarea>
                  <button className='btn w-100' type='submit' name='submit'>SEND MESSAGE</button>
                </form>
              </div>
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
