import { createStore as reduxCreateStore } from "redux"

const reducer = (state, action) => {
  if (action.type === `LOGIN_SUCCESS`) {
    return Object.assign({}, state, {
      userLogedIn: true
    })
  } else if (action.type === `SHOW_MODAL`) {
    return Object.assign({}, state, {
        authModalActive: true
      })
  } else if (action.type === `HIDE_MODAL`) {
    return Object.assign({}, state, {
        authModalActive: false
      })
  } else {
    return state
  }
}

const initialState = { 
    userLogedIn: false,
    authModalActive: false 
}

const createStore = () => reduxCreateStore(reducer, initialState)
export default createStore