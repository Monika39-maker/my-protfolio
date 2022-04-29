import React, { Component } from 'react';

import {AiOutlineMail} from 'react-icons/ai';
import {AiOutlinePhone} from 'react-icons/ai';
import {AiOutlineGithub} from 'react-icons/ai';
import {AiFillLinkedin} from 'react-icons/ai';


import $ from 'jquery';
// import {findDOMNode} from 'react-dom';

export default class Contact extends Component {
    jQuerycode = () => {
        $('.contact-1').show()
         $('.contact-2').hide()
           $('.contact-3').hide()
           $('.contact-4').hide()
        $('.icon1').on("click", function() {
            $('.contact-1').show()
            $('.contact-2').hide()
           $('.contact-3').hide()
           $('.contact-4').hide()
        });
        $('.icon2').on("click", function() {
            $('.contact-1').hide()
            $('.contact-2').show()
           $('.contact-3').hide()
           $('.contact-3').hide()
        });
        $('.icon3').on("click", function() {
            $('.contact-1').hide()
            $('.contact-2').hide()
           $('.contact-3').show()
           $('.contact-4').hide()
        });
        $('.icon4').on("click", function() {
            $('.contact-1').hide()
            $('.contact-2').hide()
           $('.contact-3').hide()
           $('.contact-4').show()
        });
    }

    componentDidMount() {
        this.jQuerycode()
    }
    render() {
        return (
        <div>
            <div className="text-center">
                <h2>Contact</h2>
            </div>
            <div className="contact">
                <div className="icons">
                    <AiOutlineMail className="icon icon1"/>
                    <AiOutlinePhone className="icon icon2"/>
                    <AiOutlineGithub className="icon icon3"/>
                    <AiFillLinkedin className="icon icon4"/>
                </div>
                <div className="contact-details">
                    <p className="contact-detail contact-1" >chayadangol@gmail.com</p>
                    <p className="contact-detail contact-2">447412095299</p>
                    <a href="https://github.com/Monika39-maker" target="_blank" className="contact-detail contact-3">Monika39-maker</a>
                    <a href="https://www.linkedin.com/in/monika-dangol-b626b8151/" target="_blank" className="contact-detail contact-4">Monika Dangol</a>
                </div>
            
            </div>
            
        </div>
    )
    }
    
}

