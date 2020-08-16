// başka reducer gelirse combine et

import authReducer from './authReducer'
import CardsDetailReducer from './CardsDetailReducer'
import ContentCardsDetailReducer from './ContentCardsDetailReducer'
import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'


const rootReducer = combineReducers({
    auth: authReducer,
    cardDetail : CardsDetailReducer,
    contentCardDetail : ContentCardsDetailReducer,
    firebase : firebaseReducer
})

export default rootReducer