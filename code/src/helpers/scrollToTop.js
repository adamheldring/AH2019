const scrollToTop = ({ behaviorType = 'auto' }) => {
  if (typeof window !== 'undefined') {
    window.scroll({ top: 0, left: 0, behavior: behaviorType })
  }
}

export default scrollToTop
