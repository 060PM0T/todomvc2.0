import { assign } from 'lodash';
import { handleActions, Action } from 'redux-actions';
import { IListState } from './model';

import {
	CHANGE_INPUT_VALUE
} from './actions';

const initialState: IListState = {
	currentInputValue: '',
	nodeList: []
}

export default function reduser(state = initialState, action) {
	switch (action.type) {
		case 'CHANGE_INPUT_VALUE':
			return {
				...state, currentInputValue: action.payload
			}
		case 'ADD_NODE':
			let newNodeList = [...state.nodeList, action.payload]
			return {
				...state, nodeList: newNodeList
			}
		default:
			return initialState;
	}

}
 