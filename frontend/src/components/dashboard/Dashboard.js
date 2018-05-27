import React from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';
import { requestAllUsers } from '../../actions/user_actions';
import { selectAllUsers } from '../../selectors/selectors';

class Dashboard extends React.Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		this.props.requestAllUsers()
	}

	render() {
		return (
			<div>
				Dashboard
				{this.props.users.map((user) => (
					<p key={user.id}>{user.email}</p>
				))}
			</div>
		);
	}
}

const mapStateToProps = state => ({
	users: selectAllUsers(state)
});

const mapDispatchToProps = dispatch => ({
	requestAllUsers: () => dispatch(requestAllUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
