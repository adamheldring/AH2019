import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import SEO from '../components/seo'
import ArticleWrapper from '../components/Article/ArticleWrapper/ArticleWrapper'
import ReleaseArticle from '../components/Article/ReleaseArticle'
import SocialMediaBar from '../components/SocialMediaBar/SocialMediaBar'
import releaseData from '../../data/releaseData'

const latestRelease = releaseData.releases[0]

const IndexPage = ({ data }) => (
  <Fragment>
    <SEO title="ABOUT" />
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
          <p className="ah-article-info-paragraph ah-article-info-paragraph--list">
            <h2 className="ah-article-info-paragraph-heading">You / More</h2>
            <span>From upcoming full album</span>
          </p>
        </section>
      </ArticleWrapper>
      <ReleaseArticle
        release={latestRelease}
        coverFluid={data[latestRelease.coverName].childImageSharp.fluid}
        articleTitle="LATEST RELEASE"
      />
      <ArticleWrapper title="BIOGRAPHY">
        <section className="ah-article-visual--image-wide-container">
          <Img fluid={data.portrait.childImageSharp.fluid} />
        </section>
        <section className="ah-article-info-wrapper">
          <div className="ah-article-info-paragraph ah-article-info-paragraph--block">
            <h2 className="ah-article-info-paragraph-heading ah-article-info-paragraph-heading--space">
              Adam Heldring
            </h2>
            <p style={{ marginBottom: '20px' }}>
              <b>
                Adam Heldring released two Ep:s and the debut album ”Mount
                Foreverest” in quick succession which generated wide interest
                both at home in Sweden and on international ground.
              </b>
              <br />
              <br />
              More than a hundred live shows as well as TV and radio appearances
              followed in the US, UK, Sweden, Norway and Finland. He was
              nominated for the Swedish music prize ”Rockbjörnen” and played
              festivals in New York, Texas and Brighton. The latest release
              ”True North EP” from 2010 including the indie-hit ”Bear Town” was
              crowned with a series of sold out theater shows at the City
              Theater in his home town Eskilstuna among other places. <br />
              <br />
              Then things suddenly went quiet. Heldring announced a break from
              the spotlight and spent months on the move in Los Angeles, Berlin
              and Paris – constantly writing on the music for his second album.
              The record has come together during a series of silent years
              behind locked studio doors and under great secrecy. <br />
              <br />
              <i>
                The first single "You/More" was released in 2019 and the full
                second album is expected in 2020.
              </i>
            </p>
          </div>
        </section>
      </ArticleWrapper>
      <ArticleWrapper title="SOCIAL MEDIA">
        <section className="ah-article-info-wrapper">
          <div className="ah-article-info-paragraph ah-article-info-paragraph--list">
            FOLLOW ADAM HELDRING
            <SocialMediaBar lightBackground></SocialMediaBar>
          </div>
        </section>
      </ArticleWrapper>
      <ArticleWrapper title="CONTACT" split>
        <section className="ah-article-info-wrapper ah-article--split-section">
          <div className="ah-article-info-paragraph ah-article-info-paragraph--list">
            <span>
              <b>Management & Record Label:</b>
              <br />
            </span>
            <span>
              <i>Worldwide</i>
              <br />
            </span>
            <span className="ah-contact-logo-wrapper ah-contact-logo-wrapper--tennis">
              <Img fixed={data.tennislogoblack.childImageSharp.fixed} />
            </span>
            <span>
              TENNIS MUSIC
              <br />
            </span>
            <span>
              <a href="mailto:info@tennismusic.net" className="ah-contact-link">
                info@tennismusic.net
              </a>
              <br />
            </span>
            <span>
              <a
                href="http://www.tennismusic.net"
                alt="Tennis Music"
                target="_blank"
                rel="noopener noreferrer"
                className="ah-contact-link"
              >
                www.tennismusic.net
              </a>
              <br />
            </span>
            <span>
              Stockholm – Sweden
              <br />
            </span>
          </div>
        </section>
        <section className="ah-article-info-wrapper ah-article--split-section">
          <div className="ah-article-info-paragraph ah-article-info-paragraph--list">
            <span>
              <b>Synch Licensing:</b>
              <br />
            </span>
            <span>
              <i>United States</i>:
              <br />
            </span>
            <span className="ah-contact-logo-wrapper ah-contact-logo-wrapper--media-horse">
              <Img fixed={data.mediahorselogo.childImageSharp.fixed} />
            </span>
            <span>
              MEDIA HORSE
              <br />
            </span>
            <span>
              <a href="mailto:info@mediahorse.net" className="ah-contact-link">
                info@mediahorse.net
              </a>
              <br />
            </span>
            <span>
              <a
                href="http://www.mediahorse.net"
                alt="Media Horse"
                target="_blank"
                rel="noopener noreferrer"
                className="ah-contact-link"
              >
                www.mediahorse.net
              </a>
              <br />
            </span>
            <span>
              Los Angeles, CA – USA
              <br />
            </span>
          </div>
        </section>
      </ArticleWrapper>
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
    tennislogoblack: file(
      relativePath: { eq: "materials/tennis-logo-trans-black.png" }
    ) {
      childImageSharp {
        fixed(height: 35) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    mediahorselogo: file(
      relativePath: { eq: "materials/media-horse-logo.png" }
    ) {
      childImageSharp {
        fixed(height: 80) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
