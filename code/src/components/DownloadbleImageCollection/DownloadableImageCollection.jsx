import React from 'react'
import Img from 'gatsby-image'
import './DownloadableImageCollection.sass'

const DownloadbleImageCollection = ({ collection }) => {
  console.log('collection: ', collection)
  return (
    <div className="ah-downloadable-image-collection-wrapper">
      {collection &&
        Object.getOwnPropertyNames(collection).map(imageName => (
          <DownloadableImageDisplayCard image={collection[imageName]} />
        ))}
    </div>
  )
}

export default DownloadbleImageCollection

const DownloadableImageDisplayCard = ({ image }) => (
  <div className="ah-downloadable-image-card">
    <Img fluid={image.childImageSharp.fluid} />
  </div>
)
