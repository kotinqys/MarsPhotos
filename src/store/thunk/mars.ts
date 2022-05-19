import axios from 'axios'
import { Dispatch } from 'react'
import { AllActions, setLoading, setMarsPhotos } from '../actions/mars'


export const fetchMarsPhotos = ():any => {
    return async (dispatch:Dispatch<AllActions>):Promise<void> => {
        try {
            dispatch(setLoading(true))
            const url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&api_key=qCtZ9q5n7ZRgwwinxisuRV17xwfyAFpMfDPV9kWb'
            const data = await axios.get(url)       
            dispatch(setMarsPhotos(data.data.photos))
            dispatch(setLoading(false))
        }
        catch (e) {
            dispatch(setLoading(false))
            console.log(e);
        }
    }
}

interface IfetchFilterMarshPhotos {
    value: String,
    camera:String
}

export const fetchMarshPhotosBySol:any = ({value,camera}:IfetchFilterMarshPhotos) => {
    return async(dispatch: Dispatch<AllActions>):Promise<void> => {
        try {
            dispatch(setLoading(true))
            const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${value}&camera=${camera}&api_key=qCtZ9q5n7ZRgwwinxisuRV17xwfyAFpMfDPV9kWb`
            const data = await axios.get(url)
            dispatch(setMarsPhotos(data.data.photos))
            dispatch(setLoading(false))
        }catch (e) {
            dispatch(setLoading(false))
            console.log(e);
        }
    }
}


export const fetchMarshPhotosByDate:any= ({value,camera}:IfetchFilterMarshPhotos) => {
    return async (dispatch: Dispatch<AllActions>):Promise<void> => {
        try {
            dispatch(setLoading(true))
            const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${value}&camera=${camera}&api_key=qCtZ9q5n7ZRgwwinxisuRV17xwfyAFpMfDPV9kWb`
            const data = await axios.get(url)
            dispatch(setMarsPhotos(data.data.photos))
            dispatch(setLoading(false))
        }catch (e) {
            dispatch(setLoading(false))
            console.log(e);
        }
    }
}


