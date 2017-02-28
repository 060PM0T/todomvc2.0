import { assign } from 'lodash';
import { handleActions, Action } from 'redux-actions';
import { IListState } from './model';

const initialState: IListState = {
	currentInputValue: '',
	hintList: []
}

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case 'CHANGE_INPUT_VALUE':
			return {
				...state, currentInputValue: action.payload
			}
		case 'REQUEST_HINT_LIST':
			return {
				...state, hintList:  action.payload
			}
		case 'REQUEST_STATUS':{
			return {
				...state, fetchStatus:  action.payload
			}
		}
		default:
			return state;
	 }

}
 