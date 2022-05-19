import { MarsPhoto } from "../types/type";

export enum IAction {
    SET_MARS_PHOTOS = 'SET_MARS_PHOTOS',
    SET_LOADING = 'SET_LOADING'
}


export interface IsetMarsPhotos {
    type: IAction
    payload:MarsPhoto[]
}

export interface IsetLoading {
    type: IAction
    payload:boolean
}

export const setMarsPhotos = (photos:MarsPhoto[]) => ({
    type: IAction.SET_MARS_PHOTOS,
    payload:photos
})

export const setLoading = (loading:boolean) => ({
    type: IAction.SET_LOADING,
    payload:loading
})

export type AllActions = IsetMarsPhotos|IsetLoading