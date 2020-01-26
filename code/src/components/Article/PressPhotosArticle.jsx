import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import ArticleWrapper from './ArticleWrapper/ArticleWrapper'
import DownloadbleImageCollection, {
  buildDownloadableImageCollectionArray,
} from '../DownloadbleImageCollection/DownloadableImageCollection'
import pressPhoto1High from '../../images/press/Adam_Heldring_press_2019_1_-_Photo_Andreas_Karlsson_(highres).jpg'
import pressPhoto1Low from '../../images/press/Adam_Heldring_press_2019_1_-_Photo_Andreas_Karlsson_(lowres).jpg'
import pressPhoto2High from '../../images/press/Adam_Heldring_press_2019_4_-_Photo_Andreas_Karlsson_(highres).jpg'
import pressPhoto2Low from '../../images/press/Adam_Heldring_press_2019_4_-_Photo_Andreas_Karlsson_(lowres).jpg'

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

  // Create array with static download links and other image info that corresponds with above display array
  const imageInfoArray = [
    {
      name: 'Press Photo 1',
      files: {
        highres: pressPhoto1High,
        lowres: pressPhoto1Low,
      },
      credit: 'Andreas Karlsson',
      year: 2019,
      description:
        'Promotional photo for Adam Helring´s 2019 "You/More" single. ',
    },

    {
      name: 'Press Photo 2',
      files: {
        highres: pressPhoto2High,
        lowres: pressPhoto2Low,
      },
      credit: 'Andreas Karlsson',
      year: 2019,
      description:
        'Promotional photo for Adam Helring´s 2019 "You/More" single. ',
    },
  ]

  const downloadablePressPhotoCollection = buildDownloadableImageCollectionArray(
    imageDisplayArray,
    imageInfoArray
  )

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
