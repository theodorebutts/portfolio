import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers'
import { Form } from 'react-bootstrap';

function ContactForm() {

    const [errorMessage, setErrorMessage] = useState('');
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;



    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            //isValid conditonal statement
            if (!isValid) {
                setErrorMessage('Your email is invalid')
            } else {
                setErrorMessage('')
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required`);
            } else {
                setErrorMessage('')
            }
        }
        //if no error message, update the state with the user input
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value })
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState)
    }

    return (
        <section>
            <h1 className="contact-title">Contact Me</h1>
            <Form id="contact-form" onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label htmlFor="name">Name:</Form.Label>
                    <Form.Control type="text" name="name" defaultValue={name} onBlur={handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="email">Email address:</Form.Label>
                    <Form.Control type="email" name="email" defaultValue={email} onBlur={handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="message">Message:</Form.Label>
                    <Form.Control as="textarea" name="message" rows="5" defaultValue={message} onBlur={handleChange} />
                </Form.Group>
                {errorMessage && (
                    <div>
                        <p className="error-test">{errorMessage}</p>
                    </div>
                )}
                <button type="submit">Submit</button>
            </Form>
        </section>
    )
}

export default ContactForm;