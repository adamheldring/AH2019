import React, { Fragment } from 'react'
import ArticleWrapper from './ArticleWrapper/ArticleWrapper'

const ContactArticle = ({ shows = [], title = 'shows' }) => {
  console.log('SHOWS: ', shows)

  return (
    <ArticleWrapper title={title}>
      <section className="ah-article-info-wrapper">
        <div className="ah-article-info-paragraph ah-article-info-paragraph--list">
          <div>
            {shows.map(show => (
              <Fragment>
                <div>
                  <span>{show.date}</span>
                  <span> ({show.country}) </span>
                  <b>
                    <span>{show.city}</span>
                    {show.state && <span>, {show.state.toUpperCase()}</span>}
                  </b>
                  <span> – {show.venue}</span>
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
