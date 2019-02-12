import React from 'react';

function Header(props) {
    return (
        <header className="top-area" id="home">
        <div className="header-top-area" id="scroolup">
            <div className="mainmenu-area" id="mainmenu-area"></div>
                <div className="mainmenu-area-bg">
                <nav className="navbar">
                    <div className="container">
                        <div className="navbar-header">
                            <a href="#home" className="navbar-brand"><img src="assets/img/logo.png" alt="logo" /></a>
                        </div>
                        
                        <div className="mainmenu-and-right-button">
                            <div id="main-nav" className="stellarnav">
                                <ul id="nav" className="nav navbar-nav">
                                    <li className="active"><a href="#home">Home</a>
                                        {/* <ul>
                                            <li><a href="index.html"> Home Version 1</a></li>
                                            <li><a href="index-2.html"> Home Version 2</a></li>
                                        </ul> */}
                                    </li>
                                    <li><a href="#features">Service</a></li>
                                    <li><a href="#about">About Us</a></li>
                                    <li><a href="#pricing">Pricing</a></li>
                                    <li><a href="#news">Blog</a></li>
                                    <li><a href="#P">Pages</a>
                                        <ul>
                                            <li><a href="blog.html">Blog</a></li>
                                            <li><a href="single-blog.html">Single Blog</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="login-register">
                                <ul>
                                    <li><a href="login">login</a></li>
                                    <li><a href="Join">Join Now</a></li>
                                </ul>
                            </div>
                        
                        </div>
                    </div>
                </nav>

            </div>
        </div>
       
       <div className="welcome-text-area">
            <div className="area-bg"></div>
            <div className="welcome-area">
                <div className="container">
                    <div className="row flex-v-center">
                        <div className="col-md-7 col-lg-6 col-sm-12 col-xs-12">
                            <div className="welcome-text">
                                <h1 className="wow fadeInUp" data-wow-delay="0.2s">A Growth Fueled Marketing Agency</h1>
                                <p className="wow fadeInUp" data-wow-delay="0.3s">For startups and growing businesses, an online specialist can develop a digital marketing plan to help you grow kick-start campaigns and retain a happy client base.</p>
                                <div className="home-button mt60 xs-mt40 wow fadeInUp" data-wow-delay="0.4s">
                                    <a className="left" href="#start">Get Started for free</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right-layer wow fadeInRight">
                    <img src="assets/img/home/home-mockup.png" alt="" />
                </div>
            </div>
        </div>
    </header>
    );
}

export default Header;