import React from 'react';

export default class myInfoComponent extends React.Component {
	constructor(){
		super()
	}

	render () {
		return (
			<div className="row">
				<div className="row">
					<div className="col-md-1 col-md-offset-1">
						<img src="/nish.jpg" className="img-circle"/>
					</div>
					<div className="col-md-offset-5"><h2>FullStack Javascript Developer</h2></div>
				</div>
			</div>
		)
	}
}

