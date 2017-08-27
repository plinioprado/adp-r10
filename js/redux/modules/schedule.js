// Reducers
import { favesQuery, faveToggle } from '../../config/modules'

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
      const newData = this.state.data.map((item) => { 
        if (item.session_id === action.payload.id ) { item.fav = action.payload.fav } 
        return item
      });
      return {
        isLoading: false,
        data: newData
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

// TODO: call reducer and update store
export function toggleFav(item) {
  item.fav = faveToggle(item.session_id)
  return {
    type: TOGGLE_FAV,
    payload: item
  }
}

// Thunk

export function scheduleFetch() {
  return function(dispatch) {
    let endPoint = 'https://r10app-95fea.firebaseio.com/sessions.json'
    fetch(endPoint)
      .then(response =>response.json())
      .then(json => {
        const faveList = favesQuery()
        const data = json.map(item => {
          item.fav = !!faveList.find(it => (it.id === item.session_id))
          return item})
        dispatch(scheduleLoad(data))
      })
      .catch(error => console.log(`Error loading Sessions: ${error}`))
  }
}
