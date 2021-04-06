import React from 'react'
import Img from 'gatsby-image'
import ArticleWrapper from './ArticleWrapper/ArticleWrapper'

const PressContactArticle = ({ pressLogo }) => (
  // <ArticleWrapper title="PRESS CONTACT">
  //   <section className="ah-article-info-wrapper">
  //     <div className="ah-article-info-paragraph ah-article-info-paragraph--list">
  //       <span>
  //         <b>Management & Record Label:</b>
  //         <br />
  //       </span>
  //       <span>
  //         <i>Worldwide</i>
  //         <br />
  //       </span>
  //       <span className="ah-contact-logo-wrapper ah-contact-logo-wrapper--tennis">
  //         <Img fixed={pressLogo.childImageSharp.fixed} />
  //       </span>
  //       <span>
  //         TENNIS MUSIC
  //         <br />
  //       </span>
  //       <span>
  //         <a href="mailto:info@tennismusic.net" className="ah-contact-link">
  //           info@tennismusic.net
  //         </a>
  //         <br />
  //       </span>
  //       <span>
  //         <a
  //           href="http://www.tennismusic.net"
  //           alt="Tennis Music"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //           className="ah-contact-link"
  //         >
  //           www.tennismusic.net
  //         </a>
  //         <br />
  //       </span>
  //       <span>
  //         Stockholm – Sweden
  //         <br />
  //       </span>
  //     </div>
  //   </section>
  // </ArticleWrapper>
  <ArticleWrapper title="PRESS CONTACT">
    <section className="ah-article-info-wrapper">
      <div className="ah-article-info-paragraph ah-article-info-paragraph--list">
        <span>
          <b>Press Contact:</b>
          <br />
        </span>
        <span>
          <i>Worldwide</i>
          <br />
        </span>
        <span className="ah-contact-logo-wrapper ah-contact-logo-wrapper--tennis">
          <Img fixed={pressLogo.childImageSharp.fixed} />
        </span>
        <span>
          ILES PR
          <br />
        </span>
        <span>
          Molly Brunner
          <br />
        </span>
        <span>
          <a href="mailto:molly@iles.se" className="ah-contact-link">
            molly@iles.se
          </a>
          <br />
        </span>
        <span>
          +46 (0)70 270 70 64
          <br />
        </span>
        <span>
          <a
            href="http://www.iles.se"
            alt="ILES PR"
            target="_blank"
            rel="noopener noreferrer"
            className="ah-contact-link"
          >
            www.iles.se
          </a>
          <br />
        </span>
        <span>
          Stockholm – Sweden
          <br />
        </span>
      </div>
    </section>
  </ArticleWrapper>
)

export default PressContactArticle
