// Reducers

const ABOUT_LOAD = 'ABOUT_LOAD'

const initialState = {
  isLoading: true,
  data: []
}

export function AboutReducer(state = initialState, action) {
  switch (action.type) {
    case ABOUT_LOAD:
      return {
        isLoading: false,
        data: action.payload
      }
    default:
      return state
  }
}

// Action creators

export function aboutLoad(data) {
  return {
    type: ABOUT_LOAD,
    payload: data
  }
}

// Thunk

export function aboutFetch() {
  return function(dispatch) {
    let endPoint = 'https://r10app-95fea.firebaseio.com/code_of_conduct.json'
    fetch(endPoint)
      .then(response =>response.json())
      .then(json => {
        const data = json
        dispatch(aboutLoad(data))
      })
      .catch(error => console.log(`Error loading About: ${error}`))
  }
}