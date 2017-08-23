import { createRouter } from '@expo/ex-navigation';

import About from '../scenes/About'
import Session from '../scenes/Session'
import Fave from '../scenes/Fave/'
import NavigationLayout from './NavigationLayout'

const Router = createRouter(() => ({
  about: () => About,
  session: () => Session,
  fave: () => Fave,
  navigation: () => NavigationLayout
}))

export default Router
