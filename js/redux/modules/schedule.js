// Reducers
import { queryFaves } from '../../config/modules'

const SCHEDULE_LOAD = 'SCHEDULE_LOAD'
const TOGGLE_FAV = 'TOGGLE_FAV'

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
    case TOGGLE_FAV:
      return state
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

export function toggleFav(id) {
  console.log('toggling')
}

// Thunk

export function scheduleFetch() {
  return function(dispatch) {
    let endPoint = 'https://r10app-95fea.firebaseio.com/sessions.json'
    fetch(endPoint)
      .then(response =>response.json())
      .then(json => {
        // get faves
        console.log('faveList')
        const faveList = queryFaves()
        console.log(faveList)

        // add faves to schedule
        const data = json.map(item => {item.fav = false; return item})
        dispatch(scheduleLoad(data))
      })
      .catch(error => console.log(`Error loading Sessions: ${error}`))
  }
}
