const scrollToTop = ({ behaviorType = 'auto' }) => {
  if (window !== 'undefined') {
    window.scroll({ top: 0, left: 0, behavior: behaviorType })
  }
}

export default scrollToTop
