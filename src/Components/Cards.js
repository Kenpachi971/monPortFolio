import React, { Component } from 'react';
import CardProduit from './CardProduit';
import Produits from './DataProduit';
import './CardProduit.css';

class Cards extends Component {
	state = {
		dataProduit: Produits,
	};
	render() {
		return (
			<div className="PartOfDessins">
				<p className="TitleDessins">MES CREATIONS</p>
				<div className="div-cards">
					{this.state.dataProduit.map((card, i) => {
						return <CardProduit key={i} src={card.src} />;
					})}
				</div>
				<td>&nbsp;</td>
				<div className="Heart">
					<i className="fa fa-heart" />
				</div>
				<td>&nbsp;</td>
			</div>
		);
	}
}

export default Cards;
