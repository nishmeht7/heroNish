import React from 'react'; 

export default class FooterComponent extends React.Component {
	constructor() {
		super()
	}

	render () {
		return (
			<section id="connect">
				<div className ="row-footer">
					<div className="col-md-4">
						<div className="location-footer">
							<h1>Location</h1>
							<p className="footer-p">San Francisco, CA</p>
						</div>
					</div> 
					<div className="col-md-4">
						<div className="location-footer">
							<h1>Stalk Me Here</h1>
							<ul className="list-inline">
								<li>
	                                <a href="https://www.linkedin.com/in/mrnishantmehta/" className="btn-social btn-outline" target="_blank">
		                                <span className="sr-only">Linked In</span>
		                                <i className="fa fa-fw fa-linkedin"/>
	                                </a>
	                            </li>
	                            <li>
									<a href="https://github.com/nishmeht7" className="btn-social btn-outline" target="_blank">
		                                <span className="sr-only">GitHub</span>
		                                <i className="fa fa-fw fa-github"/>
	                                </a>
	                            </li>
	                            <li>
									<a href="mailto:nishmeht7@gmail.com" className="btn-social btn-outline" target="_blank">
		                                <span className="sr-only">Email</span>
		                                <i className="fa fa-fw fa-envelope"/>
	                                </a>
	                            </li>
							</ul>
							<p className="footer-p">Don't be shy, say HI! </p>
						</div>
					</div> 
					<div className="col-md-4">
						<div className="location-footer">
							<h1>Resume</h1>
							<p className="footer-p">Click <a href="/Resume-NishantMehta.pdf" target="_blank">here</a> to view</p>
						</div>
					</div> 
				</div>
			</section>
		)
	}
}