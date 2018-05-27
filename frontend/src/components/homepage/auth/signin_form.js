import { connect } from 'react-redux';
import React from 'react';
import { openModal, closeModal } from '../../../actions/modal_actions';
import { signin } from '../../../actions/auth_actions';
import { withRouter } from 'react-router-dom';
import merge from 'lodash/merge';
import styled from 'styled-components';

class SigninForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	update(field) {
		return (e) => {
			this.setState({[field]: e.target.value});
		};
	}

	handleSubmit(e) {
		e.preventDefault();
		console.log("SigninForm ", this.props);
		this.props.signin(this.state)
		.then(() => this.props.closeModal());
	}

	render() {
		return (
			<div>
				<ModalForm onSubmit={this.handleSubmit}>
					<br />
					<OuterSignin>
						<SigninFormC>
							<H2>Sign in</H2>
							<Input
								type="text"
								value={this.state.email}
								onChange={this.update('email')}
								placeholder="Your email"
								/>
							<br />
							<Input
								type="password"
								value={this.state.password}
								onChange={this.update('password')}
								placeholder="Password"
								/>
							<br />
							<Button>Let's go!</Button>
						</SigninFormC>
						<br />
				</OuterSignin>
				</ModalForm>
			</div>
		);
	}
}


const Button = styled.button`
	border: none;
	margin-top: 10px;
	background-color: #4c7bd9;
	color: white;
	width: 180px;
	height: 40px;
	font-size: 12px;
	font-weight: lighter;
`;

const Input = styled.input`
	border: 1px solid #ccd0da;
	margin-bottom: 10px;
	line-height: 30px;
	padding: 3px;
	background-color: #ffffff;
	font-size: 12px;
	width: 180px;
	&:focus {
		border: 2px solid #9dbaf2;
		border-style:solid
	}
`;

const H2 = styled.h2`
	margin: 15px 0;
`;
const SigninFormC = styled.div`
	width: 200px;
	height: 250px;
	text-align: center;
	margin: 0 auto;
`;

const OuterSignin = styled.div`
	border-radius: 10px;
	width: 200px;
	height: 250px;
	padding: 20px 30px;
	background-color: #f3f5f9;
	border-collapse: separate;
`;

const ModalForm = styled.form`
	height: 100%;
	background-color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	align-content: center;
`;



const mapDispatchToProps = dispatch => ({
	signin: (user) => dispatch(signin(user)),
	closeModal: () => dispatch(closeModal())
});

export default connect(null, mapDispatchToProps)(SigninForm);
