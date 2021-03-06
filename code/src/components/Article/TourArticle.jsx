import React, { Fragment } from 'react'
import { flag } from 'country-emoji'
import ArticleWrapper from './ArticleWrapper/ArticleWrapper'
import { ahFormatDate } from '../../helpers/ahFormatDate'

const TourArticle = ({ shows = [], title = 'shows' }) => (
  <ArticleWrapper title={title}>
    <section className="ah-article-info-wrapper">
      <div className="ah-article-info-paragraph ah-article-info-paragraph--list">
        <div className="ah-article--tour-wrapper">
          {shows.length ? (
            shows.map((show, index) => (
              <Fragment key={`${show.date}-${index}`}>
                <div className="ah-article--tour-item">
                  <span className="ah-article--tour-item-date">
                    {ahFormatDate(show.date, true)}
                  </span>
                  <div className="ah-article--tour-item--geogroup">
                    <span className="ah-article--tour-item-country">
                      {flag(show.country)}
                    </span>
                    <span className="ah-article--tour-item-city">
                      {show.city}
                    </span>
                    {show.state && (
                      <span className="ah-article--tour-item-state">
                        , {show.state.toUpperCase()}
                      </span>
                    )}
                  </div>
                  <span className="ah-article--tour-item-separator"> – </span>
                  <span className="ah-article--tour-item-venue">
                    {show.venue}
                  </span>
                </div>
              </Fragment>
            ))
          ) : (
            <span className="ah-article--tour--noshows-placeholder">
              No shows announced
            </span>
          )}
        </div>
      </div>
    </section>
  </ArticleWrapper>
)

export default TourArticle
