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
  const imageDisplayArray = Object.getOwnPropertyNames(data)
    .sort()
    .map(imageName => data[imageName])

  const imageInfoArray = [
    {
      file: pressPhoto1,
      name: 'Press Photo 1',
      credit: 'Andreas Karlsson',
      year: 2019,
      description:
        'Promotional photo for Adam Helring´s 2019 "You/More" single. ',
    },

    {
      file: pressPhoto2,
      name: 'Press Photo 2',
      credit: 'Andreas Karlsson',
      year: 2019,
      description:
        'Promotional photo for Adam Helring´s 2019 "You/More" single. ',
    },
  ]

  // Build a collection mathing images from graphql with corresponding download urls
  const buildDownloadableImageCollection = (display, info) => {
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

  const downloadablePressPhotoCollection = buildDownloadableImageCollection(
    imageDisplayArray,
    imageInfoArray
  )

  console.log('THE BIG TEST: ', downloadablePressPhotoCollection)

  return (
    <ArticleWrapper title="PRESS PHOTOS">
      <section className="ah-article-info-wrapper">
        <div className="ah-article-info-paragraph ah-article-info-paragraph--list">
          <DownloadbleImageCollection
            collection={downloadablePressPhotoCollection}
          />
        </div>
      </section>
    </ArticleWrapper>
  )
}

export default PressPhotosArticle
