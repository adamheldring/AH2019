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
      <a href={item.fileInfo.files.highres}>
        <b>VIEW</b>
      </a>
      DONWLOAD:
      <div>
        <a href={item.fileInfo.files.highres} download>
          <b>HIGH-RES</b>
        </a>
        <span> | </span>
        <a href={item.fileInfo.files.lowres} download>
          <b>LOW RES</b>
        </a>
      </div>
    </div>
  </div>
)

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

// const imageInfoArray = [
//   name: 'Press Photo 1',
//   files: {
//     highres: pressPhoto1High,
//     lowres: pressPhoto1Low,
//   },
//   credit: 'Andreas Karlsson',
//   year: 2019,
//   description:
//     'Promotional photo for Adam Helring´s 2019 "You/More" single. ',
// },

// {
//   name: 'Press Photo 2',
//   files: {
//     highres: pressPhoto2High,
//     lowres: pressPhoto2Low,
//   },
//   credit: 'Andreas Karlsson',
//   year: 2019,
//   description:
//     'Promotional photo for Adam Helring´s 2019 "You/More" single. ',
// ]
