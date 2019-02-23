import React from 'react';

function Header(props) {
    return (
        <header className="transparent-header">
			<div id="sticky-header" className="header-area">
				<div className="container">
					<div className="row">
						<div className="col-xl-12">
							<div className="main-menu">
								<nav className="navbar navbar-expand-lg">
									<a className="navbar-brand" href="index.html">
										<img src="img/logo/logo.png" alt="" />
                                    </a>
									<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
									 aria-expanded="false" aria-label="Toggle navigation">
										<span className="navbar-icon"></span>
										<span className="navbar-icon"></span>
										<span className="navbar-icon"></span>
									</button>

									<div className="collapse navbar-collapse" id="navbarSupportedContent">
										<ul className="navbar-nav ml-auto">
											<li className="nav-item">
												<a className="nav-link" href="#work">How it works </a>
											</li>
											<li className="nav-item">
												<a className="nav-link" href="#solution">Solutions</a>
											</li>
											<li className="nav-item">
												<a className="nav-link" href="#features">Features</a>
											</li>
										</ul>
									</div>
									<div className="header-btn d-none d-lg-block">
										<button className="btn-border no-border" style={{cursor:'pointer'}} href="#">Login</button>
										<button className="btn-border" style={{cursor:'pointer'}} href="#">Join Now</button>
									</div>
								</nav>
							</div>

						</div>
					</div>
					<div className="col-12"><div className="mobile-menu"></div></div>
				</div>
			</div>
        </header>
    );
}

export default Header;