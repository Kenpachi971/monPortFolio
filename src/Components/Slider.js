import React, { Component } from 'react';
import Slidero from 'react-slick';
import './Slider.css';
import Slide1 from '../Images/dessin4.jpg';
import Slide2 from '../Images/dessin7.jpg';
import Slide3 from '../Images/dessin8.jpg';
import Slide4 from '../Images/Moi.jpg';

const data = [{ myImg: Slide1 }, { myImg: Slide2 }, { myImg: Slide3 }, { myImg: Slide4 }];

class theSlider extends Component {
	render() {
		const settings = {
			dots: true,
			infinite: true,
			speed: 400,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 2000,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						infinite: true,
						dots: true,
					},
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					},
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					},
				},
			],
		};

		return (
			<div className="TheSlider">
				<Slidero {...settings} className="sliderCoponent">
					{data.map((el, i) => {
						return (
							<li className="slidCopo" key={i}>
								<img className="sliderCoponentImg" src={el.myImg} alt="Images slider" />
							</li>
						);
					})}
				</Slidero>
				<div className="ResponsesOfMe">
					<p className="ParagrapheOfMe">
						Je suis un jeune développeur qui a intégré Simplon Marie-Galante afin d'allier mes passions
						artistiques avec le design en web
					</p>
				</div>
			</div>
		);
	}
}

export default theSlider;
