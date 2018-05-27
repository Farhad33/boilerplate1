const baseUrl = 'http://localhost:3000/api';


export default {

	signup(data) {
		return $.ajax({
			url: `${baseUrl}/users/signup`,
			method: 'POST',
			data
		});
	},

	signin(data) {
		return $.ajax({
			url: `${baseUrl}/users/signin`,
			method: 'POST',
			data
		});
	}

};
