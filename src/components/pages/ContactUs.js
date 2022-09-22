import { useState } from 'react';

import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertHexToRgba } from '../../utils/convertHexToRgba';

import Navbar from '../Navbar';
import Footer from '../Footer';

import formImg from '../../assets/images/contact/form-img.jpg';

const Main = styled.main`
    margin-top: 9em;
`;

const FormSection = styled.section`
    margin-bottom: 5em;
    min-height: 800px;

    display: flex;
    flex-flow: column wrap;

    .form {
        flex: 1;
    }

    .form__img-c {
        align-self: flex-end;
        padding-left: 5%;
        margin-left: auto;
        max-width: 534px;
    }
    
    .form__img {
        width: 100%;
    }

    @media (min-width: 800px) {
        flex-direction: row;
        justify-content: space-between;
    }
`;

const Form = styled.form`
    margin: 2em 5%;
    max-width: 761px;

    .form__heading {
        font-size: 2.5em;
        margin-bottom: .75em;
    }

    .form__inputs {
        display: grid;
        gap: 2em 1.5em;
    }

    .form__input-wrapper {
        /* max-width: 335px; */
        /* border: 1px solid red; */
    }

    .form__label {
        display: block;
        font-size: 1.25rem;
        font-weight: 500;
        margin-bottom: .5em;
    }

    .form__input {
        border: 1px solid ${({ theme }) => convertHexToRgba(theme.colors.darkGray, .2)};
        border-radius: .25em;
        font-size: 1rem;
        padding: .5em;
        width: 100%;

        &--textarea {
            resize: none;
        }

        /* Chrome/Opera/Safari */
        &::-webkit-input-placeholder {
            color: ${({ theme }) => convertHexToRgba(theme.colors.darkGray, .4)};
        }

        /* Firefox 19+ */
        &::-moz-placeholder {
            color: ${({ theme }) => convertHexToRgba(theme.colors.darkGray, .4)};
        }

        /* IE 10+ */
        &:-ms-input-placeholder {
            color: ${({ theme }) => convertHexToRgba(theme.colors.darkGray, .4)};
        }
        
        /* Firefox 18- */
        &:-moz-placeholder {
            color: ${({ theme }) => convertHexToRgba(theme.colors.darkGray, .4)};
        }
    }

    .form__btn {
        background: ${({ theme }) => theme.colors.lightBlue};
        border-radius: .25em;
        color: ${({ theme }) => theme.colors.white};
        font-size: 1rem;
        font-weight: 700;
        margin-top: 2em;
        padding: .625em 1rem;

        display: flex;
        align-items: center;
        gap: .75em;
    }

    @media (min-width: 800px) {
        .form__inputs {
            grid-template-columns: repeat(2, 335px);
            justify-content: space-between;
        }

        .form__input-wrapper--textarea {
            grid-column: 1 / -1;
            max-width: none;
        }

        .form__input--textarea {
        }
    }
`;

const ContactUs = () => {
    const [formDetails, setFormDetails] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleInputChange = ({ target }) => {
        setFormDetails(prevState => ({ ...prevState, [target.name]: target.value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <>
            <Navbar />
            <Main>
                <FormSection>

                    <Form method="POST" onSubmit={handleSubmit} className='form'>

                        <h1 className='form__heading'>Send us a mail</h1>

                        <div className="form__inputs">
                            <div className="form__input-wrapper">
                                <label htmlFor="name" className="form__label">Name</label>
                                <input
                                    id="name"
                                    type="text"
                                    name='name'
                                    value={formDetails.name}
                                    placeholder='Enter your name'
                                    className="form__input"
                                    onChange={handleInputChange}
                                    required />
                            </div>
                            <div className="form__input-wrapper">
                                <label htmlFor="email" className="form__label">Email Address</label>
                                <input
                                    id="email"
                                    type="email"
                                    name='email'
                                    value={formDetails.email}
                                    placeholder='Enter your email'
                                    className="form__input"
                                    onChange={handleInputChange}
                                    required />
                            </div>
                            <div className="form__input-wrapper form__input-wrapper--textarea">
                                <label htmlFor="message" className="form__label">Your Message</label>
                                <textarea
                                    id='message'
                                    name='message'
                                    value={formDetails.message}
                                    placeholder='Type your message here'
                                    className="form__input form__input--textarea"
                                    rows='8'
                                    onChange={handleInputChange}
                                    required />
                            </div>
                        </div>
                        <button type="submit" className='form__btn'>
                            <span>Send Message</span>
                            <FontAwesomeIcon icon='fa-solid fa-arrow-right' />
                        </button>
                    </Form>
                    <div className="form__img-c">
                        <img className='form__img' src={formImg} alt="" />
                    </div>
                </FormSection>
            </Main>
            <Footer />
        </>
    )
}

export default ContactUs