const reducer1 = (state = {
  isDarkMode: false,
  activePortfolio: 'all'
}, action) => {
  switch (action.type) {
    case 'TOGGLE_DARKMODE':
      return Object.assign({}, state, {
        isDarkMode: !state.isDarkMode
      })
    case 'TOGGLE_PORTFOLIO_FILTER':
      console.log('TOOGLE PORT')
      return Object.assign({}, state, {
        activePortfolio: action.name
      })
    default:
      return state
  }
}

export default reducer1
