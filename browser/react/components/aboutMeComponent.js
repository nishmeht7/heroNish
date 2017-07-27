import React from 'react';

export default class AboutMeComponent extends React.Component {

	constructor(){
		super()
	}

	render() {
		return (
			<section className="success" id="about">
				<div>
					<div className="row-about">
						<div className="text-center">
							<h2 className="h2-aboutMe">About Me</h2>
						</div>
						<div className="text-center">
							<div className="container">
						        <div className="row">
						            <div className="col-md-12">
						                <hr className="star-primary" />
						            </div>
						        </div>
						    </div>
						</div>
						<div className="about-section">
						<div className="col-md-6">
						<div className="aboutText">
							<ul className="ul-about">
								<li><i className="fa fa-star" aria-hidden="true" /> I Really Like Problem Solving</li>
								<li><i className="fa fa-star" aria-hidden="true" /> I Like High Adrenaline Activities</li>
								<li><i className="fa fa-star" aria-hidden="true" /> I Love Javascript</li>
								<li><i className="fa fa-star" aria-hidden="true" /> I'm a founding member of a tech company</li>
								<li><i className="fa fa-star" aria-hidden="true" /> I grew it to 13 people and $1M+ in funding</li>
								<li><i className="fa fa-star" aria-hidden="true" /> I am addicted to the sweat and hustle needed to WIN</li>
								<li><i className="fa fa-star" aria-hidden="true" /> I love proving people wrong and doing the impossible</li>
								<li><i className="fa fa-star" aria-hidden="true" /> Above all I LOVE pizza</li>
							</ul>
							</div>
						</div>
						<div className="col-md-offset-6">
							<div className="nishPicDiv">
							<img src="/skydive.png" className="nishImg"/>
							</div>
						</div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}
/*<p>
								I love problem solving. There's nothing more exhilarating than hacking through complex problems Except of course jumping from a plane at 20,000 feet above the palm islands in Dubai!
								<br /></p>
								<p>Becoming the best developer is my goal and my current weapon of choice is Javascript with all it's ammo that includes React, React-Native, Redux, Node, Express, Socket.io, gaming libraries and so much more that's being added everyday!
								<br /> 
								I have extensive experience in the tech industry, having grown a company of my own I'm addicted to the sweat, hustle and dedication that goes into creating a winning team and succeeding!
								<br /> 
								HIRE ME!!!!!
							</p>*/