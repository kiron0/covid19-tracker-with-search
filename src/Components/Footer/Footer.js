import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <p className="footer-info">&copy; Copyright 2022
                <a target="_blank" rel="noreferrer noopener" href="https://github.com/kiron0"
                    className="author"> KIRON </a>| All rights reserved
            </p>
        </div>
    );
};

export default Footer;