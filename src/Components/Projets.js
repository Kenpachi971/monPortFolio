import React, { Component } from 'react';
import Footer from './Footer';
import './Projets.css';
import './CardProduit.css';

class App extends Component {
	render() {
		return (
			<div className="Appi">
				<h1 className="MesProjets">Pour le lycée de Marie Galante</h1>
				<div className="PositionnemenT">
					<div className="N1">
						<p className="TextLoremH">"Entreprendre en Lycée"</p>
						<a href="https://lamaisondesartistes.github.io/ProjetLMDA/#/">
							<div className="Placement">
								<div className="DivVide">
									<p>LA MAISON DES ARTISTES</p>
								</div>
							</div>
						</a>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

export default App;
