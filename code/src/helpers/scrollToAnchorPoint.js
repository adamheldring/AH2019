const scrollToAnchorPoint = (refElement, condition) => {
  if (refElement.current && condition && window !== 'undefined') {
    refElement.current.scrollIntoView()
    window.scrollBy(0, 1)
  }
}

export default scrollToAnchorPoint
