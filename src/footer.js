import React from 'react';
import {IconContext} from 'react-icons'
import {FaLinkedinIn } from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';
import { AiFillGithub } from "react-icons/ai";

function Footer() {
    
        return (
            <IconContext.Provider value={{color: 'skyblue', fontSize:'1.5rem', margin: '3px'}}>
            <footer>
                <a  className="footer-link" href="https://www.linkedin.com/in/monika-dangol-b626b8151/"><i>< FaLinkedinIn /></i></a>
                <a  className="footer-link" href="chayadangol@gmail.com" ><i>< MdEmail /></i></a>
                <a  className="footer-link" href="https://github.com/Monika39-maker"><i><AiFillGithub /></i></a>
            </footer>
            </IconContext.Provider>
        )
    
}

export default Footer

