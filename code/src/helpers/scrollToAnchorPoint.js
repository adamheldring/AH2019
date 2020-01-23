const scrollToAnchorPoint = refElement => {
  if (refElement.current) {
    refElement.current.scrollIntoView()
    window.scrollBy(0, 1)
  }
}

export default scrollToAnchorPoint
