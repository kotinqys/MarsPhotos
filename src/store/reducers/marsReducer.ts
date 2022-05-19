import { MarsPhoto } from "../types/type"
import {IAction} from '../actions/mars'

type InitialStateType = {
    photos: MarsPhoto[],
    loading:boolean
}

let initialState:InitialStateType = {
    photos: [],
    loading: false
}

const marsReducer = (state = initialState, action:any):InitialStateType => {
        switch (action.type) {
            case IAction.SET_MARS_PHOTOS:
                return { ...state, photos: [...action.payload] }
            case IAction.SET_LOADING:
                return {...state,loading:action.payload}
            default:
                return state
        }
}


export default marsReducer