import React from 'react';
import {DropSection, DropTitle, Span, DropForm, InputExp, SubmitBtn, FormInput, TextInput, Textarea, EmailInput, } from './style.js';

const Contact = () => {
    return (
        <DropSection>
            <div class="container">
                <DropTitle><Span>Drop </Span>Me A line</DropTitle>
                <DropForm action="">
                    <FormInput>
                        <TextInput type="text" placeholder="Your Name" />
                        <EmailInput type="email" placeholder="Your Email" />
                    </FormInput>
                    <InputExp type="text" className="sub" placeholder="Your Subject" />
                    <Textarea cols="30" rows="10" placeholder="Your Message"></Textarea>
                    <SubmitBtn type="submit" value="Send Message" />
                </DropForm>
            </div>
        </DropSection>
    )
}
export default Contact;