import React from 'react';

export default class myInfoComponent extends React.Component {
	constructor(){
		super()
	}

	render () {
		return (
			<div>
				<div className="row">
					<div>
						<div className="img-circle">
							<img src="/nish.jpg" className="rounded"/>
						</div>
					</div>
					<div className="text-center">
						<h2>Nishant Mehta</h2>
					</div>
				</div>
			</div>
		)
	}
}

