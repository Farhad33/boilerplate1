import React from 'react'
import styled from 'styled-components';
import Modal from './auth/modal';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import { signout } from '../../actions/auth_actions';

class Menu extends React.Component {
	constructor(props) {
		super(props);
		console.log("Menu props => ", this.props);
	}
	render() {
		const { currentUser } = this.props;
		const log = currentUser ? (
			<Button onClick={() => this.props.signout()} >Sign out</Button>
		) : (
			<div>
				<Button>Demo User</Button>
				<Button onClick={() => this.props.openModal('signin')}>Sign in</Button>
				<Button onClick={() => this.props.openModal('signup')}>Sign up</Button>
			</div>
		);
		return (
			<div>
				<Modal />
				<MenuBar>
					{log}
				</MenuBar>
			</div>
		);
	}
}

const MenuBar = styled.div`
	height: 80px;
	width: 100%;
	background: lightblue;
	text-align: right;
`;

const Button = styled.a`
	display: inline-block;
	border-radius: 3px;
	padding: .5rem 1rem;
	margin: 1rem;
	background: transparent;
	color: black;
	font-size: 20px;
	&:hover {
		background: #02C39A;
		cursor: pointer;
		color: white;
	}
	&:active {
		background: #00A896;
		color: white;
	}
`;


const mapStateToProps = state => ({
	currentUser: state.currentUser
});

const mapDispatchToProps = dispatch => ({
	openModal: modal => dispatch(openModal(modal)),
	signout: () => dispatch(signout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
