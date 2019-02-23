import React from 'react';

function Footer(props) {
    return (
        <footer>
            <div class="footer-area theme-bg pt-140 pb-130">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
                            <div class="footer-wrapper text-center">
                                <div class="footer-logo">
                                    <a href="index.html"><img src="img/logo/1.png" alt="" /></a>
                                </div>
                                <ul class="footer-link">
                                    <li><a href="index.html">Privacy</a></li>
                                    <li><a href="index.html">Terms & Condition</a></li>
                                    <li><a href="index.html">Contact</a></li>
                                </ul>
                                <div class="copyright">
                                    <p>Copyright <i class="far fa-copyright"></i> 2018 . All Right Reserved.</p>
                                </div>
                                <div class="footer-icon">
                                    <a href="index.html"><i class="fab fa-facebook-f"></i></a>
                                    <a href="index.html"><i class="fab fa-twitter"></i></a>
                                    <a href="index.html"><i class="fab fa-google-plus-g"></i></a>
                                    <a href="index.html"><i class="fab fa-linkedin-in"></i></a>
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