import { createAction, Action } from 'redux-actions';
import { assign } from 'lodash';

export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const ADD_NODE = 'ADD_NODE';

export const currentInputValue = (newText: string) => {
	return {
		type: 'CHANGE_INPUT_VALUE',
		payload: newText
	}
};

export const nodeValue = (newText: string) => {
	return {
		type: 'ADD_NODE',
		payload: newText
	}
};