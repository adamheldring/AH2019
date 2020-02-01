// Takes in an array of concert objects which is split and returned as
// two separate arrays with upcoming and past

export const timeCheckShows = shows => {
  const timeSplitShows = {
    future: [],
    past: [],
  }
  const todayAtMidnight = new Date().setHours(0, 0, 0, 0)
  shows.forEach(show => {
    const showDayAtMidnight = new Date(show.date).setHours(0, 0, 0, 0)
    if (showDayAtMidnight >= todayAtMidnight) {
      timeSplitShows.future.push(show)
    } else {
      timeSplitShows.past.push(show)
    }
  })

  // Reverse the array of future shows to display the nearest upcoming show on top,
  // while leaving the past array in original order and thus display the latest show on top.
  timeSplitShows.future.reverse()
  return timeSplitShows
}
