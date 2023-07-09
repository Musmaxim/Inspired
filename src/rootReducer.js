import { combineReducers } from "@reduxjs/toolkit";
import navigationReducer from './features/navigationSlice'
import colorReducer from './features/colorSlice'

export const rootReducer = combineReducers({
    navigation:navigationReducer,
    color:colorReducer,
})