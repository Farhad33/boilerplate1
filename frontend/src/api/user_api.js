const baseUrl = 'http://localhost:3000/api';
const token = `Bearer ${getToken()}`;

export default {

	getAllUsers() {
		return $.ajax({
			url: `${baseUrl}/users`,
			method: 'GET',
			beforeSend: function(request) {
				request.setRequestHeader("Authorization", token);
			}
		});
	}

};

function getToken() {
	const storage = window.localStorage;
	return storage.getItem('token');
}
