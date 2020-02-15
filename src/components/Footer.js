import React from 'react';

const Footer = () => {

    const d = new Date();
    const year = d.getFullYear();

    return(
        <footer>
        <p>React Lab 3, Shopping Spree.</p>
        <p>&copy; {year} Vibha Rana</p>
        </footer>
        
    );
}

export default Footer;