import React from 'react'
import styled from 'styled-components';
import Menu from './Menu'


class Homepage extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<Menu />
				Homepage
			</div>
		);
	}
}

export default Homepage;
