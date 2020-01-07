import React from 'react'
import Img from 'gatsby-image'
import ArticleWrapper from './ArticleWrapper/ArticleWrapper'

const ContactArticle = ({ tennislogo, mediahorselogo }) => (
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
          <Img fixed={tennislogo.childImageSharp.fixed} />
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
          <Img fixed={mediahorselogo.childImageSharp.fixed} />
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
)

export default ContactArticle
