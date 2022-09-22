import { HashLink } from 'react-router-hash-link';

import styled from 'styled-components';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import logo from '../assets/images/logo-footer.svg';

const FooterSC = styled.footer`
    background: ${({ theme }) => theme.colors.lightBlue};
    color: ${({ theme }) => theme.colors.white};
    font-weight: 500;
    letter-spacing: .01em;
    padding: 3em 5% 1.5em;
    text-align: center;

    .footer__top {
        display: flex;
        flex-direction: column;
        gap: 2em;
        
        margin-bottom: 3em;

        > * {
            flex: 1;
        }
    }

    .footer__company {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1em;
    }

    .footer__logo {
        /* align-self: flex-start; */
    }

    .footer__figc {
        line-height: 1.4375;
    }

    .footer__heading {
        font-size: 1.25rem;
        font-weight: 600;
        margin-bottom: 1.25em;
    }

    .footer__list {
        display: flex;
        flex-direction: column;
        gap: 1em;
    }

    .footer__link {
        color: inherit;
    }

    .footer__address {

    }

    .address-item {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: .75em;

        margin-bottom: 1em;
    }

    .footer__copyright {
        display: flex;
        align-items: center;
        gap: .5em;
    }

    @media (min-width: 900px) {
        text-align: left;

        .footer__top {   
            flex-direction: row;
            justify-content: space-between;

            > * {
                max-width: fit-content;
            }
        }

        .footer__company {
            align-items: flex-start;
            max-width: 317px;
        }

        .address-item {
            justify-content: flex-start;
        }
    }
`;

const Footer = () => {
    return (
        <FooterSC>
            <div className="footer__top">
                <figure className='footer__company'>
                    <img src={logo} alt="GCET logo" className='footer__logo' />
                    <figcaption className='footer__figc'>
                        Global Concept Emerge Technologies Limited has infrastructure, network &amp; security certified experts and specialists in these business IT solutions.
                    </figcaption>
                </figure>
                <nav>
                    <h3 className='footer__heading'>Solutions</h3>
                    <ul className='footer__list'>
                        <li><HashLink to='/solutions#eess' className='footer__link'>Enterprise Security Solutions &amp; Services</HashLink></li>
                        <li><HashLink to='/solutions#iss' className='footer__link'>Infrastructure Solutions &amp; Services</HashLink></li>
                        <li><HashLink to='/solutions#bsms' className='footer__link'>Business Service Management</HashLink></li>
                        <li><HashLink to='/solutions#ens' className='footer__link'>Enterprise Networking Solutions</HashLink></li>
                        <li><HashLink to='/solutions#cms' className='footer__link'>Cloud and Mobile Solutions</HashLink></li>
                        <li><HashLink to='/solutions#bes' className='footer__link'>Business Enterprise Software</HashLink></li>
                    </ul>
                </nav>
                <address className='footer__address'>
                    <h3 className='footer__heading'>Contact Us</h3>
                    <a href="tel:+234 1 2719173" className='footer__link address-item'>
                        <FontAwesomeIcon icon='fa-solid fa-phone' />
                        <span>+234 1 2719173</span>
                    </a>
                    <a href="mailto:info@gcetng.com" className='footer__link address-item'>
                        <FontAwesomeIcon icon='fa-regular fa-envelope' />
                        <span>info@gcetng.com</span>
                    </a>
                    <div className='address-item'>
                        <FontAwesomeIcon icon='fa-regular fa-address-book' />
                        <p>5th floor, Mulliner Towers, 39 <br /> Alfred Rewane Road, Ikoyi, Lagos.</p>
                    </div>
                </address>
            </div>

            <p className='footer__copyright'>
                <FontAwesomeIcon icon='fa-regular fa-copyright' />
                <span>Copyrights <abbr title="Global Concept Emerge Technologies">GCET</abbr>. All rights reserved.</span>
            </p>
        </FooterSC>
    )
}

export default Footer