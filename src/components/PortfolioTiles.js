import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import classNames from 'classnames'

export const PortfolioTiles = (props) => {
  const data = useStaticQuery(graphql`
    query {
      allPortfolioTilesJson {
        nodes {
          title
          image {
            childImageSharp {
              fluid(maxWidth: 460, quality: 65) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          description
          link
          hideTag
          completionDate
        }
      }
    }
  `)

  return (
    <div className='row row-eq-height'>
      {data.allPortfolioTilesJson.nodes.map(tile => (
        <div className={classNames('col-md-6 className', {
          'd-none': props.activePortfolio === tile.hideTag
        })}>
          <div className='mb-5'>
            <div className='work--img-container'>
              <Img fluid={tile.image.childImageSharp.fluid} />
            </div>
            <div className='work--text-container'>
              <h3 className='text-uppercase'>{tile.title}</h3>
              <p className='mb-3'>{tile.description}</p>
              {tile.completionDate &&
                <p className='mb-5'><span className='font-weight-bold'>Completion Date: </span>{tile.completionDate}</p>
              }
              <a href={tile.link} target='_blank'>
                <button className='btn w-100 text-uppercase'>View Project</button>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
