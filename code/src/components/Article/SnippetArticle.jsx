import React from 'react'
import { Link } from 'gatsby'
import scrollToTop from '../../helpers/scrollToTop'
import ArticleWrapper from './ArticleWrapper/ArticleWrapper'

// const SnippetArticle = () => (
//   <ArticleWrapper title="LATEST NEWS" singlePageLink="/golden-state-single">
//     <section className="ah-article-info-wrapper">
//       <div className="ah-article-info-paragraph ah-article-info-paragraph--list">
//         <h2 className="ah-article-info-paragraph-heading">
//           New single GOLDEN STATE out April 16
//         </h2>
//         <Link onClick={scrollToTop} to="/golden-state-single">
//           <span className="ah-contact-link">
//             <i>Read full article</i>
//           </span>
//         </Link>
//       </div>
//     </section>
//   </ArticleWrapper>
// )

// const SnippetArticle = () => (
//   <ArticleWrapper title="LATEST NEWS" singlePageLink="">
//     <section className="ah-article-visual--video-container">
//       <iframe
//         title="Dance (Teaser)"
//         className="ah-article-visual--video"
//         src="https://www.youtube.com/embed/3rEP14ghceE?loop=1&playList=3rEP14ghceE&modestbranding"
//         frameBorder="0"
//         allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
//         allowFullScreen
//       ></iframe>
//     </section>
//     <section className="ah-article-info-wrapper">
//       <div className="ah-article-info-paragraph ah-article-info-paragraph--list">
//         <h2 className="ah-article-info-paragraph-heading">
//           New single DANCE out now!
//         </h2>
//         <a
//           href="spotify:album:7lpHjjvrMggNhHpxIINvFr"
//           alt="Open Dance single on Spotify"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="ah-snippet-link"
//         >
//           LISTEN NOW ON SPOTIFY
//         </a>
//         <Link onClick={scrollToTop} to="/dance-single-out-now">
//           <span className="ah-contact-link">
//             <i>Read full article</i>
//           </span>
//         </Link>
//       </div>
//     </section>
//   </ArticleWrapper>
// )

const SnippetArticle = () => (
  <ArticleWrapper title="LATEST NEWS" singlePageLink="">
    <section className="ah-article-info-wrapper">
      <div className="ah-article-info-paragraph ah-article-info-paragraph--list">
        <h2 className="ah-article-info-paragraph-heading">
          New single GOLDEN STATE out now!
        </h2>
        <a
          href="spotify:album:21hS2pth9WstNMvwp2abIL"
          alt="Open Golden State single on Spotify"
          target="_blank"
          rel="noopener noreferrer"
          className="ah-snippet-link"
        >
          LISTEN NOW ON SPOTIFY
        </a>
        <Link onClick={scrollToTop} to="/golden-state-single-out-now">
          <span className="ah-contact-link">
            <i>Read full article</i>
          </span>
        </Link>
      </div>
    </section>
  </ArticleWrapper>
)

export default SnippetArticle
