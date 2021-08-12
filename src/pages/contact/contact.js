import React from 'react';
import {AiOutlineMail} from 'react-icons/ai';
import {AiOutlinePhone} from 'react-icons/ai';
import {AiOutlineMessage} from 'react-icons/ai'

export default function Contact() {
    return (
        <div>
            <div className="text-center">
                <h2>Contact</h2>
            </div>
            <div className="contact">
                <div className="icons">
                    <AiOutlineMail className="icon"/>
                    <AiOutlinePhone className="icon"/>
                    <AiOutlineMessage className="icon"/>
                </div>
                <div className="contact-details">
                    <p className="contact-detail">chayadangol@gmail.com</p>
                    <p  className="contact-detail">447412095299</p>
                    <p  className="contact-detail">447412095299</p>
                </div>
            
            </div>
            
        </div>
    )
}

