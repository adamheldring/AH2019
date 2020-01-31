import React, { Fragment } from 'react'
import { flag } from 'country-emoji'
import ArticleWrapper from './ArticleWrapper/ArticleWrapper'
import { ahFormatDate } from '../../helpers/ahFormatDate'

const ContactArticle = ({ shows = [], title = 'shows' }) => {
  console.log('SHOWS: ', shows)
  console.log('TEST', shows.length && flag(shows[0].country))
  return (
    <ArticleWrapper title={title}>
      <section className="ah-article-info-wrapper">
        <div className="ah-article-info-paragraph ah-article-info-paragraph--list">
          <div className="ah-article--tour-wrapper">
            {shows.map(show => (
              <Fragment>
                <div className="ah-article--tour-item">
                  <span className="ah-article--tour-item-date">
                    {ahFormatDate(show.date, true)}
                    {/* {show.date} */}
                  </span>
                  <span className="ah-article--tour-item-country">
                    {' '}
                    {/* ({show.country}){' '} */}
                    {flag(show.country)}
                  </span>
                  {/* <b> */}
                  <span className="ah-article--tour-item-city">
                    {show.city}
                  </span>
                  {show.state && (
                    <span className="ah-article--tour-item-state">
                      , {show.state.toUpperCase()}
                    </span>
                  )}
                  {/* </b> */}
                  <span className="ah-article--tour-item-separator"> – </span>
                  <span className="ah-article--tour-item-venue">
                    {show.venue}
                  </span>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </section>
    </ArticleWrapper>
  )
}

export default ContactArticle
