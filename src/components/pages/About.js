import React from 'react';

import styled from 'styled-components';

import { convertHexToRgba } from '../../utils/convertHexToRgba';

import Navbar from '../Navbar';
import Footer from '../Footer';

import heroImg from '../../assets/images/about/hero.png';
import whoWeAreImg from '../../assets/images/about/who-we-are.jpg';
import visionImg from '../../assets/images/about/vision.jpg';
import approachImg from '../../assets/images/about/approach.jpg';
import processImg from '../../assets/images/about/process.jpg';

import passionImg from '../../assets/images/about/passion.png';
import customerFocusImg from '../../assets/images/about/customer-focus.png';
import integrityImg from '../../assets/images/about/integrity.png';
import effectivenessImg from '../../assets/images/about/effectiveness.png';

import managingDirectorImg from '../../assets/images/about/managing-director.jpg';
import cooImg from '../../assets/images/about/coo.jpg';
import technicalLeadImg from '../../assets/images/about/technical-lead.jpg';

import faceBookIcon from '../../assets/images/about/facebook.svg';
import twitterIcon from '../../assets/images/about/twitter.svg';
import instagramIcon from '../../assets/images/about/instagram.svg';
import linkedinIcon from '../../assets/images/about/linkedin.svg';

const Main = styled.main`
    margin-top: 4.5em;

    h2 {
        font-size: 2.125rem;
        font-weight: 700;
    }
`;

const Hero = styled.section`
    background: ${({ theme }) => convertHexToRgba(theme.colors.lightBlue, .25)};
    padding: 0 5%;
    padding-top: 5em;

    display: flex;
    flex-direction: column;
    gap: 1.5em;

    > * {
        flex: 1;
    }

    .hero__text {
        max-width: 612px;
    }

    .hero__heading {
        font-size: clamp(2.25rem, 4vw, 3.625em);
        font-weight: 700;
        margin-bottom: .5em;
    }

    .hero__p {
        letter-spacing: .01em;
        line-height: 1.5;
    }

    .hero__img-c {
        align-self: stretch;
        text-align: right;
    }

    .hero__img {
        height: 100%;
    }

    @media (min-width: 800px) {
        padding-top: 0;

        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
`;

const WhoWeAre = styled.section`
    margin: 3em 5%;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2em;

    .about__text {
        letter-spacing: .01em;
        line-height: 1.5;
        max-width: 653px;
    }

    .about__heading {
        margin-bottom: .5em;
    }
    
    .about__p {
        margin-bottom: .25em;
    }

    @media (min-width: 800px) {
        flex-direction: row;
        justify-content: space-between;
    }
`;

const CoreValues = styled.section`
    margin: 5em 5%;

    .values__heading {
        margin-bottom: .5em;
    }

    .values__intro-text {
        letter-spacing: .01em;
        line-height: 1.5;
        max-width: 696px;
    }

    .values__list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: flex-start;
        gap: 2em;

        margin: 3em auto;
        min-height: 316px;
        max-width: 976px;
    }

    .value {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.5em;

        box-shadow: 2px 4px 6px 5px rgba(3, 169, 244, 0.1);
        border-radius: .625em;
        max-width: 206px;
        padding: 1.5em .75em 1.25em;
        text-align: center;

        &:nth-child(even) {
            align-self: flex-end;
        }
    }

    .value__figc {

    }

    .value__name {
        color: ${({ theme }) => theme.colors.lightBlue};
        display: block;
        font-weight: 700;
        margin-bottom: .5em;
    }

    .value__p {
        font-size: .75rem;
        line-height: 1.5;
    }

    @media (min-width: 489px) {
        .values__list {
            justify-content: space-between;
        }
    }
`;

const Vision = styled.section`
    margin: 2em 5%;

    display: flex;
    flex-direction: column;
    gap: 2em;

    .vision__heading {
        margin-bottom: .5em;
    }

    .vision__text {
        letter-spacing: .01em;
        line-height: 1.5;
        max-width: 515px;
    }

    .vision__img {
        /* align-self: center; */
    }

    @media (min-width: 800px) {
        flex-direction: row;
        justify-content: space-between;
    }
`;

const Approach = styled.section`
    margin: 8em 5%;

    display: flex;
    flex-direction: column;
    gap: 2em;
    
    .approach__text {
        max-width: 508px;
    }
    
    .approach__heading {
        margin-bottom: 1em;
    }

    .approach__p {
        letter-spacing: .01em;
        line-height: 1.5;
    }

    .approach__img {
        border-radius: .625em;
    }
    
    @media (min-width: 800px) {
        flex-direction: row;
        justify-content: space-between;
    }
    `;

