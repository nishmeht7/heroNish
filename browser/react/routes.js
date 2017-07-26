import React from 'react';
import { Router, Route, browserHistory, hashHistory, IndexRedirect, IndexRoute } from 'react-router';
import { HomepageComponent } from './components/homepageComponent.js';
import homepageContainer from './components/homepageComponent.js';
import MyInfoComponent from './components/myInfoComponent.js';


export default function Root() {
	return (
		<Router history={hashHistory}>
			<Route path="/root" component={HomepageComponent}>
				<Route path="/" component={MyInfoComponent} />
			</Route>
		</Router>
	)
}