import { RECEIVE_ALL_USERS } from '../actions/user_actions';

const userReducer = (state = null, action) => {
	switch (action.type) {
		case RECEIVE_ALL_USERS:
			console.log("userReducer action => ", action);
			return action.users
		default:
			return state;
	}
};

export default userReducer;
