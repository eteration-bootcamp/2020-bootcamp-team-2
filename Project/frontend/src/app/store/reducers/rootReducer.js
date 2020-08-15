// başka reducer gelirse combine et

import authReducer from './authReducer'
import CardsDetailReducer from './CardsDetailReducer'
import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'


const rootReducer = combineReducers({
    auth: authReducer,
    cardDetail : CardsDetailReducer,
    firebase : firebaseReducer
})

export default rootReducer