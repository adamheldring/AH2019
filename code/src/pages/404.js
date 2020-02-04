import React, { Fragment, useContext, useEffect } from 'react'
import ErrorArticle from '../components/Article/ErrorArticle'
import { ahContext } from '../helpers/ahContext'
import SEO from '../components/seo'

const NotFoundPage = () => {
  const { setIsErrorView } = useContext(ahContext)
  useEffect(() => {
    setIsErrorView(true)
    window.scrollTo(0, 0)
    return () => setIsErrorView(false)
  }, [setIsErrorView])

  return (
    <Fragment>
      <SEO title="404: Not found" />
      <div className="ah-page">
        <ErrorArticle title="OOOPS!">
          <h1>404 - NOT FOUND</h1>
          <h1 style={{ fontSize: '100px' }}>😬</h1>
          <p>Sorry... you just hit a route that doesn&#39;t exist.</p>
        </ErrorArticle>
      </div>
    </Fragment>
  )
}

export default NotFoundPage
