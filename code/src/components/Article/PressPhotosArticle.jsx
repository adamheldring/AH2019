import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import ArticleWrapper from './ArticleWrapper/ArticleWrapper'
import DownloadbleImageCollection from '../DownloadbleImageCollection/DownloadableImageCollection'
import pressPhoto1 from '../../images/press/Adam_Heldring_press_2019_1_-_Photo_Andreas_Karlsson_(highres).jpg'
import pressPhoto2 from '../../images/press/Adam_Heldring_press_2019_4_-_Photo_Andreas_Karlsson_(highres).jpg'

const PressPhotosArticle = () => {
  const data = useStaticQuery(graphql`
    query pressPhotoQuery {
      pressPhoto1: file(
        relativePath: {
          eq: "press/Adam_Heldring_press_2019_1_-_Photo_Andreas_Karlsson_(highres).jpg"
        }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pressPhoto2: file(
        relativePath: {
          eq: "press/Adam_Heldring_press_2019_4_-_Photo_Andreas_Karlsson_(highres).jpg"
        }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  // Crate ascending image array of images from graphql data object
  const imageArray = Object.getOwnPropertyNames(data)
    .sort()
    .map(imageName => data[imageName])

  const imageFileArray = [pressPhoto1, pressPhoto2]

  // Build a collection mathing images from graphql with corresponding download urls
  const buildDownloadableImageCollection = (imageArray, fileArray) => {
    // Basic check that imageArray and file array match in lenght otherwise return empty array.
    if (imageArray.length !== fileArray.length) {
      console.log(
        "DEV NOTE: Image array and downloadable file array doesn't match when building collection"
      )
      return []
    }
    // Build new collection array combining image data and corresponding downloadble file references
    const newCollection = []
    imageArray.map((image, index) => {
      const newImageObject = {
        image,
        file: fileArray[index],
      }
      newCollection.push(newImageObject)
    })
    return newCollection
  }

  const downloadablePressPhotoCollection = buildDownloadableImageCollection(
    imageArray,
    imageFileArray
  )

  console.log('THE BIG TEST: ', downloadablePressPhotoCollection)

  return (
    <ArticleWrapper title="PRESS PHOTOS">
      <section className="ah-article-info-wrapper">
        <div className="ah-article-info-paragraph ah-article-info-paragraph--list">
          <div className="ah-downloadble-image-collection-wrapper">
            <DownloadbleImageCollection collection={data} />
            <a href={pressPhoto1} download>
              PRESS 1
            </a>
          </div>
        </div>
      </section>
    </ArticleWrapper>
  )
}

export default PressPhotosArticle
