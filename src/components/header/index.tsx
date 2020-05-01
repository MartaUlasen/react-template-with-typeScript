import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from './logo'
import Navigation from './navigation';
import './index.css';

class Header extends Component {
	render() {
		return (
			<header className="header">
				<div className="logo">
					<Link to="/">
						<Logo />
					</Link>
				</div>
				<Navigation />
			</header>
		);
	}
}

export default Header;


