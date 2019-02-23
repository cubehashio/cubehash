import React from 'react';

function Slider(props) {
    return (
        <div className="slider-area">
			<div className="slider-wrapper pt-255" style={{backgroundImage: 'url()'}}>
				<div className="container">
					<div className="row">
						<div className="col-xl-8 col-lg-8 offset-lg-2 offset-xl-2">
							<div className="slider-content text-center">
								<h1 className="wow fadeInUp" data-wow-delay="0.3s">We Help You Leverage The Power Of Blockchain For Commerce</h1>
								<button className="btn wow fadeInUp" href="#" data-wow-delay="0.5s">Download Now</button>
							</div>
						</div>
					</div>
				</div>
			</div>
        </div>
    );
}

export default Slider;