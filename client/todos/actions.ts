import { createAction, Action } from 'redux-actions';
import { assign } from 'lodash';
import { Dispatch } from 'redux';
import { Promise } from 'es6-promise';
import { arrayData, arrayState, IArrayData } from './arraydata';

// export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
// export const REQUEST_HINT_LIST = 'REQUEST_NODE_LIST;';
// export const REQUEST_STATUS = 'REQUEST_STATUS';

export const dispatchHintList = (text: string, dispatch: Dispatch<{}>) => {
 	dispatch(requestStatus(true));
 	let promise = getAssyncHintList(text, dispatch);
 	promise.then(
 		function(result:any){
 			dispatch(requestStatus(false));
 			dispatch(requestHintList(result));
 		});
};

const getAssyncHintList = (text: string, dispatch: Dispatch<{}>) => {
	let promise = new Promise((resolve) => {
	    setTimeout(() => {
	  		let hintList = [];
	  		for (let i = 0; i < arrayData.length; i++ ){
	    		if (arrayData[i].name.toLowerCase().indexOf(text.toLowerCase()) === 0 ){
	        		hintList.push(arrayData[i]);
	        	}
	        } 
	        if (hintList.length === 0){
	        	hintList.push(arrayState[0])
	        }
	        else {
	        	hintList
	        }
	    	resolve(hintList);
	    }, 2000)
	});
	return promise;
};

export const requestHintList = (newText: string) => {
	return {
		type: 'REQUEST_HINT_LIST',
		payload: newText
	}
};

export const requestStatus = (status: boolean) => {
	return {
		type: 'REQUEST_STATUS',
		payload: status
	}
};

export const dispatchCurrentInputValue = (newText: string, dispatch: Dispatch<{}>) => {
	dispatch(currentInputValue(newText));
};

export const currentInputValue = (newText: string) => {
	return {
		type: 'CHANGE_INPUT_VALUE',
		payload: newText
	}
};