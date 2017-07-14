import React from 'react';


export class HomepageComponent extends React.Component {
	constructor () {
		super()
	}

	render (){
		const { children } = this.props
		return (
			<div>
				<nav className="navbar navbar-inverse navbar-fixed-top navbar-custom">
				    <div className="navbar-header page-scroll">
				        <button type="button" data-target="#bs-example-navbar-collapse-1" data-toggle="collapse" className="navbar-toggle">
				            <span className="sr-only">Toggle navigation</span> Menu <i className="fa fa-bars"></i>
				        </button>
				        <a href="#me" className="navbar-brand">Nishant Mehta</a>
				    </div>
				    <div id="navbarCollapse" className="collapse navbar-collapse">
				        <ul className="nav navbar-nav">
				            <li><a href="#about">About Me</a></li>
				            <li><a href="#portfolio">My Portfolio</a></li>
				        </ul>
				        <ul className="nav navbar-nav navbar-right">
				            <li><a href="#interests">Interests</a></li>
				            <li><a href="#interests">Interests</a></li>
				            <li><a href="#interests">Interests</a></li>
				        </ul>
				    </div>
				</nav>
				{children}
			</div>
		)
	}
}

/* ------Container--------------*/

import { connect } from 'react-redux';

function mapState(state, ownProps){

}

function mapDispatch(state, ownProps){

}

const homepageContainer = connect(mapState, mapDispatch)(HomepageComponent);

export default homepageContainer;
