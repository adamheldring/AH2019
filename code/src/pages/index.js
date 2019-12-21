import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import SEO from '../components/seo'
import { ArticleWrapper } from '../components/ArticleWrapper/ArticleWrapper'

const IndexPage = ({ data }) => (
  <Fragment>
    <SEO title="Home" />
    <div className="ah-page">
      <ArticleWrapper title="LATEST VIDEO">
        <section className="ah-article-visual--video-container">
          <iframe
            title="You/More video"
            className="ah-article-visual--video"
            src="https://www.youtube.com/embed/hP7B0h3oIdk?loop=1&playList=hP7B0h3oIdk&modestbranding"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </section>
        <section className="ah-article-info-wrapper">
          <p className="ah-article-info-paragraph">
            <h2 className="ah-article-info-paragraph-heading">You / More</h2>
          </p>
        </section>
      </ArticleWrapper>
      <ArticleWrapper title="LATEST RELEASE" split>
        <section className="ah-article-visual--image-square-outer-container ah-article--split-section">
          <div className="ah-article-visual--image-square-inner-container">
            <Img fluid={data.ymcover.childImageSharp.fluid} />
          </div>
        </section>
        <section className="ah-article-info-wrapper ah-article--split-section">
          <p className="ah-article-info-paragraph ah-article-info-paragraph--list">
            <h2 className="ah-article-info-paragraph-heading">You / More</h2>
            <span>
              Format: Single
              <br />
            </span>
            <span>
              Year: 2019
              <br />
            </span>
            <span>
              Label: Tennis
              <br />
            </span>
          </p>
        </section>
      </ArticleWrapper>
      <ArticleWrapper title="ABOUT">
        <section className="ah-article-visual--image-wide-container">
          <Img fluid={data.portrait.childImageSharp.fluid} />
        </section>
        <section className="ah-article-info-wrapper">
          <p className="ah-article-info-paragraph ah-article-info-paragraph--block">
            <h2 className="ah-article-info-paragraph-heading">Biography</h2>
            <span>
              <b>Adam Heldring</b> released two Ep:s and the debut album ”Mount
              Foreverest” in quick succession which generated wide interest both
              at home in Sweden and on international ground. More than a hundred
              live shows as well as TV and radio appearances followed in the US,
              UK, Sweden, Norway and Finland. He was nominated for the Swedish
              music prize ”Rockbjörnen” and played festivals in New York, Texas
              and Brighton. The latest release ”True North EP” from 2010
              including the indie-hit ”Bear Town” was crowned with a series of
              sold out theater shows at the City Theater in his home town
              Eskilstuna among other places. <br />
              <br />
              Then things suddenly went quiet. Heldring announced a break from
              the spotlight and spent months on the move in Los Angeles, Berlin
              and Paris – constantly writing on the music for his second album.
              The record has come together during a series of silent years
              behind locked studio doors and under great secrecy.
            </span>
          </p>
        </section>
      </ArticleWrapper>
      <ArticleWrapper title="SOCIAL MEDIA"></ArticleWrapper>
    </div>
  </Fragment>
)

export default IndexPage

export const imageQuery = graphql`
  query {
    ymcover: file(relativePath: { eq: "covers/ah-youmore-single-cover.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    portrait: file(
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
  }
`
