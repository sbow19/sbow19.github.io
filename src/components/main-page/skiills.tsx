import '@styles/index.css';
import '@styles/App.css';
import React from 'react';

const Skills: React.FC = () => {
	return (
		<>
			<div className='my-skills-title'>
				<h2>Skills</h2>
			</div>
			<div className='my-skills-content-container'>
				<ul className='skills-list-container'>
					<li className='skill-container'>
						<h3>Programming languages: </h3>
						<p>
							<strong>JavaScript / </strong> {' '}
							<strong>TypeScript, </strong>
							<strong>Python. </strong>
							Currently learning <strong>Go</strong>.
						</p>
					</li>
					<li className='skill-container'>
						<h3>Web technologies:</h3>
						<p>
							<strong>HTML5, </strong>
							<strong>CSS and Sass, </strong>
						</p>
					</li>
					<li className='skill-container'>
						<h3>Frameworks:</h3>
						<p>
							<strong>React, NextJS, React Native, ExpressJS, Jest, </strong>
							<strong>Flask</strong>
						</p>
					</li>
					<li className='skill-container'>
						<h3>Other technologies:</h3>
						<p>
							<strong>Bash scripting, </strong>
							<strong>Git / Github, </strong>
							<strong>SQLite, MySQL, </strong>
							<strong>RESTful API design and consumption, OpenAPI, </strong>
							<strong>Node.js, </strong>
							<strong>VSCode, </strong> currently learning <strong>Vim</strong>.
						</p>
					</li>
				</ul>
			</div>
		</>
	);
};

export default Skills;
