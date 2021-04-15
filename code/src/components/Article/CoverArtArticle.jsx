import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import ArticleWrapper from './ArticleWrapper/ArticleWrapper'
import DownloadbleImageCollection, {
  buildDownloadableImageCollectionArray,
} from '../DownloadbleImageCollection/DownloadableImageCollection'
import coverArt1High from '../../images/covers/ah-golden-state-single-cover.jpg'
import coverArt2High from '../../images/covers/ah-dance-single-cover.jpg'
import coverArt3High from '../../images/covers/ah-youmore-single-cover.jpg'
import coverArt4High from '../../images/covers/ah-true_north-ep-cover.jpg'
import coverArt5High from '../../images/covers/ah-mount_foreverest-album-cover.jpg'
import coverArt6High from '../../images/covers/ah-metro-ep-cover.jpg'

const CoverArtArticle = () => {
  const data = useStaticQuery(graphql`
    query coverArtQuery {
      cover1: file(
        relativePath: { eq: "covers/ah-golden-state-single-cover.jpg" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cover2: file(relativePath: { eq: "covers/ah-dance-single-cover.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cover3: file(relativePath: { eq: "covers/ah-youmore-single-cover.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cover4: file(relativePath: { eq: "covers/ah-true_north-ep-cover.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cover5: file(
        relativePath: { eq: "covers/ah-mount_foreverest-album-cover.jpg" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cover6: file(relativePath: { eq: "covers/ah-metro-ep-cover.jpg" }) {
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
      name: 'Golden State',
      files: {
        highres: coverArt1High,
      },
      year: 2021,
      description: 'Golden State single cover art.',
    },
    {
      name: 'Dance',
      files: {
        highres: coverArt2High,
      },
      year: 2021,
      description: 'Dance single cover art.',
    },
    {
      name: 'You / More',
      files: {
        highres: coverArt3High,
      },
      year: 2019,
      description: 'You / More single cover art.',
    },
    {
      name: 'True North EP',
      files: {
        highres: coverArt4High,
      },
      year: 2010,
      description: 'True North EP cover art.',
    },
    {
      name: 'You / More',
      files: {
        highres: coverArt5High,
      },
      year: 2009,
      description: 'Mount Foreverest album cover art.',
    },
    {
      name: 'Metro EP',
      files: {
        highres: coverArt6High,
      },
      year: 2009,
      description: 'Metro EP cover art.',
    },
  ]

  const downloadableCoverArtCollection = buildDownloadableImageCollectionArray(
    imageDisplayArray,
    imageInfoArray
  )
  return (
    <ArticleWrapper title="COVER ART">
      <section className="ah-article-info-wrapper">
        <div className="ah-article-info-paragraph ah-article-info-paragraph--list">
          <DownloadbleImageCollection
            collection={downloadableCoverArtCollection}
          />
        </div>
      </section>
    </ArticleWrapper>
  )
}

export default CoverArtArticle
