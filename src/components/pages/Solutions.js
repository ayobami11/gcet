import React from 'react';

import styled from 'styled-components';

import Navbar from '../Navbar';
import Footer from '../Footer';

import eessImg from '../../assets/images/solutions/eess.jpg';
import issImg from '../../assets/images/solutions/iss.jpg';
import bsmsImg from '../../assets/images/solutions/bsms.jpg';
import ensImg from '../../assets/images/solutions/ens.jpg';
import cmsImg from '../../assets/images/solutions/cms.jpg';
import besImg from '../../assets/images/solutions/bes.jpg';

const Main = styled.main`
    margin-top: 8em;

    p {
        margin: 1em 0;
    }

    .bold {
        font-weight: 700;
    }

    .solution {
        display: flex;
        flex-direction: column;
        gap: 2em;

        margin-bottom: 8em;

        &:nth-child(odd) .solution__img-c {
            align-self: flex-end;
            margin-left: 5%;
        }
        
        &:nth-child(even) .solution__img-c {
            align-self: flex-start;
            margin-right: 5%;
        }
    }

    .solution__text {
        letter-spacing: .01em;
        line-height: 1.5;
        margin: 0 5%;
        max-width: 628px;
    }

    .solution__heading {
        font-size: 2.125rem;
        font-weight: 700;
        line-height: 1.26;
        margin-bottom: .5em;
    }


    .solution__img-c {
        max-width: 423px;
    }

    .solution__img {
        object-fit: contain;
    }

    @media (min-width: 800px) {
        .solution {
            justify-content: space-between;
            
            &:nth-child(odd) {
                flex-direction: row;     
            }
            
            &:nth-child(even) {
                flex-direction: row-reverse;
            }
        }

        .solution__img-c {
            align-self: flex-end;
            min-width: 300px;
        }
    }
`;

const EESS = styled.section`
    /* display: flex;
    flex-direction: column; */

    .solution__list {
        list-style: disc inside;
        margin-top: 1em;
    }
`;

