const reducer1 = (state = {isDarkMode: false}, action) => {
  switch (action.type) {
    case 'TOGGLE_DARKMODE':
      return Object.assign({}, state, {
        isDarkMode: !state.isDarkMode
      })
    default:
      return state
  }
}

export default reducer1
