import React from 'react';

function Footer(props) {
    return (
        <footer>
            <div className="footer-area theme-bg pt-140 pb-130">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
                            <div className="footer-wrapper text-center">
                                <div className="footer-logo">
                                    <a href="index.html"><img src="img/logo/1.png" alt="" /></a>
                                </div>
                                <ul className="footer-link">
                                    <li><a href="index.html">Privacy</a></li>
                                    <li><a href="index.html">Terms & Condition</a></li>
                                    <li><a href="index.html">Contact</a></li>
                                </ul>
                                <div className="copyright">
                                    <p>Copyright <i className="far fa-copyright"></i> 2018 . All Right Reserved.</p>
                                </div>
                                <div className="footer-icon">
                                    <a href="index.html"><i className="fab fa-facebook-f"></i></a>
                                    <a href="index.html"><i className="fab fa-twitter"></i></a>
                                    <a href="index.html"><i className="fab fa-google-plus-g"></i></a>
                                    <a href="index.html"><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    );
}

export default Footer;