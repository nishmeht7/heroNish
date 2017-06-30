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
					<div className="col-md-offset-5">
						<h2>FullStack Javascript Developer</h2>
					
					<div id="text-carousel" className="carousel slide" data-ride="carousel">
				    <div className="row-inner">
				        <div className="col-md-offset-3 col-md-6">
				            <div className="carousel-inner">
				                <div className="item active">
				                    <div className="carousel-content">
				                        <div>
				                            <p>Sapiente, ducimus, voluptas, mollitia voluptatibus nemo explicabo sit blanditiis laborum dolore illum fuga veniam quae expedita libero accusamus quas harum ex numquam necessitatibus provident deleniti tenetur iusto officiis recusandae corporis culpa quaerat?</p>
				                        </div>
				                    </div>
				                </div>
				                <div className="item">
				                    <div className="carousel-content">
				                        <div>
				                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, sint fuga temporibus nam saepe delectus expedita vitae magnam necessitatibus dolores tempore consequatur dicta cumque repellendus eligendi ducimus placeat! </p>
				                        </div>
				                    </div>
				                </div>
				                <div className="item">
				                    <div className="carousel-content">
				                        <div>                          
				                            <p>Sapiente, ducimus, voluptas, mollitia voluptatibus nemo explicabo sit blanditiis laborum dolore illum fuga veniam quae expedita libero accusamus quas harum ex numquam necessitatibus provident deleniti tenetur iusto officiis recusandae corporis culpa quaerat?</p>
				                        </div>
				                    </div>
				                </div>
				                
				            </div>
				        </div>
				    </div>
					    <a className="left carousel-control" href="#text-carousel" data-slide="prev">
					    	<span className="glyphicon glyphicon-chevron-left"></span>
					  	</a>
					 	<a className="right carousel-control" href="#text-carousel" data-slide="next">
					    	<span className="glyphicon glyphicon-chevron-right"></span>
					  	</a>

					</div>
					</div>
				</div>
			</div>
		)
	}
}

