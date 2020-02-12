import { combineReducers } from 'redux';
import PlaceReducer from './placeReducer';
import { reducer as reduxFormReducer } from 'redux-form';

const rootReducer = combineReducers({
    place: PlaceReducer,
    form: reduxFormReducer  // mounted under "form"
});

export default rootReducer;