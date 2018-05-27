import { combineReducers } from 'redux';
import ui from './ui_reducer';
import auth from './auth_reducer';
import users from './user_reducer';

const rootReducer = combineReducers({
	ui,
	currentUser: auth,
	users
});

export default rootReducer;
