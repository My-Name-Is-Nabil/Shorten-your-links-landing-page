import '../scss/navbar.scss';
import logo from '../images/logo.svg';

export default function Navbar(){
    return (
        <header className="header">
            <div className="header__logo">
                <img src={logo} alt="" />
            </div>
            <nav className="header__nav">
                <ul className="header__nav__ul">
                    <li className="header__nav__ul__li">
                        Features
                    </li>
                    <li className="header__nav__ul__li">
                        Pricing
                    </li>
                    <li className="header__nav__ul__li">
                        Resources
                    </li>
                </ul>
            </nav>
            <div className="header__auth">
                <div className="header__auth__login">
                    Login
                </div>
                <div className="header__auth__signup">
                    Sign Up
                </div>
                <div className="header__auth__burger-menu-wrapper" onClick={() => {
                    console.log('Clicked!');    
                }}>
                    <div className="header__auth__burger-menu">

                    </div>
                </div>
            </div>
        </header>
    );
}