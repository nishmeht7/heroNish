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
					<div className="text-center">
						<h3>---------X----------</h3>
						<span class="glyphicon glyphicon-search"></span>
					</div> 
					<div className="text-center">
						<h3>FullStack Javascript Developer</h3>
					</div> 
				</div>
			</div>
		)
	}
}

