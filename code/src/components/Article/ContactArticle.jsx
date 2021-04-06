import React, { useContext } from 'react'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import ArticleWrapper from './ArticleWrapper/ArticleWrapper'
import scrollToAnchorPoint from '../../helpers/scrollToAnchorPoint'
import { ahContext } from '../../helpers/ahContext'

const ContactArticle = ({ tennislogo, mediahorselogo, ileslogo }) => {
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
            <b>Sync Licensing:</b>
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
        {/* <span>BOOKING & PRESS INQUIRIES:</span>
        <span>
          <a href="mailto:info@tennismusic.net" className="ah-contact-link">
            info@tennismusic.net
          </a>
        </span> */}
        <section className="ah-article-info-wrapper">
          <div
            className="ah-article-info-paragraph ah-article-info-paragraph--list"
            style={{ paddingTop: '0px', paddingBottom: '0px' }} // Modd for ILES update
          >
            <span>
              <b>Press Contact:</b>
              <br />
            </span>
            <span>
              <i>Worldwide</i>
              <br />
            </span>
            <span className="ah-contact-logo-wrapper ah-contact-logo-wrapper--tennis">
              <Img fixed={ileslogo.childImageSharp.fixed} />
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
              {/* <br /> */}
            </span>
            {/* <span>
              Stockholm – Sweden
              <br />
            </span> */}
          </div>
        </section>
        <span>
          <li
            className="ah-menu-list-item-wrapper"
            style={{ listStyle: 'none', margin: '0 0 0' }}
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
