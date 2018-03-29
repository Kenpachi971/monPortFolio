import React, { Component } from 'react';
import Footer from './Footer';
import './About.css';
import bleach from '../Images/rcus1.png';
import me from '../Images/Moi.jpg';

class Presentation extends Component {
	render() {
		return (
			<div>
				<div className="Pres-Container">
					<div className="Pres-Back">
						<img src={me} alt="" className="Pres-Banner" />
						<p className="Maitrise">Les technos que je maîtrise...</p>
						<div className="MySkillsWeb">
							<i id="SkillsWeb1" className="fab fa-html5" />
							<i id="SkillsWeb2" className="fab fa-css3-alt" />
							<i id="SkillsWeb3" className="fab fa-react" />
							<i id="SkillsWeb4" className="fab fa-js-square" />
							<i id="SkillsWeb5" className="fab fa-php" />
							<i id="SkillsWeb6" className="fab fa-git-square" />
							<i id="SkillsWeb7" className="fab fa-github" />
						</div>
						<p className="Pres-Content">
							Salut, je me présente, Mehdy Capharsie 22 ans, développeur web junior depuis Novembre 2017 à
							Simplon Marie-Galante. J'apprécie l'art et le sport, ainsi que les jeux vidéos d'aventures
							et d'actions (MMORPG, MOBA). J'aime lire les mangas de type Shonen et regarder leurs animes.
							J'ai donc choisi de devenir un développeur WEB pour allier mes passions artistiques et des
							compétences numériques.
						</p>
						<br />
					</div>
				</div>
				<div className="Pres-traitContainer">
					<div className="Pres-LambiContainer">
						<img src={bleach} alt="lambi" className="Pres-Lambi" />
					</div>
				</div>

				<Footer />
			</div>
		);
	}
}
export default Presentation;
