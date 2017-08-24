// Reducers

import { formatDataObject } from '../../lib/dataFormatHelpers'

const SESSION_LOAD = 'SESSION_LOAD'

const initialState = {
  isLoading: true,
  data: []
}

export function SessionReducer(state = initialState, action) {
  switch (action.type) {
    case SESSION_LOAD:
      return {
        ...state,
        loading: false,
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

export function sessionFetch(id) {
  console.log('id', id)
  return function(dispatch) {
    let endPoint = `https://r10app-95fea.firebaseio.com/speakers.json?orderBy=%22speaker_id%22&equalTo=%22${id}%22`
    fetch(endPoint)
      .then(response =>response.json())
      .then(json => {
        const data = json
        dispatch(sessionLoad(formatDataObject(data)))
      })
      .catch(error => console.log(`Error loading Sessions: ${error}`))
  }
}
