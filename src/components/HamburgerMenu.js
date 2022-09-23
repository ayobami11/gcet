import { useState, useEffect } from 'react';

import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

const Menu = styled.div`
    @media (min-width: 700px) {
        display: none;
    }
`;

const HamburgerButton = styled.button`
    cursor: pointer;
    position: relative;
    width: 40px;
    height: 40px;
    padding: .25em;
    transition: all .5s;
    top: 0;
    left: 0;

    .icon {
        background: ${({ theme }) => theme.colors.darkGray};
        position: absolute;
        height: 2px;
        width: 30px;
        transition: all .5s;

         ${({ $isMenuOpen }) => $isMenuOpen && `
            transform: rotate(180deg);
            background: transparent;
            left: 10px;
        `};
        
        &::before,
        &::after {
            content: '';

            background: ${({ theme }) => theme.colors.darkGray};
            display: block;
            left: 0;
            width: 30px;
            height: 2.5px;
            position: absolute;
            transition: all .5s;

            ${({ $isMenuOpen }) => $isMenuOpen && `
                top: 0 !important;
            `};
            
        }

        &::before {
            top: -10px;
            transform: ${({ $isMenuOpen }) => $isMenuOpen ? 'rotate(45deg)' : 'none'};
        }

        &::after {
            top: 10px;
            transform: ${({ $isMenuOpen }) => $isMenuOpen ? 'rotate(-45deg)' : 'none'};
        }
    }
`;

const Nav = styled.nav`
    background: hsl(22, 80%, 96%);
    overflow: hidden;
    position: fixed;
    left: 0;
    top: 77px;
    width: 100%;
    z-index: 10;

    display: grid;
    align-content: center;
    height: ${({ $isMenuOpen }) => $isMenuOpen ? 'calc(100vh - 78px)' : 0};
    opacity: ${({ $isMenuOpen }) => $isMenuOpen ? 1 : 0};

    transition: all .5s;

    .ham__list {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.5em;
    }

    .ham__link {
        color: inherit;
        font-size: 2rem;
        font-weight: 600;

        &.active {
            color: ${({ theme }) => theme.colors.lightBlue};
        }
    }
`;

const HamburgerMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenuDisplay = () => setIsMenuOpen(prevState => !prevState);

    useEffect(() => {
        return () => setIsMenuOpen(false);
    }, []);

    return (
        <Menu>
            <HamburgerButton $isMenuOpen={isMenuOpen} className='nav__btn' onClick={toggleMenuDisplay}>
                <div className="icon"></div>
            </HamburgerButton>
            <Nav $isMenuOpen={isMenuOpen}>
                <ul className='ham__list'>
                    <li className='ham__item'><NavLink className='ham__link' to='/' end>Home</NavLink></li>
                    <li className='ham__item'>
                        <NavLink to='/about' className='ham__link'>About Us</NavLink>
                        {/* <details>
                            <summary><NavLink to='/about' className='ham__link'>About Us</NavLink></summary>
                            <ul>
                                <li><HashLink to='/about#who-we-are'>Who we are</HashLink></li>
                                <li><HashLink to='/about#values'>Core Values</HashLink></li>
                                <li><HashLink to='/about#vision'>Vision</HashLink></li>
                                <li><HashLink to='/about#approach'>Approach</HashLink></li>
                                <li><HashLink to='/about#process'>Process</HashLink></li>
                                <li><HashLink to='/about#team'>Our Team</HashLink></li>
                            </ul>
                        </details> */}
                    </li>
                    <li className='ham__item'>
                        <NavLink to='/solutions' className='ham__link'>Solutions</NavLink>
                        {/* <details>
                            <summary><NavLink to='/solutions' className='ham__link'>Solutions</NavLink></summary>
                            <ul>
                                <li><HashLink to='/solutions#eess'>Enterprise Security Solutions &amp; Services</HashLink></li>
                                <li><HashLink to='/solutions#iss'>Infrastructure Solutions &amp; Services</HashLink></li>
                                <li><HashLink to='/solutions#bsms'>Business Service Management</HashLink></li>
                                <li><HashLink to='/solutions#ens'>Enterprise Networking Solutions</HashLink></li>
                                <li><HashLink to='/solutions#cms'>Cloud and Mobile Solutions</HashLink></li>
                                <li><HashLink to='/solutions#bes'>Business Enterprise Software</HashLink></li>
                            </ul>
                        </details> */}
                    </li>
                    <li className='ham__item'><NavLink to='/blog' className='ham__link'>Blog</NavLink></li>
                    <li className='ham__item'><NavLink to='/contact' className='ham__link'>Contact Us</NavLink></li>
                </ul>
            </Nav>
        </Menu >
    )
}

export default HamburgerMenu