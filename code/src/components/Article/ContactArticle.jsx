import React, { useContext } from 'react'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import ArticleWrapper from './ArticleWrapper/ArticleWrapper'
import scrollToAnchorPoint from '../../helpers/scrollToAnchorPoint'
import { ahContext } from '../../helpers/ahContext'

const ContactArticle = ({ tennislogo, mediahorselogo }) => {
  const { menuInDarkmode, scrollUpAnchorRef } = useContext(ahContext)
  return (
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
            <i>United States</i>
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
      <section className="ah-article-info-wrapper ah-article-info--addon-info">
        <span>BOOKING & PRESS INQUIRIES:</span>
        <span>
          <a href="mailto:info@tennismusic.net" className="ah-contact-link">
            info@tennismusic.net
          </a>
        </span>
        <span>
          <li
            className="ah-menu-list-item-wrapper"
            style={{ listStyle: 'none', margin: '10px 0 0' }}
          >
            <Link
              onClick={() =>
                scrollToAnchorPoint(scrollUpAnchorRef, menuInDarkmode)
              }
              to="/press"
              className="ah-menu-list-item"
            >
              PRESS SECTION
            </Link>
          </li>
        </span>
      </section>
    </ArticleWrapper>
  )
}

export default ContactArticle
