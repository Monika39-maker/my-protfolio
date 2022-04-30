import React, {Component} from 'react';
import {AiOutlineMail} from 'react-icons/ai';
import {AiOutlinePhone} from 'react-icons/ai';
import {AiOutlineMessage} from 'react-icons/ai';
import $ from 'jquery'

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
}

