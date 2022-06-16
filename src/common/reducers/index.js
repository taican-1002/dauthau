import { combineReducer } from 'redux'

import Auth from './auth.reducer';
import Profile from './profile.reducerr'

export default combineReducer({
    auth: Auth,
    profile: Profile
})