const reducer1 = {
  toggleDarkMode: () => {
    return (dispatch) => {
      dispatch({
        type: 'TOGGLE_DARKMODE'
      })
    }
  }
}

export default reducer1
