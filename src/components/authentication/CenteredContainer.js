import React from 'react';
import { Container } from 'react-bootstrap';

export default function CenteredContainer({ children }) {
	return (
		<Container
			className='d-flex align-items-center justify-content-center'
			// Total height - header - footer
			style={{ height: 'calc(100vh - 54px - 62px)' }}
		>
			{children}
		</Container>
	);
}
