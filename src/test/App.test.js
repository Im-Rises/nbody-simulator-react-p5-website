/* eslint-disable no-undef */
import {render, screen} from '@testing-library/react';
import React from 'react';
import App from '../App';

test('renders learn react link', () => {
	render(<App/>);
	const canvasElement = screen.getByTestId('react-p5');
	expect(canvasElement).toBeInTheDocument();
});
