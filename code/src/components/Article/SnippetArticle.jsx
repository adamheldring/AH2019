import React from 'react'
import { Link } from 'gatsby'
import scrollToTop from '../../helpers/scrollToTop'
import ArticleWrapper from './ArticleWrapper/ArticleWrapper'

// VIDEO SNIPPET
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

// PORTS OF CALL OUT NOW SNIPPET
// const SnippetArticle = () => (
//   <ArticleWrapper title="LATEST NEWS" singlePageLink="">
//     <section className="ah-article-info-wrapper">
//       <div className="ah-article-info-paragraph ah-article-info-paragraph--list">
//         <h2 className="ah-article-info-paragraph-heading">
//           New album PORTS OF CALL out now!
//         </h2>
//         <a
//           href="spotify:album:6Ej7e8J3wCNoN9bL2vE03M"
//           alt="Open Ports Of Call album on Spotify"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="ah-snippet-link"
//         >
//           LISTEN NOW ON SPOTIFY
//         </a>
//         <Link onClick={scrollToTop} to="/ports-of-call-album-out-now">
//           <span className="ah-contact-link">
//             <i>Read full article</i>
//           </span>
//         </Link>
//       </div>
//     </section>
//   </ArticleWrapper>
// )

// DANCE STRAIGHT TO NUMBER ONE SNIPPET
// const SnippetArticle = () => (
//   <ArticleWrapper title="LATEST NEWS" singlePageLink="">
//     <section className="ah-article-info-wrapper">
//       <div className="ah-article-info-paragraph ah-article-info-paragraph--list">
//         <h2 className="ah-article-info-paragraph-heading">
//           "Dance" straight to number ONE on Swedish Radio list
//         </h2>
//         <Link onClick={scrollToTop} to="/dance-straight-to-number-one">
//           <span className="ah-contact-link">
//             <i>Read full article</i>
//           </span>
//         </Link>
//       </div>
//     </section>
//   </ArticleWrapper>

// ALBUM OF THE MONTH SNIPPET
const SnippetArticle = () => (
  <ArticleWrapper title="LATEST NEWS" singlePageLink="">
    <section className="ah-article-info-wrapper">
      <div className="ah-article-info-paragraph ah-article-info-paragraph--list">
        <h2 className="ah-article-info-paragraph-heading">
          Ports of Call named "Best album of the month"
        </h2>
        <Link onClick={scrollToTop} to="/news">
          <span className="ah-contact-link">
            <i>Read full article</i>
          </span>
        </Link>
      </div>
    </section>
  </ArticleWrapper>
)

export default SnippetArticle
