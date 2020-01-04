import { ADD_PLACE, CLOSE_PLACE, DELETE_PLACE, SELECT_PLACE } from '../types/placeTypes';

const initialState = {
    places: [],
	selectedPlace: null,
}

const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_PLACE:
            return {
                ...state,
                places: [...state.places, action.payload],
            }
        case SELECT_PLACE:
            return {
                ...state,
                selectedPlace: state.places.filter((e: any) => e['key'] === action.payload)[0],
            }
        case CLOSE_PLACE:
            return {
                ...state,
                selectedPlace: null,
            }
        case DELETE_PLACE: 
            return {
                ...state,
                places: state.places.filter((e: any) => e['key'] !== action.payload),
                selectedPlace: null,
            }
        default: 
            return state;
    }
}

export default reducer;