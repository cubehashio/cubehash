import React from 'react';

function Footer(props) {
    return (
        <footer className="footer-area sky-gray-bg section-padding relative wow fadeIn">
        <div className="footer-top-area padding-bottom">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="call-to-action flex-v-center padding60 xs-padding30 bg-white">
                            <div className="cta-content width50p xs-width100p">
                                <h3 className="font32 xs-font24">Get Started Today </h3>
                                <p>Did you just create a website? Then its time for you to run a Technical SEO Audit to find the to improve your website performance .</p>
                            </div>
                            <div className="cta-button width50p xs-width100p right xs-left xs-mt30"><a href="#start" className="read-more">Get Started for free</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-bottom-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-xs-12 sm-center xs-center sm-mb50 xs-mb50">
                        <div className="footer-logo mb50">
                            <a href="#logo"><img src="assets/img/logo.png" alt="" /></a>
                        </div>
                        <div className="footer-about">
                            <p>SEORush believes in the power of proven partnerships to grow business.</p>
                        </div>
                    </div>
                    {/* <div className="col-md-7 col-md-offset-1 col-xs-12">
                        <div className="row">
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className="single-footer-widget">
                                    <h4>Pages</h4>
                                    <ul>
                                        <li><a href="#About">About us</a></li>
                                        <li><a href="contact.html">Contact us</a></li>
                                        <li><a href="media.html">Media</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div classNameName="col-md-4 col-sm-4 col-xs-12">
                                <div className="single-footer-widget">
                                    <h4>Service</h4>
                                    <ul>
                                        <li><a href="#">Content Optimization</a></li>
                                        <li><a href="#">Keyword Planning</a></li>
                                        <li><a href="#">Website analysis</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className="single-footer-widget">
                                    <h4>Legal</h4>
                                    <ul>
                                        <li><a href="#">Terms of Service</a></li>
                                        <li><a href="#">Security Policy</a></li>
                                        <li><a href="privacy">Privacy Policy</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="footer-copyright mt50 center">
                            <p>Copyright &copy; <a href="index">Maazi</a> All Right Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    );
}

export default Footer;