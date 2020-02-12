import { ADD_PLACE, DELETE_PLACE } from '../types/placeTypes';

export const addPlace = (placeName: any) => {
    return {
        type: ADD_PLACE,
        payload: placeName,
    }
}

export const deletePlace = (placeId: any) => {
    return {
        type: DELETE_PLACE,
        payload: placeId,
    }
}