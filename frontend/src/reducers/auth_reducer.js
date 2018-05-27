import merge from 'lodash/merge';
import { RECEIVE_CURRENT_USER } from '../actions/auth_actions';


const authReducer = (state = null, action) => {
	console.log("action => ", action);
	switch (action.type) {
		case RECEIVE_CURRENT_USER:
			console.log("action => ", action);
			return action.user ? action.user : null
		default:
			return getCurrentUser();
	}
};

function getCurrentUser() {
	const storage = window.localStorage;
	const currentUser = storage.getItem('currentUser');
	return currentUser == null ? null : JSON.parse(currentUser);
}


export default authReducer;
