import React from 'react'; 

export default class FooterComponent extends React.Component {
	constructor() {
		super()
	}

	render () {
		return (
			<div>
				<div className ="row-footer">
					<div className="col-md-4">
						<div className="location-footer">
							<h1>Location</h1>
							<p>San Francisco, CA</p>
						</div>
					</div> 
					<div className="col-md-4">
						<div className="location-footer">
							<h1>Stalk Me Here</h1>
							<ul className="list-inline">
								<li>
                                <a href="#" className="btn-social btn-outline">
                                <span className="sr-only">Linked In</span>
                                <i className="fa fa-fw fa-linkedin"/></a>
                            </li>
								<li>GitHub</li>
							</ul>
						</div>
					</div> 
					<div className="col-md-4">
						<div className="location-footer">
							<h1>Resume</h1>
							<p>San Francisco, CA</p>
						</div>
					</div> 
				</div>
			</div>
		)
	}
}