import React, { Fragment } from 'react'
import ArticleWrapper from './ArticleWrapper/ArticleWrapper'
import { ahFormatDate } from '../../helpers/ahFormatDate'

const ContactArticle = ({ shows = [], title = 'shows' }) => {
  console.log('SHOWS: ', shows)

  return (
    <ArticleWrapper title={title}>
      <section className="ah-article-info-wrapper">
        <div className="ah-article-info-paragraph ah-article-info-paragraph--list">
          <div className="ah-article--tour-wrapper">
            {shows.map(show => (
              <Fragment>
                <div className="ah-article--tour-item">
                  <span className="ah-article--tour-item-date">
                    {/* {ahFormatDate(show.date, true)} */}
                    {show.date}
                  </span>
                  <span className="ah-article--tour-item-country">
                    {' '}
                    ({show.country}){' '}
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
                  <span> – </span>
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
