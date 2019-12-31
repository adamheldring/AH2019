import React, { Fragment } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import tourData from '../../data/tourData'

const Music = () => (
  <Fragment>
    <SEO title="Music" />
    <h1>Tour</h1>
    <div className="ah-page">
      <div>
        <ul>
          {tourData.map((tourItem, index) => (
            <li key={`${index}-${tourItem.date}`}>{tourItem.date}</li>
          ))}
        </ul>
      </div>
    </div>
  </Fragment>
)

export default Music
