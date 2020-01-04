import { combineReducers } from 'redux';
import PlaceReducer from './placeReducer';

const rootReducer = combineReducers({
    place: PlaceReducer,
});

export default rootReducer;