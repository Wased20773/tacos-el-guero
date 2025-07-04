import { Link } from 'react-router-dom'
import "../styles/ContactUs.css"
import { useForm, ValidationError } from '@formspree/react';
import { useState, useEffect, useRef } from 'react';
import ToastSuccess from "../miscellaneous/toast/ToastSuccess.jsx"
import ToastFailure from "../miscellaneous/toast/ToastFailure.jsx"

function ContactUs() {
    const [ state, handleSubmit ] = useForm("xzzgwojl");
    const [ toastSuccess, setToastSuccess ] = useState(false);
    const [ toastFailure, setToastFailure ] = useState(false);
    const formRef = useRef(null);
    
    useEffect(() => {
        if (state.succeeded) {
            if (formRef.current) {
                setToastSuccess(true);
                formRef.current.reset();
                const timer = setTimeout(() => {
                    setToastSuccess(false);
                }, 4000);
                return () => clearTimeout(timer); // meant for cleanup

            } else {
                setToastFailure(true);
                const timer = setTimeout(() => {
                    setToastFailure(false);
                }, 4000);
                return () => clearTimeout(timer); // meant for cleanup
            }
        }
    }, [state.succeeded]);

    return (
        <>
            <div className='contact-us-container'>
                <div>Contact Us</div>

                <div>Have any questions and/or concerns about our business?</div>
                <div>Shoot us an email and well get back to you!</div>
                <form className='contact-us-form' onSubmit={handleSubmit} ref={formRef}>
                    <div className='contact-us-form-name-email-input-group'>
                        <div className='contact-us-form-input-name'>
                            <label for="name">Name</label>
                            <input
                                className='contact-us-form-input-style'
                                type='text'
                                id='name'
                                name='name'
                            />
                            <ValidationError
                                className='validate-popup-error'
                                prefix="Name" 
                                field="name"
                                errors={state.errors}
                            />
                            
                        </div>
                    
                        <div className='contact-us-form-input-email'>
                            <label for="email">Email</label>
                            <input
                                className='contact-us-form-input-style'
                                type='text'
                                id='email'
                                name='email'
                                required
                            />
                            <ValidationError
                                prefix="Email" 
                                field="email"
                                errors={state.errors}
                            />
                        </div>
                    </div>

                    <div className='contact-us-form-input-subject'>
                            <label for="subject">Subject</label>
                            <input
                                className='contact-us-form-input-style'
                                type='text'
                                id='subject'
                                name='subject'
                                required
                            />
                            <ValidationError
                                prefix="Subject" 
                                field="subject"
                                errors={state.errors}
                            />
                        </div>
                    
                    <label for="message">Message</label>
                    <textarea
                        className='contact-us-form-input-message contact-us-form-input-style'
                        type='text'
                        id='message'
                        name='message'
                        rows="10"
                        required
                    />
                    <ValidationError 
                        prefix="Message" 
                        field="message"
                        errors={state.errors}
                    />
                    <div className='contact-us-form-button-group'>
                        <input 
                            className='contact-us-submit-button'
                            type='submit'
                            value='submit'
                            disabled={state.submitting}
                        ></input>
                        <input
                            className='contact-us-reset-button'
                            type='reset'
                            value='reset'
                        ></input>
                    </div>
                </form>
            </div>

            {/* Toast goes here */}
                { toastSuccess && (
                    <ToastSuccess 
                        message="Thank you for submitting."
                        timer={4000}
                    />
                    
                )}
                { toastFailure && (
                    <ToastFailure 
                        message="Something went wrong, please refresh your page"
                        timer={6000}
                    />
                    
                )}
        </>
    )
}

export default ContactUs;