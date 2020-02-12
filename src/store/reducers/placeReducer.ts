import { ADD_PLACE, DELETE_PLACE } from '../types/placeTypes';

const initialState = {
    places: [],
}

const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_PLACE:
            return {
                ...state,
                places: [...state.places, action.payload],
            }
        case DELETE_PLACE: 
            return {
                ...state,
                places: state.places.filter((e: any) => e['key'] !== action.payload),
            }
        default: 
            return state;
    }
}

export default reducer;