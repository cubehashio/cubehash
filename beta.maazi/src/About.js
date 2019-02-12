import React from 'react';

function About(props) {
    return (
        <section className="about-area sky-gray-bg relative" id="about">
        <div className="about-top-area relative padding-150-150">
            <div className="about-mockup-bg wow fadeIn">
                <img src="assets/img/about/about-3.png" alt="" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-6 col-md-offset-6 col-lg-offset-6 col-sm-12 col-xs-12">
                        <div className="about-content wow fadeInUp">
                            <h3 className="mb30">The future of SEO is more quality content, social networking and relative sharing.</h3>
                            <p>Over the last decade, we have had the pleasure of partnering with a wide array of brands ranging from tech startups to Fortune 500 enterprises.</p>
                            <p>Our data-driven approach has fueled success in various industry verticals with businesses around the globe. We’ve loved the journey thus far and the future that awaits.</p>
                            <a href="#start" className="read-more mt30 inline-block">Get Started for free</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div className="about-bottom-area relative padding-150-150">
            <div className="container">
                <div className="row flex-v-center">
                    <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                        <div className="about-content xs-mb50 wow fadeInUp">
                            <h3 className="mb30">When it comes to analyzing your competition, you should only look at the top 15 sites.</h3>
                            <p>Over the last decade, we have had the pleasure of partnering with a wide array of brands ranging from tech startups to Fortune 500 enterprises.</p>
                            <p>Our data-driven approach has fueled success in various industry verticals with businesses around the globe. We’ve loved the journey thus far and the future that awaits.</p>
                            <a href="#start" className="read-more mt30 inline-block">Get Started for free</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-mockup-bg sm-mt50 wow fadeIn">
                <img src="assets/img/about/about-4.png" alt="" />
            </div>
        </div>
    </section>
    );
}

export default About;