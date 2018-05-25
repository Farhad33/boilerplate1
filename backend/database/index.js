const pgp = require('pg-promise')();
const config = {
	host: 'localhost',
	port: '5432',
	database: 'boilerplate1'
};
const db = pgp(config);

module.exports = {

	updateUser({ name, email, password, img_url }, id) {
		const sql = `
			UPDATE
				users
			SET
				name = $1, email = $2,
				password = $3, img_url = $4
			WHERE
				id = $5
			RETURNING
				id
		`
		return this.db.one(sql, [name, email, password, img_url, id]);
	},

	createUser({ name, email, img_url }, hash) {
		const sql = `
			INSERT INTO
				users (name, email, password, img_url)
			VALUES
				($1, $2, $3, $4)
			RETURNING
				id, email
		`
		return this.db.one(sql, [name, email, hash, img_url]);
	},

	findUserByEmail(email) {
		const sql = `
			SELECT
				*
			FROM
				users
			WHERE
				email = $1
		`
		return this.db.any(sql, [email]);
	}

};
