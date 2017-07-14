import React from 'react';
import AboutMeComponent from './aboutMeComponent';
import Portfolio from './Portfolio';

export default class MyInfoComponent extends React.Component {
	constructor(){
		super()
	}

	render () {
		return (
			<div>
				<div id="me" className="row-main">
					<div>
						<div className="img-circle">
							<img src="/nish.jpg" className="rounded"/>
						</div>
					</div>
					<div className="text-center">
						<h2>Nishant Mehta</h2>
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
					<div className="text-center">
						<h3>FullStack Javascript Developer</h3>
					</div>
				</div>
				<AboutMeComponent />
				<Portfolio/>
			</div>
		)
	}
}

