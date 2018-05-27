import userAPI from '../api/user_api';

export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';

export const receiveAllUsers = users => ({
	type: RECEIVE_ALL_USERS,
	users
});

export const requestAllUsers = () => dispatch => (
	userAPI.getAllUsers()
	.then(users => {
		console.log("users => ", users);
		dispatch(receiveAllUsers(users))
	})
);
