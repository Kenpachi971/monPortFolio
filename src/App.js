import React, { Component } from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Accueil from './Components/Accueil';
import Apropos from './Components/Apropos';
import Projets from './Components/Projets';
import Contact from './Components/Contact';

class App extends Component {
	render() {
		return (
			<HashRouter>
				<div>
					<Header />
					<Switch>
						<Route exact path="/" component={Accueil} />
						<Route exact path="/Accueil" component={Accueil} />
						<Route exact path="/Apropos" component={Apropos} />
						<Route exact path="/Projets" component={Projets} />
						<Route exact path="/Contact" component={Contact} />
					</Switch>
				</div>
			</HashRouter>
		);
	}
}

export default App;
