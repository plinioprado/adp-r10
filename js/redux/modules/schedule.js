// Reducers

const SCHEDULE_LOAD = 'SCHEDULE_LOAD'

const initialState = {
  isLoading: true,
  data: []
}

export function ScheduleReducer(state = initialState, action) {
  switch (action.type) {
    case SCHEDULE_LOAD:
      return {
        isLoading: false,
        data: action.payload
      }
    default:
      return state
  }
}

// Action creators

export function scheduleLoad(data) {
  return {
    type: SCHEDULE_LOAD,
    payload: data
  }
}

// Thunk

export function scheduleFetch() {
  return function(dispatch) {
    let endPoint = 'https://r10app-95fea.firebaseio.com/sessions.json'
    fetch(endPoint)
      .then(response =>response.json())
      .then(json => {
        const data = json
        dispatch(scheduleLoad(data))
      })
      .catch(error => console.log(`Error loading Sessions: ${error}`))
  }
}
