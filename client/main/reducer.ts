import { combineReducers } from 'redux';

import { reducer } from '../todos';


const rootReducer = combineReducers({
	reduser: reducer
});

export default rootReducer;
