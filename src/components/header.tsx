import '../styles/Header.css';
import '../styles/App.css';
import '../styles/Index.css';
import React from 'react';

const Header: React.FC = () => {
	return (
		<header>
			<div className='my-name'>
				<h1>Sam Bowditch</h1>
				<h2>Software Developer Resume</h2>
			</div>
			<div className='site-description'>
				<p>Determined to start my journey to become a software developer.</p>
			</div>
		</header>
	);
};

export default Header;
