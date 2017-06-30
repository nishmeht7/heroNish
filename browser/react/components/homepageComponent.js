import React from 'react';


export class homepageComponent extends React.Component {
	constructor () {
		super()
	}

	render (){
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
				        <a href="#" className="navbar-brand">Nishant</a>
				    </div>
				    <div id="navbarCollapse" className="collapse navbar-collapse">
				        <ul className="nav navbar-nav">
				            <li className="active"><a href="#">Home</a></li>
				            <li><a href="#">Profile</a></li>
				            <li><a href="#">Messages</a></li>
				        </ul>
				        <ul className="nav navbar-nav navbar-right">
				            <li><a href="#">Login</a></li>
				        </ul>
				    </div>
				</nav>

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

const homepageContainer = connect(mapState, mapDispatch)(homepageComponent);

export default homepageContainer;
