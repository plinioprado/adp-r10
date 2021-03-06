import { combineReducers } from 'redux'

import { NavigationReducer } from '@expo/ex-navigation';
import { AboutReducer } from './modules/about'
import { ScheduleReducer } from './modules/schedule'
import { SessionReducer } from './modules/session'

export default combineReducers({
  navigation: NavigationReducer,
  about: AboutReducer,
  schedule: ScheduleReducer,
  session: SessionReducer
}) 
