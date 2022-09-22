import { NavLink } from 'react-router-dom';

import { HashLink } from 'react-router-hash-link';

import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import logo from '../assets/images/logo.svg';

import HamburgerMenu from './HamburgerMenu';

const NavbarSC = styled.header`
    background: ${({ theme }) => theme.colors.white};
    box-shadow: 0px 1px 10px rgba(3, 169, 244, 0.05);
    position: fixed;
    padding: 1em 5% 1.25em;
    top: 0;
    width: 100%;
    z-index: 15;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2em;

    .nav__logo {
        width: 166px;
    }

    .nav__menu {
        flex: 1;

        display: none;
        max-width: 514px;
    }

    .nav__list {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .nav__item,
    .nav__subitem {
        position: relative;
        display: block;
        float: left;
    }

    .nav__item {
        white-space: nowrap;

        
        &:hover > .nav__submenu,
        &:focus-within > .nav__submenu,
        .nav__submenu:hover,
        .nav__submenu:focus {
            display: block;
            opacity: 1;
            visibility: visible;

        }
    }
    
    .nav__submenu {
        background: ${({ theme }) => theme.colors.white};
        border-radius: .3125em;
        box-shadow: 0px 2px 13px rgba(0, 0, 0, 0.08);
        padding: .5em 0;
        min-width: 200px;

        display: none;
        visibility: hidden;
        opacity: 0;
        
        position: absolute;
        left: 0;
        transition: all .5s ease-in-out;
    }

    .nav__subitem {
        clear: both;
        width: 100%;
        
    }
    
    .nav__sublink {
        background: ${({ theme }) => theme.colors.white};
        color: ${({ theme }) => theme.colors.darkGray};
        display: block;
        padding: .65em 1em;

        &:hover,
        &:focus {
            background: #f5f5f5;
        }

        &:focus {
            outline: none;
        }
    }

    .nav__link {
        color: inherit;
        cursor: pointer;
        font-weight: 500;

        &--flex {
            display: flex;
            align-items: center;
            gap: 0.4375em;
        }

        &.active {
            color: ${({ theme }) => theme.colors.lightBlue};
        }
    }

    @media (min-width: 700px) {
        .nav__menu {
            display: block;
        }
    }

    @media (min-width: 1024px) {
        padding-left: 80px;
        padding-right: 80px;
    }
`;

const Navbar = () => {
    return (
        <NavbarSC>
            <img className='nav__logo' src={logo} alt="GCET logo" />
            <nav className='nav__menu'>
                <ul className='nav__list'>
                    <li className='nav__item'><NavLink to='/' end className='nav__link'>Home</NavLink></li>
                    <li className='nav__item'>
                        <NavLink to='/about' className='nav__link nav__link--flex'>
                            About Us<FontAwesomeIcon fontSize='0.6875rem' icon='fa-solid fa-chevron-down' />
                        </NavLink>
                        <ul className='nav__submenu' role='menu'>
                            <li className='nav__subitem'><HashLink to='/about#who-we-are' className='nav__sublink'>Who we are</HashLink></li>
                            <li className='nav__subitem'><HashLink to='/about#core-values' className='nav__sublink'>Core Values</HashLink></li>
                            <li className='nav__subitem'><HashLink to='/about#vision' className='nav__sublink'>Vision</HashLink></li>
                            <li className='nav__subitem'><HashLink to='/about#approach' className='nav__sublink'>Approach</HashLink></li>
                            <li className='nav__subitem'><HashLink to='/about#process' className='nav__sublink'>Process</HashLink></li>
                            <li className='nav__subitem'><HashLink to='/about/#team' className='nav__sublink'>Our Team</HashLink></li>
                        </ul>
                    </li>
                    <li className='nav__item'>
                        <NavLink to='/solutions' className='nav__link nav__link--flex'>
                            Solutions<FontAwesomeIcon fontSize='0.6875rem' icon='fa-solid fa-chevron-down' />
                        </NavLink>
                        <ul className='nav__submenu' role='menu'>
                            <li className='nav__subitem'><HashLink to='/solutions#eess' className='nav__sublink'>Enterprise Security Solutions &amp; Services</HashLink></li>
                            <li className='nav__subitem'><HashLink to='/solutions#iss' className='nav__sublink'>Infrastructure Solutions &amp; Services</HashLink></li>
                            <li className='nav__subitem'><HashLink to='/solutions#bsms' className='nav__sublink'>Business Service Management</HashLink></li>
                            <li className='nav__subitem'><HashLink to='/solutions#ens' className='nav__sublink'>Enterprise Networking Solutions</HashLink></li>
                            <li className='nav__subitem'><HashLink to='/solutions#cms' className='nav__sublink'>Cloud and Mobile Solutions</HashLink></li>
                            <li className='nav__subitem'><HashLink to='/solutions#bes' className='nav__sublink'>Business Enterprise Software</HashLink></li>
                        </ul>
                    </li>
                    <li className='nav__item'><NavLink className='nav__link' to='/blog'>Blog</NavLink></li>
                    <li className='nav__item'><NavLink className='nav__link' to='/contact'>Contact Us</NavLink></li>
                </ul>
            </nav>
            <HamburgerMenu />
        </NavbarSC>
    )
}

export default Navbar