import React from "react";
import { Link } from "react-router-dom";
import './Footer.css'

function Footer () {

    return(
        <div className='footer'>
            <p><i class="far fa-copyright"></i> Lumi Theory Studio Co.</p>
            <div className='connect-info'>
                <a className='footerLink' href='https://github.com/itsjoonie/lumi-theory' target='_blank' rel='noreferrer'>
                    <i class="fab fa-github"></i>
                </a>
                <a className='footerLink' href='https://www.linkedin.com/in/itisjun/' target='_blank' rel='noreferrer'>
                    <i class="fab fa-linkedin"></i>
                </a>
            </div>

        </div>
    )
}

export default Footer