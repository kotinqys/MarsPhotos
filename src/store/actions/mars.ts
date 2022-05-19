import { MarsPhoto } from "../types/type";

export const setMarsPhotos = (photos:MarsPhoto[]) => ({
    type: 'SET_MARSH_PHOTOS',
    payload:photos
})

export const setLoading = (loading:boolean) => ({
    type: 'SET_LOADING',
    payload:loading
})