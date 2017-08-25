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
      console.log('will reduce1')
      return {
        isLoading: false,
        data: action.payload
      }
    case TOGGLE_FAV:
      //const session = state.data.find(item=> (item.id === id))
      //console.log('session',session)
      console.log('will reduce2')
      // return {
      //   ...isLoading,
      //   ...data
      // }
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

// TODO: call reducer and update store
export function toggleFav(id) {
  console.log('will toggle '+id)
  const toggle = faveToggle(id)
  console.log('toggled to '+toggle)
  return {
    type: TOGGLE_FAV,
    payload: {
      id: id,
      toggle: toggle
    }
  }
}

// Thunk

export function scheduleFetch() {
  return function(dispatch) {
    let endPoint = 'https://r10app-95fea.firebaseio.com/sessions.json'
    fetch(endPoint)
      .then(response =>response.json())
      .then(json => {
        // get faves
        const faveList = favesQuery()
        console.log('faveList', faveList)

        // add faves to schedule TODO: use spread operator 
        const data = json.map(item => {
          item.fav = !!faveList.find(it => (it.id === item.session_id))
          return item})
        dispatch(scheduleLoad(data))
      })
      .catch(error => console.log(`Error loading Sessions: ${error}`))
  }
}
