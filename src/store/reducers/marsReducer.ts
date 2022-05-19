import { MarsPhoto } from "../types/type"

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
            case 'SET_MARSH_PHOTOS':
                return { ...state, photos: [...action.payload] }
            case 'SET_LOADING':
                return {...state,loading:action.payload}
            default:
                return state
        }
}


export default marsReducer