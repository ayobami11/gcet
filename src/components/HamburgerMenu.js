import { useState } from 'react';

import { Link, NavLink } from 'react-router-dom';

import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Menu = styled.div`
    @media (min-width: 700px) {
        display: none;
    }
`;

const Nav = styled.nav`
    background: ${({ theme }) => theme.colors.white};
    position: fixed;
    left: 0;
    top: 78px;
    width: 100%;
    height: 100vh;
    z-index: 10;

    display: ${({ $isMenuOpen }) => $isMenuOpen ? 'grid' : 'none'};
    place-items: center;
`;

const HamburgerMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenuDisplay = () => setIsMenuOpen(prevState => !prevState);

    return (
        <Menu>
            <button className='nav__btn' onClick={toggleMenuDisplay}>
                {isMenuOpen ?
                    <FontAwesomeIcon fontSize='1.5rem' icon='fa-solid fa-xmark' /> :
                    <FontAwesomeIcon fontSize='1.5rem' icon='fa-solid fa-bars' />
                }
            </button>
            <Nav $isMenuOpen={isMenuOpen}>
                <ul>
                    <li className='nav__item'><NavLink className='nav__link' to='/'>Home</NavLink></li>
                    <li className='nav__item'>
                        <details>
                            <summary>About Us</summary>
                            <ul>
                                <li><Link to='/'>Who we are</Link></li>
                                <li><Link to='/'>Core Values</Link></li>
                                <li><Link to='/'>Vision</Link></li>
                                <li><Link to='/'>Approach</Link></li>
                                <li><Link to='/'>Process</Link></li>
                                <li><Link to='/'>Our Team</Link></li>
                            </ul>
                        </details>
                    </li>
                    <li className='nav__item'>
                        <details>
                            <summary>Solutions</summary>
                            <ul>
                                <li><Link to='/'>Enterprise Security Solutions &amp; Services</Link></li>
                                <li><Link to='/'>Infrastructure Solutions &amp; Services</Link></li>
                                <li><Link to='/'>Business Service Management</Link></li>
                                <li><Link to='/'>Enterprise Networking Solutions</Link></li>
                                <li><Link to='/'>Cloud and Mobile Solutions</Link></li>
                                <li><Link to='/'>Business Enterprise Software</Link></li>
                            </ul>
                        </details>
                    </li>
                    <li className='nav__item'><NavLink className='nav__link' to='/blog'>Blog</NavLink></li>
                    <li className='nav__item'><NavLink className='nav__link' to='/contact'>Contact Us</NavLink></li>
                </ul>
            </Nav>
        </Menu>
    )
}

export default HamburgerMenu