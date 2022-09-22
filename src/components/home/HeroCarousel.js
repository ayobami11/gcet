import { Link } from 'react-router-dom';

import styled from "styled-components";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Pagination, Autoplay, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';

import { convertHexToRgba } from "../../utils/convertHexToRgba";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import heroImg1 from '../../assets/images/home/hero-img-1.jpg';
import heroImg2 from '../../assets/images/home/hero-img-2.jpg';
import heroImg3 from '../../assets/images/home/hero-img-3.jpg';

const SwiperSC = styled(Swiper)`
    padding-bottom: 3em;

    .swiper-pagination {
        margin-top: 3em;
    }

    .swiper-pagination-bullet {
        background: ${({ theme }) => convertHexToRgba(theme.colors.lightBlue, .5)};
        opacity: 1;
        
        &-active {
            background: ${({ theme }) => theme.colors.lightBlue};
            transform: scale(1.5);
        }
    }
    
    .slide__fig {
        display: flex;
        flex-direction: column;
        gap: 1.5em;
    }
    
    .slide__figc {
    /* .slide__img { */
        /* flex: 1; */
    }
    
    .slide__figc {
        margin: 0 5%;
        max-width: 462px;
        
        &--2 {
            max-width: 528px;
        }
    }
    
    .slide__heading {
        font-size: clamp(2.25em, 8vw, 4.5em);
        font-weight: 700;
        margin-bottom: .25em;
    }
    
    .slide__p {
        line-height: 1.5;
        margin: .5em 0;
    }

    .slide__img-c {
        align-self: flex-end;
        margin-left: 5%;
        max-width: 580px;
    }
    
    .slide__img {
        object-fit: contain;
    }

    .consultancy-btn {
        display: flex;
        align-items: center;
        gap: .625em;
        
        border-radius: .25em;
        background: ${({ theme }) => theme.colors.lightBlue};
        color: ${({ theme }) => theme.colors.white};
        margin: 1.25em 0;
        padding: .625em 1em;
        width: fit-content;
    }
    
    .call-btn {
        color: ${({ theme }) => theme.colors.lightBlue};
        font-size: 1rem;
    }

    
    @media (min-width: 800px) {
        .slide__fig {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
        }

        .slide__img-c {
            min-width: 350px;
        }
    }
`;

const HeroCarousel = ({ openModal }) => {

    return (
        <SwiperSC
            tag='section'
            pagination={{ clickable: true }}
            loop={true}
            effect='fade'
            fadeEffect={{
                crossFade: true
            }}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false
            }}
            modules={[Pagination, Autoplay, EffectFade]}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={({ realIndex }) => setCurrentSlide(realIndex)}
        >
            <SwiperSlide tag='article' className='slide'>
                <figure className='slide__fig'>
                    <figcaption className='slide__figc slide__figc--1'>
                        <h1 className='slide__heading'>Grow Your Business</h1>
                        <p className='slide__p'>
                            We help businesses build their IT organisation from the heart of
                            growth and innovation to increased all-round efficiency.
                        </p>

                        <Link className='consultancy-btn' to='/consultancy'>
                            <span>Get Consultancy</span>
                            <FontAwesomeIcon icon='fa-solid fa-arrow-right' /></Link>
                        <button className='call-btn' onClick={openModal}>Or would you prefer to schedule a Quick Call?</button>
                    </figcaption>
                    <div className="slide__img-c">
                        <img className='slide__img' src={heroImg1} alt="" />
                    </div>
                </figure>
            </SwiperSlide>
            <SwiperSlide tag='article' className='slide'>
                <figure className='slide__fig'>
                    <figcaption className='slide__figc slide__figc--2'>
                        <h1 className='slide__heading'>Plan your Dream</h1>
                        <p className='slide__p'>
                            You have an IT roadmap, or have not developed one yet, we are here to help you build your IT dream from planning phase to full execution.
                        </p>

                        <Link className='consultancy-btn' to='/consultancy'>
                            <span>Get Consultancy</span>
                            <FontAwesomeIcon icon='fa-solid fa-arrow-right' /></Link>
                        <button className='call-btn' onClick={openModal}>Or would you prefer to schedule a Quick Call?</button>
                    </figcaption>
                    <div className="slide__img-c">
                        <img className='slide__img' src={heroImg2} alt="" />
                    </div>
                </figure>
            </SwiperSlide>
            <SwiperSlide tag='article' className='slide'>
                <figure className='slide__fig'>
                    <figcaption className='slide__figc slide__figc--3'>
                        <h1 className='slide__heading'>Make your Dream True</h1>

                        <Link className='consultancy-btn' to='/consultancy'>
                            <span>Get Consultancy</span>
                            <FontAwesomeIcon icon='fa-solid fa-arrow-right' /></Link>
                        <button className='call-btn' onClick={openModal}>Or would you prefer to schedule a Quick Call?</button>
                    </figcaption>
                    <div className="slide__img-c">
                        <img className='slide__img' src={heroImg3} alt="" />
                    </div>
                </figure>
            </SwiperSlide>
        </SwiperSC>
    )
}

export default HeroCarousel;