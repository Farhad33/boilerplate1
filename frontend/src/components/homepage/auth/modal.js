import React from 'react';
import { closeModal } from '../../../actions/modal_actions';
import { connect } from 'react-redux';
import SigninForm from './signin_form';
import SignupForm from './signup_form';
import styled from 'styled-components';

function Modal({modal, closeModal}) {
	console.log("Modal");
	if (!modal) {
		return null;
	}
	let component;
	switch (modal) {
		case 'signin':
			component = <SigninForm />;
			break;
		case 'signup':
			component = <SignupForm />;
			break;
		default:
			return null;
	}
	return (
		<ModalBackground onClick={closeModal}>
			<ModalChild onClick={e => e.stopPropagation()}>
				{ component }
			</ModalChild>
		</ModalBackground>
	);
}

const ModalChild = styled.div`
	position: absolute;
	top: 30%;
	left: 50%;
	transform: translate(-50%, -50%);
`;
const ModalBackground = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	background: rgba(0, 0, 0, 0.7);
	z-index: 10;
`;

const mapStateToProps = state => ({
	modal: state.ui.modal
});

const mapDispatchToProps = dispatch => {
	return {
		closeModal: () => dispatch(closeModal())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
