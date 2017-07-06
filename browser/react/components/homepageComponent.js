import React from 'react';


export class HomepageComponent extends React.Component {
	constructor () {
		super()
	}

	render (){
		const { children } = this.props
		return (
			<div>
				<nav className="navbar navbar-inverse">
				    <div className="navbar-header">
				        <button type="button" data-target="#navbarCollapse" data-toggle="collapse" className="navbar-toggle">
				            <span className="sr-only">Toggle navigation</span>
				            <span className="icon-bar"></span>
				            <span className="icon-bar"></span>
				            <span className="icon-bar"></span>
				        </button>
				        <a href="#" className="navbar-brand">Nishant Mehta</a>
				    </div>
				    <div id="navbarCollapse" className="collapse navbar-collapse">
				        <ul className="nav navbar-nav">
				            <li className="active"><a href="#">Home</a></li>
				            <li><a href="#">My Projects</a></li>
				            <li><a href="#">Work Experience</a></li>
				        </ul>
				        <ul className="nav navbar-nav navbar-right">
				            <li><a href="#">Interests</a></li>
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
