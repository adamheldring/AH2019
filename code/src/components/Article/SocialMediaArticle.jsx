import React from 'react'
import SocialMediaBar from '../SocialMediaBar/SocialMediaBar'
import ArticleWrapper from './ArticleWrapper/ArticleWrapper'

const SocialMediaArticle = () => (
  <ArticleWrapper title="SOCIAL MEDIA">
    <section className="ah-article-info-wrapper">
      <div className="ah-article-info-paragraph ah-article-info-paragraph--list">
        FOLLOW ADAM HELDRING
        <SocialMediaBar lightBackground></SocialMediaBar>
      </div>
    </section>
  </ArticleWrapper>
)

export default SocialMediaArticle
