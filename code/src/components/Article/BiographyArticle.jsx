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
            Adam Heldring released two EPs and the debut album ”Mount
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
          studio doors and under great secrecy. The full second album "Ports of
          Call" will be released on May 7, 2021. <br />
          <br />
          Childhood and future come crashing together with the tear between
          metropolis and solitude. ”Ports of Call” is a world where chairs are
          broken over people’s backs and dreams are broken by their own weight.
          Vagabonds and bartenders in hillbilly towns and Hollywood share an
          undeniable nostalgia without wanting to go back. The album title
          refers to the list of ports where a ship stops on its way to the final
          destination. A theme that ties the eleven tracks together like a red
          thread woven around pins in a map.
        </p>
      </div>
    </section>
  </ArticleWrapper>
)
export default BiographyArticle
