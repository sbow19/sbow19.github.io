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
							Proficient in <strong>JavaScript</strong> and{' '}
							<strong>TypeScript</strong> (intermediate level), with experience
							in <strong>Python</strong> (intermediate level).
						</p>
					</li>
					<li className='skill-container'>
						<h3>Web technologies:</h3>
						<p>
							Skilled in creating responsive and accessible web pages using{' '}
							<strong>HTML5</strong> and <strong>CSS3</strong>.
						</p>
					</li>
					<li className='skill-container'>
						<h3>Frameworks:</h3>
						<p>
							Experience in building developing a dynamic mobile application
							using <strong>React Native</strong> (basic to intermediate level).{' '}
						</p>
					</li>
					<li className='skill-container'>
						<h3>Other technologies:</h3>
						<p>
							{' '}
							Knowledgeable in version control with <strong>Git</strong>,
							managing databases with <strong>SQLite</strong> and{' '}
							<strong>MySQL</strong>, designing <strong>RESTful APIs</strong>,
							and backend development with <strong>Node.js</strong>. Proficient
							in using <strong>VSCode</strong> as a development environment.
						</p>
					</li>
					<li className='skill-container'>
						<h3>Soft skills:</h3>
						<p>
							Proven ability in <strong>project management</strong>, keen{' '}
							<strong>attention to detail</strong>, strong{' '}
							<strong>team-player</strong> qualities, and a{' '}
							<strong>creative thinker</strong> capable of innovative solutions.
						</p>
					</li>
				</ul>
			</div>
		</>
	);
};

export default Skills;
