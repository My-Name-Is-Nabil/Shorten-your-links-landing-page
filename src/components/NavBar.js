import '../scss/navbar.scss';
import logo from '../images/logo.svg';
import { useRef } from 'react';

export default function Navbar(){
    const menu = useRef(null);
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
                <div className="header__auth__burger-menu-wrapper" tabIndex="0">
                    <div className="header__auth__burger-menu-menu" ref={menu}>
                        <ul className="header__auth__burger-menu-menu__ul">
                            <li className="header__auth__burger-menu-menu__ul__li">
                                Features
                            </li>
                            <li className="header__auth__burger-menu-menu__ul__li">
                                Pricing
                            </li>
                            <li className="header__auth__burger-menu-menu__ul__li">
                                Resources
                            </li>
                            <div className="line">

                            </div>
                            <li className="header__auth__burger-menu-menu__ul__li login">
                                Login
                            </li>
                            <li className="header__auth__burger-menu-menu__ul__li sign-up">
                                Sign Up
                            </li>
                        </ul>
                    </div>
                    <div className="header__auth__burger-menu">

                    </div>
                </div>
            </div>
        </header>
    );
}