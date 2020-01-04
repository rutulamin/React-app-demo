import { ADD_PLACE, CLOSE_PLACE, DELETE_PLACE, SELECT_PLACE } from '../types/placeTypes';

export const addPlace = (placeName: any) => {
    return {
        type: ADD_PLACE,
        payload: placeName,
    }
}

export const selectPlace = (placeId: any) => {
    return {
        type: SELECT_PLACE,
        payload: placeId,
    }
}

export const closePlace = () => {
    return {
        type: CLOSE_PLACE,
    }
}

export const deletePlace = (placeId: any) => {
    return {
        type: DELETE_PLACE,
        payload: placeId,
    }
}