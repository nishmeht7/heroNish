import React from 'react';

export default class Portfolio extends React.Component {
	constructor() {
		super()
	}

	render () {
		return (
			<div>
				<div className="row-portfolio">
					<div className="text-center">
						<h2 className="h2-portfolio">My Portfolio</h2>
					</div>
					<div className="text-center">
						<div className="container">
					        <div className="row">
					            <div className="col-md-12">
					                <hr className="star-light" />
					            </div>
					        </div>
					    </div>
					</div>
				</div>
			</div>
		)
	}
}