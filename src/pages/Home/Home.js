import React, { useState } from 'react';
import shape from '../../assets/shape.png';
import logo from '../../assets/logo.png';
import template from '../../assets/template.png';
import './Home.css';
import { NavLink } from 'react-router-dom';

const Home = () => {
	const [currentTheme, setCurrentTheme] = useState('light');
	const [isNavActive, setNavActive] = useState(false);

	const handleTheme = () => {
		currentTheme === 'light' ? setCurrentTheme('dark') : setCurrentTheme('light');
	};

	return (
		<main>
			<div className={`big-wrapper ${currentTheme} copy ${isNavActive ? 'active' : ''}`}>
				<img src={shape} alt='' className='shape' />

				<header>
					<div className='container'>
						<div className='logo'>
							<img height='50px' width='80px' src={logo} alt='Logo' />
							<h3>ExtraSpace-Cloud</h3>
						</div>

						<div className='links'>
							<ul>
								<li>
									<a href='#'>Features</a>
								</li>
								<li>
									<NavLink to='/about'>About</NavLink>
								</li>
								<li>
									<a href='#'>Contact Us</a>
								</li>
								<li>
									<NavLink to='/signup' className='btn'>
										Sign up
									</NavLink>
								</li>
								<li>
									<NavLink to='/login' className='btn'>
										LogIn
									</NavLink>
								</li>
							</ul>
						</div>

						<div className='overlay'></div>

						<div className='hamburger-menu' onClick={() => setNavActive((prevVal) => !prevVal)}>
							<div className='bar'></div>
						</div>
					</div>
				</header>

				<div className='showcase-area'>
					<div className='container'>
						<div className='left'>
							<div className='big-title'>
								<h2>Don't Worry For Space,</h2>
								<h2>When You Have ExtraSpace</h2>
							</div>
							<p className='text'>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus eius distinctio odit, magni magnam
								qui ex perferendis vitae!
							</p>
							<div className='cta'>
								<NavLink to='/signup' className='btn'>
									Get started
								</NavLink>
							</div>
						</div>

						<div className='right'>
							<img width='450px' height='450' src={template} alt='Person' className='person' />
						</div>
					</div>
				</div>

				<div className='bottom-area'>
					<div className='container'>
						<button className='toggle-btn' onClick={handleTheme}>
							{currentTheme === 'light' && <i class='fa-solid fa-moon'></i>}
							{currentTheme === 'dark' && <i className='fa-solid fa-sun'></i>}
						</button>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Home;
