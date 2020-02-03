const scrollToAnchorPoint = (refElement, condition) => {
  if (refElement.current && condition) {
    refElement.current.scrollIntoView()
    window.scrollBy(0, 1)
  }
}

export default scrollToAnchorPoint
