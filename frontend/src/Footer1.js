import React from 'react';

function Footer(props) {
    return (
                <div className="row SiteFooter">
        <div className="column sixteen wide FooterContent Section">
        <div className="ui grid padded stackable">
            <div className="column four wide NoBottomPadding">
            <div className="FooterLogoContainer">
                <a href="/" className="FooterLogo">
        <img src="/assets/metax-footer-logo.png" />
        </a>
            </div>
            </div>
            <div className="column six wide desktop">
            <div className="FooterCopyrightContainer">
                <p className="FooterCopyright">Copyright &copy; 2019 MetaXchain - All Rights Reserved</p>

            </div>
            </div>
            <div className="column six wide">
            <div className="column six wide left aligned FooterSocial">


        <div className="column sixteen wide center aligned">
        <button id="open-popup" className="ui mini button primary footer">Newsletter</button>
        </div>

        <div className="socialIcons">
        <a href="https://twitter.com/metaxchain" target="_blank">
        <img src="/assets/social/white/twitter-white.svg" />
        </a>
        <a href="https://medium.com/metax-publication" target="_blank">
        <img src="/assets/social/white/medium-white.svg" />
        </a>
        <a href="https://reddit.com/r/adChain" target="_blank">
        <img src="/assets/social/white/reddit-white.svg" />
        </a>
        <a href="https://t.me/adChain" target="_blank">
        <img src="/assets/social/white/telegram-white.svg" />
        </a>
        <a href="https://www.linkedin.com/company/metaxchain/" target="_blank">
        <img src="/assets/social/white/linkedin-white.svg" />
        </a>
        <a href="https://www.facebook.com/metaxchain" target="_blank">
        <img src="/assets/social/white/facebook-white.svg" />
        </a>
        </div>
        </div>

            </div>
            <div className="column four wide mobile">
            <p className="FooterCopyright">Copyright &copy; 2019 MetaXchain - All Rights Reserved</p>

            </div>
        </div>
        </div>
        </div>
    );
}

export default Footer;