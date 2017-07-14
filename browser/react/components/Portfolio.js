import React from 'react';

export default class Portfolio extends React.Component {
	constructor() {
		super()
	}

	render () {

		var divStyle = {
			"textAlign": "center",
		}

		return (
			<section id="portfolio">
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
						<div className="col-lg-6">

	                         
	                        <div className="dtl26">
	                            <img src="/arrowStorm.png" alt="" />
	                            <div className="dtl">
	                                <h3>Arrow Storm</h3>
	                                <p>Intense Online multiplayer arcade archery game
		                                <br /><br />
		                                • Created a multiplayer game using Phaser, Sockets in the front-end and Sequelize/Express/NodeJs on the back-end<br /><br />
										• Used sockets to set up multiple real-time game rooms for up to 4 players/game<br /><br />
										• Reduced latency by re-creating the real-time gameplay on clients and minimizing socket communication<br /><br />
										• Created a map editor, which allows users to create, customize and compete on maps of their own design<br /><br />
									</p>
									<div className="col-lg-12" style={divStyle}>
		                                <a href="http://arrowstorm.herokuapp.com/">Play Now!</a>
		                                <a href="https://github.com/Mojotatan/Arrowstorm">GitHub</a>
		                            </div>
	                            </div>
	                        </div>

	                    </div>

	                    <div className="col-lg-6">

	                         
	                        <div className="dtl26">
	                            <img src="/ballers.png" alt="" />
	                            <div className="dtl">
	                                <h3>Ballers</h3>
	                                <p>E-commerce store for basketball merch
	                                <br /><br />
		                                • Implemented using React/Redux on the front-end and Sequelize/Express/NodeJs on the back-end<br /><br />
										• Setup authentication via local email/password and Google OAuth using passport.js<br /><br />
										• Created a seamless process for adding items to cart, and billing and checkout<br /><br />
										• Integrated SendGrid API for automated email notifications<br /><br />
									</p>
	                                <div className="col-lg-12" style={divStyle}>
		                                <a href="http://balers.herokuapp.com/">Go Shop!</a>
		                                <a href="https://github.com/Charlesincharge43/GraceShopperBallers">GitHub</a>
	                            	</div>
	                            </div>
	                        </div>

	                    </div>


						<div className="col-lg-6">
	                        <div className="dtl26">
	                            <img src="/carTrivia.png" alt="" />
	                            <div className="dtl">
	                                <h3>Auto-Trivia</h3>
	                                <p> Single and multi-player online trivia game
	                                <br /><br />
		                                • Used React/Redux on the front-end and Sequelize/Express/NodeJs on the back-end<br /><br />
										• Added multiplayer functionality using sockets to allow effective communication between multiple clients<br /><br />
									</p>
	                                <div className="col-lg-12" style={divStyle}>
		                                <a href="https://github.com/nishmeht7/Auto-Trivia-">GitHub</a>
	                            	</div>
	                            </div>
	                        </div>
	                    </div>
	                    <div className="col-lg-6">
	                        <div className="dtl26">
	                            <img src="/bitcoin.jpg" alt="" />
	                            <div className="dtl">
	                                <h3>Blockchain Vs. Bitcoin</h3>
	                                <p>I gave a technical talk about Blockchain and Bitcoin. This you'll definitely understand - Check it out!</p>
	                                <div className="col-lg-12" style={divStyle}>
		                                <a href="https://www.youtube.com/watch?v=D6j8RPvBccI&t=6s">Watch Video!</a>
	                            	</div>
	                            </div>
	                        </div>
	                    </div>

					</div>

				</div>
			</section>
		)
	}
}