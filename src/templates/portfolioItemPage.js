import React from 'react'
import { graphql } from 'gatsby'

import Navigation from '../components/Navigation.js'
import Seo from "../components/Seo"
import Footer from '../components/Footer.js'
import '../scss/main.scss'
import Img from "gatsby-image"

export default ({ data }) => {
  console.log('---data')
  return (
    <React.Fragment>
      <Seo title={data.markdownRemark.frontmatter.title} />
      <Navigation />
      <section className='section section--overview'>
        <div className='container'>
          {data.markdownRemark.frontmatter.bannerImg &&
            <div className='row text-center'>
              <div className='col-md-12'>
                <Img className='img-fluid mb-5' fluid={data.markdownRemark.frontmatter.bannerImg.childImageSharp.fluid} />
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
            {data.markdownRemark.frontmatter.thumbnails.map((thumbnail, index) => (
              <div key={`screenshot-${index}`} className='col-md-3 col-sm-6'>
                <a data-toggle='modal' data-target={`#item${index}`}>
                  <img className='img-fluid' src={thumbnail} />
                </a>
              </div>
            ))}
          </div>
        </div>

        {data.markdownRemark.frontmatter.screenshots.map((screenshot, index) => (
          <div key={`modal-${index}`} id={`item${index}`} className="modal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">{data.markdownRemark.frontmatter.title}</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <img width='100%' src={screenshot} />
                </div>
              </div>
            </div>
          </div>
        ))}
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
        bannerImg {
          childImageSharp {
            fluid(maxWidth: 1024, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        description
        completionDate
        createdUsing
        whatIDid
        trailer
        thumbnails
        screenshots
      }
    }
  }
`
