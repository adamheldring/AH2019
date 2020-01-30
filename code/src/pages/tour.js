import React, { Fragment } from 'react'
import SEO from '../components/seo'
import TourArticle from '../components/Article/TourArticle'
import tourData from '../../data/tourData'

const TourPage = () => (
  <Fragment>
    <SEO title="Tour" />
    <div className="ah-page">
      <TourArticle shows={[]} title="UPCOMING SHOWS" />
      <TourArticle shows={tourData.shows} title="PAST SHOWS" />
    </div>
  </Fragment>
)

export default TourPage
