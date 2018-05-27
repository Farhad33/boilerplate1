const pgp = require('pg-promise')();
const { dbConfig } = require('../config');
const db = pgp(dbConfig);

module.exports = {

	getAllUsers() {
		const sql = `
			SELECT
				*
			FROM
				users
		`
		return db.any(sql);
	},

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
		return db.one(sql, [name, email, password, img_url, id]);
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
		return db.one(sql, [name, email, hash, img_url]);
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
		return db.any(sql, [email]);
	}

};
