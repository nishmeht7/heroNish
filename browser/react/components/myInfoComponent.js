import React from 'react';
import AboutMeComponent from './aboutMeComponent';
import Portfolio from './Portfolio';
import Interests from './InterestsComponent';
import Footer from './Footer'; 

export default class MyInfoComponent extends React.Component {
	constructor(){
		super()
	}

	render () {
		return (
			<section id="me">
				<div>
					<div className="row-main">
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
							<h2>FullStack Badass</h2>
						</div>
					</div>
					<AboutMeComponent />
					<Portfolio/>
					<Footer/>
				</div>
			</section>
		)
	}
}