const Solutions = () => {
    return (
        <>
            <Navbar />
            <Main>
                <EESS id='eess' className='solution'>
                    <div className='solution__text'>
                        <h2 className='solution__heading'>Enterprise Security Solutions &amp; Services (ESSS)</h2>
                        <p>Our goal for this highly sensitive area is to provide security solutions across all levels of the IT Infrastructure from Network, Servers, Storage infrastructure to Application and Database.</p>

                        <p>With our security solutions and services, we deliver end to end Information, Network, Data, process and people security for organizations of all types. Such products and services includes:</p>

                        <ul className='solution__list'>
                            <li>UTMs/NGFs/NGIPS</li>
                            <li>Endpoint Security (antivirus/antimalware/antibot/Encryption)</li>
                            <li>Gateway security solutions</li>
                            <li>Events and log monitoring /management</li>
                            <li>DB, App &amp; data encryption</li>
                            <li>System &amp; user activity monitoring and management</li>
                        </ul>
                        <p className='bold'>
                            We help organizations secure, manage, monitor, or document what is important to them in very cost-effective manner.
                        </p>
                    </div>
                    <div className="solution__img-c">
                        <img className='solution__img' src={eessImg} alt="" />
                    </div>
                </EESS>
                <section id='iss' className='solution'>
                    <div className='solution__text'>
                        <h2 className='solution__heading'>Infrastructure Solutions &amp; Services (ISS)</h2>
                        <p>
                            Legacy storage and protection methodologies are at the limits of their capabilities while budgets for new infrastructure are likewise limited. As a result, many enterprises have exhausted their alternatives to cost-effectively address these infrastructure challenges. We are offer infrastructure and data center operation across data asset management, Data Storage, Server orchestration and integration. Deploy business applications, data analytics, data and system virtualization, and cloud solutions faster using proven data center solutions. Experience superior scalability, simplified management, and streamlined operations. This will Increase your flexibility and interoperability with a programmable infrastructure built on open standards. Do all of this with less risk and lower costs.
                        </p>
                        <p>
                            Every organization requires IT infrastructure to operate, we have partnered the best-in-class OEM providers to make sure that we can offer our customers those solutions that give their business the necessary agility to leap-frog competition while getting the best out of their investment and avoiding technology lock-in.
                        </p>
                    </div>
                    <div className="solution__img-c">
                        <img className='solution__img' src={issImg} alt="" />
                    </div>
                </section>
                <section id='bsms' className='solution'>
                    <div className='solution__text'>
                        <h2 className='solution__heading'>Business Service Management Solutions</h2>
                        <p>
                            The goal of every IT Service Management framework is to ensure that the right processes, people and technology are in place so that the organization can meet its business goals. Transform your "call center" into an indispensable business centric service support provider. IT "request and support" organizations are redefining their core mission to assist the business in driving to new standards, while realizing their goals through an evolution of process efficiency, cost management, and automation.
                        </p>
                    </div>
                    <div className="solution__img-c">
                        <img className='solution__img' src={bsmsImg} alt="" />
                    </div>
                </section>
                <section id='ens' className='solution'>
                    <div className='solution__text'>
                        <h2 className='solution__heading'>Enterprise Networking Solutions</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac tellus in risus ut amet ipsum. Sollicitudin quam mi ullamcorper a diam donec. Dignissim nisl volutpat lorem nulla. Varius duis diam sed nulla eu. Risus consectetur sit commodo lectus erat. Facilisi cursus integer scelerisque habitasse vitae sit sem sem leo. Aenean nunc vitae mi cursus elementum, tempus mattis. Integer venenatis vestibulum nec diam enim, lectus commodo mattis consequat. Id consectetur pellentesque amet posuere commodo quam. Semper lectus scelerisque nunc, ornare nunc id egestas.
                        </p>
                        <p>
                            Penatibus elementum sit massa dui suspendisse metus. Amet vitae maecenas adipiscing arcu lacus tortor. Orci, tempus iaculis venenatis sed. Urna, aliquam elementum varius pellentesque in amet, dignissim suspendisse elementum. Adipiscing sit congue amet nibh ut pharetra quis phasellus purus. Mauris eleifend sem molestie cursus ullamcorper. Imperdiet ultricies enim urna semper quis vitae, laoreet dolor. Libero a, proin rutrum at adipiscing volutpat vulputate. Eget feugiat a, nisl ac nec.
                            Arcu pellentesque placerat arcu dui mollis. Fames in rhoncus sed viverra lectus arcu est in et.
                        </p>
                    </div>
                    <div className="solution__img-c">
                        <img className='solution__img' src={ensImg} alt="" />
                    </div>
                </section>
                <section id='cms' className='solution'>
                    <div className='solution__text'>
                        <h2 className='solution__heading'>Cloud and Mobile Solutions</h2>
                        <p>
                            We provide private cloud offerings for customers that have the supported Infrastructure in place and provide public cloud support for customers with offsite infrastructure needs.
                        </p>
                        <p>
                            Under cloud solutions, we will provide self-service, service catalogues, automation and orchestration type of solutions using industry-leading technologies to achieve a flexible solution that will drive maximum customer benefits at very reasonable costs.
                        </p>
                        <p>

                            In addition to these solutions, we will provide other supporting solutions like cloud backup and recovery as well as Cloud Disaster Recovery solutions and the link if necessary. With our Cloud Solutions &amp; Services, we help organizations enable IT-as-a-Service (ITaaS) (for internal or external use), using; to the extent possible, their existing infrastructure. Also we believe that improving on SLA's, added productivity via self-service and service analytics will enable our customers to derive maximum utilization from their IT investment.
                        </p>
                        <p>

                            As the world is going more and more mobile, we believe that the future of technology will be largely mobile - as already evident and organizations who want highly motivated staff and improved productivity will have no choice but to have the allowance and capability, to effectively implement long lasting BYOD (bring your own device) strategies and management technologies.
                        </p>
                        <p>

                            We help organizations to empower their staff to be more productive and mix work and play to the benefit of the business and the freedom of staff by enabling bring your own device 'BYOD' capabilities. Organizations can exploit mobile device &amp; application management to the benefit of their business. We are well positioned to help organizations advance in the mobile era.
                        </p>
                        <p>

                            We strongly believe we will drive differentiation in this space, by providing cost effective mobile application and mobile device management solutions and services to help organizations cope in the "new" world.
                        </p>
                    </div>
                    <div className="solution__img-c">
                        <img className='solution__img' src={cmsImg} alt="" />
                    </div>
                </section>
                <section id='bes' className='solution'>
                    <div className='solution__text'>
                        <h2 className='solution__heading'>Business Enterprise Software</h2>
                        <p>
                            Today's business needs to be Dynamic, Volatile and highly competitive not business as usual. To keep moving forward you need every affordable advantage to stay competitive, innovative, nimble and profitable while getting ready for tomorrow. Accomplishing this is about maintaining your organization's backbone, infrastructure and processes so they're up-to-date and ready to take you to the next plateau. It means ensuring that systems are highly efficient - maximizing the integration between value chain components - and implementing the right IT systems that ensure you getting the most value and collaboration from your internal and external resources.
                        </p>
                        <p>
                            Great organizations know how important enterprise software is - and it's what helps them stay ready to innovate through any business cycle, far before their competition does. To take this on and receive the results you demand, you need a trusted and experienced IT partner (Global Concept Emerge Technologies (GCET)).
                        </p>
                    </div>
                    <div className="solution__img-c">
                        <img className='solution__img' src={besImg} alt="" />
                    </div>
                </section>
            </Main>
            <Footer />
        </>
    )
}

export default Solutions