const Process = styled.section`
    margin: 4em 5%;
    
    display: flex;
    flex-direction: column;
    gap: 2em;
    
    .process__text {
        max-width: 508px;
    }
    
    .process__heading {
        margin-bottom: .5em;
    }
    
    .process__p {
        letter-spacing: .01em;
        line-height: 1.5;
    }

    .process__img {
        border-radius: .625em;
        /* align-self: center; */
    }

    @media (min-width: 800px) {
        flex-direction: row;
        justify-content: space-between;
    }
`;

const Team = styled.section`
    margin: 7em 5%;

    .team__heading {
        margin-bottom: 2em;
        text-align: center;
    }

    .team__list {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2em;

        margin: 2em auto;
        max-width: 815px;
    }

    .teammate {
        box-shadow: 1px 3px 15px 1px rgba(3, 169, 244, 0.1);
        border-radius: .625em;
        max-width: 300px;
        padding: 1em;
        padding-top: 2em;
        text-align: center;
        width: 100%;
    }

    .teammate__img {
        border-radius: 50%;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    }

    .teammate__name {
        display: block;
        font-weight: 700;
        margin: 1em 0 .35em;
    }

    .teammate__role {
        font-size: .875rem;
    }

    .teammate__socials {
        margin-top: 1.5em;

        display: flex;
        justify-content: center;
        gap: .5em;
    }

    @media (min-width: 800px) {
        .team__list {
            flex-direction: row;
            justify-content: space-between;
        }

        .teammate {
            max-width: 225px;
        }
    }
`;

