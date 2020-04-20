const reducer1 = {
  toggleDarkMode: () => {
    return (dispatch) => {
      dispatch({
        type: 'TOGGLE_DARKMODE'
      })
    }
  },
  togglePortfolioFilter: (name) => {
    return (dispatch) => {
      dispatch({
        type: 'TOGGLE_PORTFOLIO_FILTER',
        name
      })
    }
  }
}

export default reducer1
