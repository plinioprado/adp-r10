import { combineReducers } from 'redux'

import { NavigationReducer } from '@expo/ex-navigation';
import { AboutReducer } from './modules/about'
import { SessionReducer } from './modules/session'

export default combineReducers({
  navigation: NavigationReducer,
  about: AboutReducer,
  session: SessionReducer
}) 
