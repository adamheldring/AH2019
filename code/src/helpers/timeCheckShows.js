// Takes in an array of concert objects which is split and returned as
// two separate arrays with upcoming and past
export const timeCheckShows = shows => ({
  future: [shows[0]],
  past: shows.slice(1),
})

// TEST check what happens if only one object meets criteria