const About = () => {
    return (
        <>
            <Navbar />
            <Main>
                <Hero>
                    <div className='hero__text'>
                        <h1 className='hero__heading'>We are experts in delivering IT solutions</h1>
                        <p className='hero__p'>
                            We help businesses build their IT organisation from the heart of growth and innovation to increased all-round efficiency.
                        </p>
                    </div>
                    <div className='hero__img-c'>
                        <img className='hero__img' src={heroImg} alt="" />
                    </div>
                </Hero>
                <WhoWeAre id='who-we-are'>
                    <div className='about__text'>
                        <h2 className='about__heading'>Who we are</h2>
                        <p className='about__p'>
                            Global Concept Emerge Technologies Limited is an IT Solutions delivery company incorporated under the Companies and Allied Matters Act 1990, to undertake and provide various information technology, as well as advisory services to all sectors of the Nigerian economy including Government departments &amp; as well as educational institutions.
                        </p>
                        <p className='about__p'>
                            As certified technology company with interest in carefully tailored Information Technology Solutions, we are geared solely towards Consulting, Enterprise solutions architecture, Service delivery and implementation of both Networks, Security and Infrastructure.
                        </p>
                        <p className='about__p'>
                            Enterprise customer performance and success is significantly impacted by IT infrastructure and management capabilities. IT and Infrastructure service management services have undergone a significant change and increasingly in modern day strategy. Our teams are poised on delivering business value-add solutions to improved efficiency at reduced costs.
                        </p>
                        <p className='about__p'>
                            Our capability and competency lie in our unbiased approach to simplify complex situation into a milestone success, professionalism, ability to standby our words and our expertise are seasoned engineers who have successfully delivered, deployed and managed several enterprise solutions locally and international on IT projects.
                        </p>
                    </div>
                    <img className='about__img' src={whoWeAreImg} alt="" />
                </WhoWeAre>
                <CoreValues id='core-values'>
                    <h2 className='values__heading'>Core Values</h2>
                    <p className='values__intro-text'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh erat varius quis sagittis purus volutpat. Mattis turpis congue suspendisse velit. Dignissim bibendum praesent nam lacus, faucibus.
                    </p>
                    <div className="values__list">
                        <figure className='value'>
                            <img src={passionImg} alt="" />
                            <figcaption className='value__figc'>
                                <span className='value__name'>Passion</span>
                                <p className='value__p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </figcaption>
                        </figure>
                        <figure className='value'>
                            <img src={customerFocusImg} alt="" />
                            <figcaption className='value__figc'>
                                <span className='value__name'>Customer Focus</span>
                                <p className='value__p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </figcaption>
                        </figure>
                        <figure className='value'>
                            <img src={integrityImg} alt="" />
                            <figcaption className='value__figc'>
                                <span className='value__name'>Integrity</span>
                                <p className='value__p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </figcaption>
                        </figure>
                        <figure className='value'>
                            <img src={effectivenessImg} alt="" />
                            <figcaption className='value__figc'>
                                <span className='value__name'>Effectiveness</span>
                                <p className='value__p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </figcaption>
                        </figure>
                    </div>
                </CoreValues>
                <Vision id='vision'>
                    <div className='vision__text'>
                        <h2 className='vision__heading'>Vision</h2>
                        <p>Providing bespoke and secure solutions that drive business innovation, agility and customer satisfaction.</p>
                    </div>
                    <img className='vision__img' src={visionImg} alt="" />
                </Vision>
                <Approach id='approach'>
                    <div className='approach__text'>
                        <h2 className='approach__heading'>Approach</h2>
                        <p className='approach__p'>
                            At GCET Limited, our goal is to simplify complexity to the advantage of our clients where we keep researching IT solutions for current and future needs to ensure customers business model evolves with time. This makes us to provide complete solutions dedicated to support our client's business KPIs in order to gain speed, accuracy and efficiency. We enable businesses to transform into digital enterprises for the ultimate competitive advantage. Making the complex things look simple is our approach and this enlist GCET Limited as new breed system integrator.
                        </p>
                    </div>
                    <img className='approach__img' src={approachImg} alt="" />
                </Approach>
                <Process id='process'>
                    <div className='process__text'>
                        <h2 className='process__heading'>Process</h2>
                        <p className='process__p'>
                            At GCET, we try to work with the people who are directly involved in the process. Their ideas reveal new approaches, problem solving mentality that allow us to buy into change as culture for world class analysis, evaluation and recommendation. We listen and conduct impact analysis to understand full effect of clients' needs to spot possible risks and points of failures which we apply professional remediation to achieve clients expected outcome. In addressing these demands, organizations are looking for new ways to consolidate IT resources—whether in the data center or cloud. The increasing demand is how to simplify IT environment and pave way for innovation. GCET Limited provides following solutions as services to help our clients succeed and exceed their expectations.
                        </p>
                    </div>
                    <img className='process__img' src={processImg} alt="" />
                </Process>
                <Team id='team'>
                    <h2 className='team__heading'>Our Team</h2>

                    <div className='team__list'>
                        <figure className='teammate'>
                            <img src={managingDirectorImg} alt="Managing Director" className='teammate__img' />
                            <figcaption>
                                <span className='teammate__name'>Tayo Olubanke</span>
                                <span className='teammate__role'>Managing Director</span>
                                <div className='teammate__socials'>
                                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" title='Facebook'>
                                        <img src={faceBookIcon} alt="Facebook icon" />
                                    </a>
                                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" title='Twitter'>
                                        <img src={twitterIcon} alt="Twitter icon" />
                                    </a>
                                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" title='Instagram'>
                                        <img src={instagramIcon} alt="Instagram icon" />
                                    </a>
                                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" title='Linkedin'>
                                        <img src={linkedinIcon} alt="Linkedin icon" />
                                    </a>
                                </div>
                            </figcaption>
                        </figure>
                        <figure className='teammate'>
                            <img src={cooImg} alt="COO / CTO" className='teammate__img' />
                            <figcaption>
                                <span className='teammate__name'>Solomon Awosina</span>
                                <span className='teammate__role'>
                                    <abbr title="Chief Operating Officer">COO</abbr>/<abbr title="Chief Technology Officer">CTO</abbr>
                                </span>
                                <div className='teammate__socials'>
                                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" title='Facebook'>
                                        <img src={faceBookIcon} alt="Facebook icon" />
                                    </a>
                                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" title='Twitter'>
                                        <img src={twitterIcon} alt="Twitter icon" />
                                    </a>
                                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" title='Instagram'>
                                        <img src={instagramIcon} alt="Instagram icon" />
                                    </a>
                                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" title='Linkedin'>
                                        <img src={linkedinIcon} alt="Linkedin icon" />
                                    </a>
                                </div>
                            </figcaption>
                        </figure>
                        <figure className='teammate'>
                            <img src={technicalLeadImg} alt="Technical Lead" className='teammate__img' />
                            <figcaption>
                                <span className='teammate__name'>Ajibola Abiodun</span>
                                <span className='teammate__role'>Technical Lead</span>
                                <div className='teammate__socials'>
                                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" title='Facebook'>
                                        <img src={faceBookIcon} alt="Facebook icon" />
                                    </a>
                                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" title='Twitter'>
                                        <img src={twitterIcon} alt="Twitter icon" />
                                    </a>
                                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" title='Instagram'>
                                        <img src={instagramIcon} alt="Instagram icon" />
                                    </a>
                                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" title='Linkedin'>
                                        <img src={linkedinIcon} alt="Linkedin icon" />
                                    </a>
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                </Team>
            </Main>
            <Footer />
        </>
    )
}

export default About