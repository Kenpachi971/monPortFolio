import React, { Component } from 'react';

class CardMini extends Component {


  render(){
    return (
      <div className="Card">
        <img className="imgProduit" src={this.props.src} alt={this.props.alt}/>
      </div>
    );
  }
}
export default CardMini;