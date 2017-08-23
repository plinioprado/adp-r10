// Reducers

const SESSION_LOAD = 'SESSION_LOAD'

const initialState = {
  isLoading: true,
  data: []
}

export function SessionReducer(state = initialState, action) {
  switch (action.type) {
    case SESSION_LOAD:
      return {
        isLoading: false,
        data: action.payload
      }
    default:
      return state
  }
}

// Action creators

export function sessionLoad(data) {
  return {
    type: SESSION_LOAD,
    payload: data
  }
}

// Thunk

export function sessionFetch() {
  return function(dispatch) {
    let endPoint = 'https://r10app-95fea.firebaseio.com/sessions.json'
    fetch(endPoint)
      .then(response =>response.json())
      .then(json => {
        const data = json
        dispatch(sessionLoad(data))
      })
      .catch(error => console.log(`Error loading Sessions: ${error}`))
  }
}