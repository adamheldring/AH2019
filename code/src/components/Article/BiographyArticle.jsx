import React from 'react'
import Img from 'gatsby-image'
import ArticleWrapper from './ArticleWrapper/ArticleWrapper'

const BiographyArticle = ({ portrait }) => (
  <ArticleWrapper title="BIOGRAPHY">
    <section className="ah-article-visual--image-wide-container">
      <Img fluid={portrait.childImageSharp.fluid} />
    </section>
    <section className="ah-article-info-wrapper">
      <div className="ah-article-info-paragraph ah-article-info-paragraph--block">
        <h2 className="ah-article-info-paragraph-heading ah-article-info-paragraph-heading--space">
          Adam Heldring
        </h2>
        <p style={{ marginBottom: '20px' }}>
          <b>
            Adam Heldring released two Ep:s and the debut album ”Mount
            Foreverest” in quick succession which generated wide interest both
            at home in Sweden and on international ground.
          </b>
          <br />
          <br />
          More than a hundred live shows as well as TV and radio appearances
          followed in the US, UK, Sweden, Norway and Finland. He was nominated
          for the Swedish music prize ”Rockbjörnen” and played festivals in New
          York, Texas and Brighton. The latest release ”True North EP” from 2010
          including the indie-hit ”Bear Town” was crowned with a series of sold
          out theater shows at the City Theater in his home town Eskilstuna
          among other places. <br />
          <br />
          Then things suddenly went quiet. Heldring announced a break from the
          spotlight and spent months on the move in Los Angeles, Berlin and
          Paris – constantly writing on the music for his second album. The
          record has come together during a series of silent years behind locked
          studio doors and under great secrecy. <br />
          <br />
          <i>
            The first single "You/More" was released in 2019 and the full second
            album is expected in 2020.
          </i>
        </p>
      </div>
    </section>
  </ArticleWrapper>
)
export default BiographyArticle
