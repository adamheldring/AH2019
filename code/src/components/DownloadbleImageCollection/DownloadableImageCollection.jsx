import React, { Fragment, useState } from 'react'
import Img from 'gatsby-image'
import { FaPlus, FaMinus } from 'react-icons/fa'
import './DownloadableImageCollection.sass'

const DownloadbleImageCollection = ({ collection }) => (
  <div className="ah-downloadable-image-collection-wrapper">
    {collection.map((collectionItem, index) => (
      <DownloadableImageDisplayCard
        item={collectionItem}
        key={`${collectionItem.fileInfo.name}-${index}`}
      />
    ))}
  </div>
)

export default DownloadbleImageCollection

const DownloadableImageDisplayCard = ({ item }) => {
  const { highres, midres, lowres } = item.fileInfo.files
  const [imageIsHovered, setImageIsHovered] = useState(false)
  const [imageIsHighlighted, setImageIsHighlighted] = useState(false)
  return (
    <div className="ah-downloadable-image-card">
      <div className="ah-downloadable-image-wrapper">
        <div
          className="ah-downloadable-image-display"
          onClick={() => setImageIsHighlighted(!imageIsHighlighted)}
          onMouseEnter={() => setImageIsHighlighted(true)}
          onMouseLeave={() => setImageIsHighlighted(false)}
        >
          <FaPlus
            className="ah-downloadable-image-zoom-icon"
            style={{ opacity: `${imageIsHighlighted ? '0' : '1'}` }}
          />
          <Img
            fluid={{
              ...item.displayInfo.childImageSharp.fluid,
              aspectRatio: 1,
            }}
            style={{ opacity: `${imageIsHighlighted ? '0' : '1'}` }}
          />
          {imageIsHighlighted && (
            <div className="ah-downloadable-image--highlighted-wrapper">
              <Img
                fluid={item.displayInfo.childImageSharp.fluid}
                className="ah-downloadable-image--highlighted"
              />
            </div>
          )}
        </div>
      </div>
      <div className="ah-downloadable-image-card-info-wrapper">
        <div className="ah-downloadable-image-card-meta-wrapper">
          {item.fileInfo.description && (
            <span className="ah-downloadable-image-card-meta-item">
              {item.fileInfo.description}
            </span>
          )}
          {item.fileInfo.credit && (
            <span className="ah-downloadable-image-card-meta-item">
              <i>{item.fileInfo.credit}</i>
            </span>
          )}
        </div>
        <li
          className="ah-menu-list-item-wrapper"
          style={{ listStyle: 'none', margin: '5px 1px 10px 0px' }}
        >
          <a href={item.fileInfo.files.highres} className="ah-menu-list-item">
            VIEW FULL
          </a>
        </li>
        DOWNLOAD:{' '}
        <div style={{ display: 'flex' }}>
          {highres && (
            <a href={highres} download className="ah-downloadable-image-link">
              <b>HIGH-RES</b>
            </a>
          )}
          {midres && (
            <Fragment>
              {highres && <span> | </span>}
              <a href={midres} download className="ah-downloadable-image-link">
                <b>STANDARD</b>
              </a>
            </Fragment>
          )}
          {lowres && (
            <Fragment>
              {(midres || (highres && !midres)) && <span> | </span>}

              <a href={lowres} download className="ah-downloadable-image-link">
                <b>LOW-RES</b>
              </a>
            </Fragment>
          )}
        </div>
      </div>
    </div>
  )
}

export const buildDownloadableImageCollectionArray = (display, info) => {
  // Basic check that imageArray and file array match in lenght otherwise return empty array.
  if (display.length !== info.length) {
    console.log(
      "DEV NOTE: Image array and downloadable file array doesn't match when building collection"
    )
    return []
  }
  // Build new collection array combining image data and corresponding downloadble file references
  const newCollection = []
  display.forEach((displayInfo, index) => {
    const newImageObject = {
      displayInfo,
      fileInfo: info[index],
    }
    newCollection.push(newImageObject)
  })
  return newCollection
}

// PLACEHOLDER COMMENT FOR TYPE DECLARATION
// buildDowndlodableImageCollectionAraay params
//
// The display parameter should be an Gatsby fluid imageQuery object turned into an array
// And the info parameter should be a corresponding array of objects with the following structure
//
// files objcet must include at least one of high, mid, low resolutions

// const imageInfoArray = [
//   {
//     name: 'Press Photo 1',
//     files: {
//       highres: pressPhoto1High,
//       midres: pressPhoto1High,
//       lowres: pressPhoto1Low,
//     },
//     credit: 'Andreas Karlsson',
//     year: 2019,
//     description:
//       'Promotional photo for Adam Helring´s 2019 "You/More" single. ',
//   },

//   {
//     name: 'Press Photo 2',
//     files: {
//       highres: pressPhoto2High,
//       lowres: pressPhoto2Low,
//     },
//     credit: 'Andreas Karlsson',
//     year: 2019,
//     description:
//       'Promotional photo for Adam Helring´s 2019 "You/More" single. ',
//   },
// ]
