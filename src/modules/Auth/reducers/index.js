import { combineReducer } from 'redux'

import Login from './login.reducer'
import register from './register.reducer'

export default combineReducer({
    login: Login,
    register: register
})