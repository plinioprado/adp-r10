import { createRouter } from '@expo/ex-navigation';

import About from '../scenes/About'
import AppMap from '../scenes/AppMap'
import Faves from '../scenes/Faves/'
import NavigationLayout from './NavigationLayout'
import Session from '../scenes/Session'
import Schedule from '../scenes/Schedule'

const Router = createRouter(() => ({
  navigation: () => NavigationLayout,
  schedule: () => Schedule,
  appMap: () => AppMap,
  faves: () => Faves,
  about: () => About,
  session: () => Session
}))

export default Router
