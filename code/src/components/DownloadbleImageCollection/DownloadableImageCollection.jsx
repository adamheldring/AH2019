import React from 'react'
import Img from 'gatsby-image'
import './DownloadableImageCollection.sass'

const DownloadbleImageCollection = ({ collection }) => (
  <div className="ah-downloadable-image-collection-wrapper">
    {collection.map(collectionItem => (
      <DownloadableImageDisplayCard item={collectionItem} />
    ))}
  </div>
)

export default DownloadbleImageCollection

const DownloadableImageDisplayCard = ({ item }) => (
  <div className="ah-downloadable-image-card">
    <Img fluid={item.displayInfo.childImageSharp.fluid} />
    <div className="ah-downloadable-image-card-info-wrapper">
      {item.fileInfo.name.toUpperCase()}
      <div>
        <a href={item.fileInfo.file}>VIEW</a>
        <span> | </span>
        <a href={item.fileInfo.file} download>
          DOWNLOAD
        </a>
      </div>
    </div>
  </div>
)
