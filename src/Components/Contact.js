import React, { Component } from 'react';
import Footer from './Footer';
import './Contact.css';

class Contact extends Component {
	render() {
		return (
			<div className="ContactContainer">
				<h1 className="MeContacter">Me contacter</h1>
				<div className="myEmail">
					<p className="MailContact">
						<i class="fas fa-envelope" /> Mon email : mrcapharsie.m@gmail.com
					</p>
				</div>
				<div className="myPhone">
					<p className="PhoneContact">
						<i class="fas fa-mobile-alt" /> Téléphone : 0690 92 63 63
					</p>
				</div>
				<div className="myAdress">
					<p className="AdressContact">
						<i class="fas fa-home" /> Adresse : Section Passonne 97112 Grand-Bourg
					</p>
				</div>
				<Footer />
			</div>
		);
	}
}

export default Contact;
