import React, { Fragment } from 'react'
import SEO from '../components/seo'
import TourArticle from '../components/Article/TourArticle'
import tourData from '../../data/tourData'
import { timeCheckShows } from '../helpers/timeCheckShows'

const TourPage = () => {
  const { future, past } = timeCheckShows(tourData.shows)
  return (
    <Fragment>
      <SEO title="TOUR" />
      <div className="ah-page">
        <TourArticle shows={future} title="UPCOMING SHOWS" />
        <TourArticle shows={past} title="PAST SHOWS" />
      </div>
    </Fragment>
  )
}

export default TourPage
