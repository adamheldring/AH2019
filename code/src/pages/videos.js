import React, { Fragment } from 'react'
import SEO from '../components/seo'
import VideoArticle from '../components/Article/VideoArticle'

import videoData from '../../data/videoData'

const VideosPage = () => (
  <Fragment>
    <SEO title="VIDEOS" />
    <div className="ah-page">
      {videoData.videos.map((video, index) => (
        <VideoArticle
          key={`${video.title}-${index}`}
          videoLabel={video.videoLabel}
          metaTitle={video.metaTitle}
          youTubeVideoCode={video.youTubeVideoCode}
          title={video.title}
          description={video.description}
          additionalInfo={video.additionalInfo}
        />
      ))}
    </div>
  </Fragment>
)

export default VideosPage
