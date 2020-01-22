import React, { Fragment } from 'react'
import SEO from '../components/seo'
import VideoArticle from '../components/Article/VideoArticle'

import videoData from '../../data/videoData'

const VideosPage = () => (
  <Fragment>
    <SEO title="Music" />
    <div className="ah-page">
      {videoData.videos.map(video => (
        <Fragment>
          <VideoArticle
            videoLabel={video.videoLabel}
            metaTitle={video.metaTitle}
            youTubeVideoCode={video.youTubeVideoCode}
            title={video.title}
            description={video.description}
            additionalInfo={video.additionalInfo}
          />
        </Fragment>
      ))}
    </div>
  </Fragment>
)

export default VideosPage
