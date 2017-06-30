import React from 'react';
import { Router, Route, browserHistory, IndexRedirect, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import { homepageComponent } from './components/homepageComponent.js';
import homepageContainer from './components/homepageComponent.js';
import myInfoComponent from './components/myInfoComponent.js';


export default function Root() {
	return (
		<Router history={browserHistory}>
			<Route path="/root" component={homepageComponent}>
				<Route path="/" component={myInfoComponent} />
			</Route>
		</Router>
	)
}