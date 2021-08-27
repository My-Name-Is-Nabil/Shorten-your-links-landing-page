import { ReactComponent as Logo } from '../images/logo.svg';
import { ReactComponent as FacebookIcon } from '../images/icon-facebook.svg';
import { ReactComponent as InstagramIcon } from '../images/icon-instagram.svg';
import { ReactComponent as PinterestIcon } from '../images/icon-pinterest.svg';
import { ReactComponent as TwitterIcon } from '../images/icon-twitter.svg';

import '../scss/footer.scss';

export default function Footer(){
    return (
        <div className="footer">
            <div className="footer__logo">
                <Logo />
            </div>
            <div className="footer__nav">
                <div className="footer__nav__ul">
                    <div className="footer__nav__ul__title">
                        Features
                    </div>
                    <div className="footer__nav__ul__li">
                        Link Shortening
                    </div>
                    <div className="footer__nav__ul__li">
                        Branded Links
                    </div>
                    <div className="footer__nav__ul__li">
                        Analytics                        
                    </div>
                </div>
                <div className="footer__nav__ul">
                    <div className="footer__nav__ul__title">
                        Resources
                    </div>
                    <div className="footer__nav__ul__li">
                        Blog
                    </div>
                    <div className="footer__nav__ul__li">
                        Developers
                    </div>
                    <div className="footer__nav__ul__li">
                        Support                        
                    </div>
                </div>
                <div className="footer__nav__ul">
                    <div className="footer__nav__ul__title">
                        Company
                    </div>
                    <div className="footer__nav__ul__li">
                        About
                    </div>
                    <div className="footer__nav__ul__li">
                        Out Team
                    </div>
                    <div className="footer__nav__ul__li">
                        Careers                        
                    </div>
                    <div className="footer__nav__ul__li">
                        Contact                        
                    </div>
                </div>
            </div>
            <div className="footer__social-media">
                <FacebookIcon />
                <TwitterIcon />
                <PinterestIcon />
                <InstagramIcon />
            </div>
        </div>
    )
}