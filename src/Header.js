import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import ThisLogo from './Images/rcus.png';

class Header extends Component {
	render() {
		return (
			<div className="Header">
				<div className="divHeader">
					<div className="DivOfLogO">
						<img className="MyLogo1" src={ThisLogo} alt="LogoFaitMaison" />
					</div>
					<div className="alignement">
						<div className="icon social lin">
							<a className="LiensBlack" href="https://www.linkedin.com/feed/">
								<i class="fab fa-linkedin-in" />
							</a>
						</div>
						<div className="icon social tw">
							<a className="LiensBlack" href="https://twitter.com/CMehdy26">
								<i className="fab fa-twitter" />
							</a>
						</div>
						<div className="icon social in">
							<a className="LiensBlack" href="https://github.com/Kenpachi971">
								<i class="fab fa-github" />
							</a>
						</div>
					</div>
				</div>
				<div className="divLiens">
					<NavLink to="/Accueil" className="Liens">
						ACCUEIL
					</NavLink>
					<NavLink to="/Apropos" className="Liens">
						A PROPOS
					</NavLink>
					<NavLink to="/Projets" className="Liens">
						PROJETS
					</NavLink>
					<NavLink to="/Contact" className="Liens">
						CONTACT
					</NavLink>
				</div>
			</div>
		);
	}
}

export default Header;
