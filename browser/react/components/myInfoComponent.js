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
					<div className="background col-md-offset-4">
						<div className="transbox">
							<p>Nishant Mehta is a FullStack developer, graduating from the prestigious FullStack Academy of Code. He loves hacking through complex problems and his current weapon of choice is Javascript with all it's ammo that includes React, React-Native, Redux, Node, Express, Socket.io, gaming libraries and so much more that's being added everyday! </p>
						</div>
					</div> 
				</div>
			</div>
		)
	}
}

