import { combineReducers } from 'redux';

//SELECT_MOVIE

// ADD_MOVIES

//SET_VALUE

const selectedMovies = (state = [], action) => {
  switch (action.type) {
    case 'SELECT_MOVIE':
      return [
          ...state,
          action.payload
      ]
    default:
      return state

  }
}
const optionMovies  = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_DATA':
      return [
        ...action.payload
      ]
    default:
      return state
  }
}

const valueSearch = (state = '', action) => {
  switch (action.type) {
    case 'SET_VALUE':
      return action.payload
    default:
      return state
  }
}

const movieApp = combineReducers({
  selectedMovies,
  optionMovies,
  valueSearch
})

export default movieApp;
