import React from 'react'
import { graphql } from 'gatsby'

import Navigation from '../components/Navigation.js'
import Seo from "../components/Seo"
import Footer from '../components/Footer.js'

export default ({ data }) => {
  return (
    <React.Fragment>
      <Seo title={data.markdownRemark.frontmatter.title} />
      <Navigation />
      <section className='section section--overview'>
        <div className='container'>
          {data.markdownRemark.frontmatter.bannerImg &&
            <div className='row text-center'>
              <div className='col-md-12'>
                <img className='img-fluid mb-5' src={data.markdownRemark.frontmatter.bannerImg} />
              </div>
            </div>
          }
          <div className='row text-center'>
            <div className='col-md-12'>
              <h2 className='mb-2 text-uppercase'>
                {data.markdownRemark.frontmatter.bannerImg ? (
                  <span>About</span>
                ) : (
                  <span>{data.markdownRemark.frontmatter.title}</span>
                )}
              </h2>
              <hr className='hr-dashed--dark mb-4' />
            </div>
          </div>
          <div className='row mb-6'>
            <div className='col-md-6'>
              <h3 className='mb-2'>Description</h3>
              <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.frontmatter.description }} />
            </div>
            <div className='col-md-6'>
              <h3 className='mb-2'>Created Using</h3>
              <p className='mb-4'>{data.markdownRemark.frontmatter.createdUsing}</p>
              <h3 className='mb-2'>What I Did</h3>
              <ul className='mb-4'>
                {data.markdownRemark.frontmatter.whatIDid.map((task, index) => (
                  <li key={`task-${index}`}><span>{task}</span></li>
                ))}
              </ul>
              <h3 className='mb-2'>Completion Date</h3>
              <p>{data.markdownRemark.frontmatter.completionDate}</p>
            </div>
          </div>
          {data.markdownRemark.frontmatter.trailer &&
            <React.Fragment>
              <div className='row text-center'>
                <div className='col-md-12'>
                  <h2 className='mb-2 text-uppercase'>Trailer</h2>
                  <hr className='hr-dashed--dark mb-4' />
                </div>
              </div>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='embed-responsive embed-responsive-16by9 mb-6'>
                    <iframe className='embed-responsive-item' src={data.markdownRemark.frontmatter.trailer} allowfullscreen='allowfullscreen'></iframe>
                  </div>
                </div>
              </div>
            </React.Fragment>
          }

          <div className='row text-center'>
            <div className='col-md-12'>
              <h2 className='mb-2 text-uppercase'>Screenshots</h2>
              <hr className='hr-dashed--dark mb-4' />
            </div>
          </div>
          <div className='row screenshots--container mb-3 text-center'>
            {data.markdownRemark.frontmatter.screenshots.map((screenshot, index) => (
              <div key={`screenshot-${index}`} className='col-md-3 col-sm-6'>
                <a data-toggle='modal' data-target={`#item${index}`}>
                  <img className='img-fluid' src={screenshot} />
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className='modals'>
          {data.markdownRemark.frontmatter.screenshots.map((screenshot, index) => (
            <div key={`modal-${index}`}className='modal fade' id={`item${index}`}>
              <div className='modal-dialog'>
                <div className='modal-content'>
                  <div className='modal-header'>
                    <button className='close' type='button' data-dismiss='modal'>
                      <span>×</span>
                    </button>
                    <h4 className='modal-title'>Oscars Revenge</h4>
                  </div>
                  <div className='modal-body'>
                    <img width='100%;' src={screenshot} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </React.Fragment>
  )
}

// Theres also info on dynamically linking to the slugs but we don't need that for now.
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug }}) {
      html
      frontmatter {
        title
        bannerImg
        description
        completionDate
        createdUsing
        whatIDid
        trailer
        screenshots
      }
    }
  }
`
