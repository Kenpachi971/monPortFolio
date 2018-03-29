import React, { Component } from 'react';
import Cards from './Cards';
import './CardProduit.css';
import Slider from './Slider';
import './Slider.css';
import Footer from './Footer';


class Accueil extends Component {
    render() {
        return (
            <div className="TestAccueil">
                <Slider/>
                <Cards/>
                <Footer/>
            </div>
        );
    }
}

export default Accueil;
