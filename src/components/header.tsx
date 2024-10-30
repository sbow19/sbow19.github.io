import '../styles/index.css';
import '../styles/App.css';
import React from 'react';
import { Link, useLocation, useMatch } from 'react-router-dom';

const Header: React.FC = () => {

	const location = useLocation();

	const match = useMatch("/projects/:name");

	let navDetails = {}

	switch (location.pathname) {
        case "/about":
            navDetails = {
                linkName: "My Projects",
                linkPath: "/projects"
            };
            break;
		case "/projects":
			navDetails = {
				linkName: "About Me",
				linkPath: "/about"
			};
			break;
        default:
            // Use useMatch for dynamic routes
            if (match) {
				
                navDetails = {
                    linkName: "About Me",
                    linkPath: "/about"
                };
            }
            break;
    }
	
	return (
		<header>
			<div className='my-name'>
				<h1>Sam Bowditch</h1>
				<h2>Software Developer Resume</h2>
			
			</div>
			<div className='site-description'>
				<p>Determined to start my journey to become a software developer.</p>
			</div>
			<nav className='site-nav-bar'>
				<Link to={navDetails.linkPath}><strong>{navDetails.linkName}</strong> </Link>
			</nav>
		</header>
	);
};

export default Header;
