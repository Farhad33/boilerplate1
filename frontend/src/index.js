import React from 'react'
import ReactDOM from 'react-dom'
import Root from './Root';
import configureStore from './store';
const $ = require('jquery');

document.addEventListener('DOMContentLoaded', () => {
	let store;
	store = configureStore();
	const main = document.querySelector('main');
	window.$ = $;
	window.store = store;
	ReactDOM.render(<Root store={store} />, main);
})
