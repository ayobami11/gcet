import { useState, useEffect, useRef } from 'react';

import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Pagination, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import PhoneInput, { isPossiblePhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

import { convertHexToRgba } from '../../utils/convertHexToRgba';

import squareTickIcon from '../../assets/images/home/square-tick.svg';

const Dialog = styled.dialog`
    border: none;
    border-radius: 1.625em;
    padding: 3em 2em;

    max-width: 553px;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    z-index: 20;

    &::backdrop {
        background: ${({ theme }) => convertHexToRgba(theme.colors.darkGray, .6)};
        backdrop-filter: blur(4px);
    }

    .dialog__header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 2em;

        margin-bottom: 2em;
    }

    .dialog__heading {
        font-size: 1.25rem;
        font-weight: 700;
    }

    .btn {
        border: none;
        cursor: pointer;
    }

    .dialog__close-btn {
        background: transparent;
        color: ${({ theme }) => theme.colors.lightBlue};
    }


    /* Success modal styles */
    .success__header {
        text-align: right;
    }

    .success__fig {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.5em;

        margin: 2em 0 3em;
    }

    .success__figc {
        font-size: 1.25rem;
        font-weight: 600;
        line-height: 1.2;
        text-align: center;
    }
`;

const SwiperSC = styled(Swiper)`
    .swiper-wrapper {
        padding-bottom: 4em;
    }

    .swiper-pagination {
        display: flex;
        gap: .5em;

        margin: 1em 0;
        padding: .25em;
        text-align: left;
    }

    .swiper-pagination-bullet {
        background: ${({ theme }) => convertHexToRgba(theme.colors.lightBlue, .5)};
        display: inline-block;
        height: 10px;
        width: 10px;
        opacity: 1;
        
        &-active {
            background: ${({ theme }) => theme.colors.lightBlue};
            transform: scale(1.8);
        }
    }
`;

const Form = styled.form`
    .form__question {
        display: block;
        font-size: 1.25rem;
        font-weight: 600;
        line-height: 1.7;
        margin-bottom: 1em;
    }

    .form__inputs {
        display: grid;
        gap: 2em;

        margin-top: 2.5em;
    }

    
    .PhoneInputInput,
    .form__select,
    .form__input {
        font-size: 1rem;
    }

    .PhoneInputInput,
    .form__input {
        border: none;
        outline: none;
        font-weight: 600;
    }

    .form__select-wrapper {
        position: relative;
    }
    
    .form__select {
        border: 1px solid ${({ theme }) => convertHexToRgba(theme.colors.darkGray, .2)};
        border-radius: .25em;
        padding: 1em;
        width: 100%;

        appearance: none;
        padding-right: 2.5em;

        /* IE 11 (hide native button) */
        &::-ms-expand {
            display: none;
        }
    }

    .select-chevron-icon {
        color: ${({ theme }) => theme.colors.lightBlue};
        pointer-events: none;

        position: absolute;
        right: 5%;
        top: 50%;
        transform: translateY(-50%);
    }
    
    .form__input-wrapper {
        width: 100%;
    }

    .form__input {
        flex: 200px;
        
        border-bottom: 2px solid ${({ theme }) => theme.colors.lightBlue};
        padding: .5em 0;
        width: 100%;

        /* Chrome/Opera/Safari */
        &::-webkit-input-placeholder {
            color: ${({ theme }) => convertHexToRgba(theme.colors.black, .2)};
        }

        /* Firefox 19+ */
        &::-moz-placeholder {
            color: ${({ theme }) => convertHexToRgba(theme.colors.black, .2)};
        }

        /* IE 10+ */
        &:-ms-input-placeholder {
            color: ${({ theme }) => convertHexToRgba(theme.colors.black, .2)};
        }
        
        /* Firefox 18- */
        &:-moz-placeholder {
            color: ${({ theme }) => convertHexToRgba(theme.colors.black, .2)};
        }
    }

    .form__helper-text {
        color: red;
        font-weight: 500;
        margin-top: .5em;
    }

    .form__btns {
        display: flex;
        gap: .5em;

        margin-top: 1em;
    }
    
    .form__btn {
        background: ${({ theme }) => theme.colors.lightBlue};
        border-radius: .25em;
        color: ${({ theme }) => theme.colors.white};
        padding: .75em .875em;
        
        &:disabled {
            background: ${({ theme }) => convertHexToRgba(theme.colors.lightBlue, .5)};
        }

        &--submit {
            display: inline-flex;
            align-items: center;
            gap: .625em;
            
            font-size: 1rem;
            font-weight: 600;
        }
    }

    @media (min-width: 600px) {
        .form__inputs {
            grid-template-columns: repeat(2, 1fr);
        }
    }
`;

const CallDialog = ({ isModalOpen, closeModal }) => {
    const dialogRef = useRef(null);

    const [swiper, setSwiper] = useState(null);
    const [formDetails, setFormDetails] = useState({
        enquiry: '',
        firstName: '',
        lastName: '',
        email: ''
    });
    const [phoneNumber, setPhoneNumber] = useState('');
    const [validationMessages, setValidationMessages] = useState({
        enquiry: '',
        firstName: '',
        lastName: '',
        email: ''
    });

    const [currentSlide, setCurrentSlide] = useState(0);
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const changeSlidePrev = () => swiper.slidePrev();

    const changeSlideNext = () => swiper.slideNext();

    const handleModalClose = () => {
        swiper.slideTo(0, 0);

        // Resets form inputs
        setFormDetails({
            enquiry: '',
            firstName: '',
            lastName: '',
            email: ''
        });
        setValidationMessages({
            enquiry: '',
            firstName: '',
            lastName: '',
            email: ''
        });
        setPhoneNumber('');

        setCurrentSlide(0);
        setShowSuccessModal(false);

        closeModal();
    }


    const handleInputChange = ({ target }) => {
        setFormDetails(prevState => ({ ...prevState, [target.name]: target.value }));
        setValidationMessages(prevState => ({ ...prevState, [target.name]: target.validationMessage }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        setShowSuccessModal(true);
    }

    useEffect(() => {
        const dialog = dialogRef.current;

        isModalOpen ?
            dialog?.showModal() :
            dialog?.close();

        return () => dialog?.close();
    }, [isModalOpen]);

    useEffect(() => {
        setNextBtnDisabled(true);
    }, [currentSlide]);

    useEffect(() => {
        switch (currentSlide) {
            case 0:
                setNextBtnDisabled(formDetails.enquiry.length === 0 || validationMessages.enquiry.length > 0);
                break;
            case 1:
                setNextBtnDisabled(formDetails.firstName.length === 0 || validationMessages.firstName.length > 0 || formDetails.lastName.length === 0 || validationMessages.lastName.length > 0);
                break;
            case 2:
                setNextBtnDisabled(!Boolean(phoneNumber) || !isPossiblePhoneNumber(phoneNumber) || formDetails.email.length === 0 || validationMessages.email.length > 0)
                break;
            default:
                throw new Error('Invalid slide index.');
        }
    }, [currentSlide, formDetails.enquiry, formDetails.email, formDetails.firstName, formDetails.lastName, phoneNumber, validationMessages.enquiry, validationMessages.email, validationMessages.firstName, validationMessages.lastName]);

    return (
        <Dialog ref={dialogRef} className='dialog'>
            {
                showSuccessModal ? (
                    <>
                        <header className='success__header'>
                            <button className='btn dialog__close-btn' onClick={handleModalClose}>
                                <FontAwesomeIcon fontSize='1.6875em' icon='fa-regular fa-circle-xmark' />
                            </button>
                        </header>
                        <figure className='success__fig'>
                            <img src={squareTickIcon} alt="Check icon" />
                            <figcaption className='success__figc'>
                                <p>Your details has been submitted successfully. You'll get a call from us very soon.</p>
                            </figcaption>
                        </figure>
                    </>
                ) : (
                    <>
                        <header className='dialog__header'>
                            <h2 className='dialog__heading'>Let's Setup a Quick Call</h2>
                            <button className='btn dialog__close-btn' onClick={handleModalClose}>
                                <FontAwesomeIcon fontSize='1.6875em' icon='fa-regular fa-circle-xmark' />
                            </button>
                        </header>

                        <Form method='POST' onSubmit={handleSubmit}>

                            <SwiperSC
                                ref={swiper}
                                navigation
                                pagination
                                effect='fade'
                                fadeEffect={{ crossFade: true }}
                                modules={[Pagination, EffectFade]}
                                onSwiper={(swiper) => setSwiper(swiper)}
                                onSlideChange={({ realIndex }) => setCurrentSlide(realIndex)}
                            >
                                <SwiperSlide className='slide'>
                                    <label className='form__question' htmlFor="enquiry">Which of these will you be discussing with the support team?</label>
                                    <div className="form__select-wrapper">
                                        <select
                                            className='form__select'
                                            id="enquiry"
                                            name="enquiry"
                                            value={formDetails.enquiry}
                                            onChange={handleInputChange}
                                            required>
                                            <option value="" disabled>Choose an option</option>
                                            <option value="enterprise-security-solutions">Enterprise Security Solutions &amp; Services</option>
                                        </select>

                                        <FontAwesomeIcon className='select-chevron-icon' icon='fa-solid fa-chevron-down' />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className='slide'>
                                    <p className='form__question'>How can we identify you?</p>
                                    <div className="form__inputs">
                                        <div>

                                            <input
                                                className='form__input'
                                                id='first-name'
                                                type="text"
                                                name='firstName'
                                                value={formDetails.firstName}
                                                placeholder='First Name'
                                                onChange={handleInputChange}
                                                required />
                                            <p className='form__helper-text'>{validationMessages.firstName}</p>
                                        </div>
                                        <div className='form__input-wrapper'>
                                            <input
                                                className='form__input'
                                                id='last-name'
                                                type="text"
                                                name='lastName'
                                                value={formDetails.lastName}
                                                placeholder='Last Name'
                                                onChange={handleInputChange}
                                                required />
                                            <p className='form__helper-text'>{validationMessages.lastName}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className='slide'>
                                    <p className='form__question'>Let's get your contact details</p>
                                    <div className="form__inputs">
                                        <div className='form__input-wrapper'>
                                            <PhoneInput
                                                defaultCountry='NG'
                                                international
                                                countryCallingCodeEditable={false}
                                                className='form__input'
                                                name="phoneNumber"
                                                value={phoneNumber}
                                                placeholder="Phone Number"
                                                required
                                                onChange={setPhoneNumber} />
                                            <p className='form__helper-text'>{phoneNumber && isPossiblePhoneNumber(phoneNumber) ? '' : 'Invalid phone number'}</p>
                                        </div>
                                        <div className='form__input-wrapper'>
                                            <input
                                                className='form__input'
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formDetails.email}
                                                placeholder='Email Address'
                                                onChange={handleInputChange}
                                                required />
                                            <p className='form__helper-text'>{validationMessages.email}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </SwiperSC>

                            <div className='form__btns'>
                                {/* Hides next button for the first slide */}
                                {currentSlide > 0 &&
                                    <button className='btn form__btn' type='button' onClick={changeSlidePrev}>
                                        <FontAwesomeIcon icon='fa-solid fa-arrow-left' fontSize='.875rem' />
                                    </button>}
                                {/* Shows submit button for the last slide */}
                                {swiper?.slides?.length - 1 === currentSlide ?
                                    <button className='btn form__btn form__btn--submit' type='submit' disabled={nextBtnDisabled}>
                                        <span>Submit</span>
                                        <FontAwesomeIcon icon='fa-solid fa-arrow-right' fontSize='.875rem' />
                                    </button> :
                                    <button className='btn form__btn' type='button' disabled={nextBtnDisabled} onClick={changeSlideNext}>
                                        <FontAwesomeIcon icon='fa-solid fa-arrow-right' fontSize='.875rem' />
                                    </button>
                                }
                            </div>
                        </Form>
                    </>
                )
            }
        </Dialog>
    )
}

export default CallDialog