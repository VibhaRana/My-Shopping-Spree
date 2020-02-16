import React from 'react';
//This section defines the footer of the page
const Footer = () => {

     // Make 2 const for date and year
    const d = new Date();
    const year = d.getFullYear();

//return the text of the footer
    return(
        <footer>
        <p>React Lab 3, Shopping Spree.</p>
        <p>&copy; {year} Vibha Rana</p>
        </footer>
        
    );
}

//export the footer file
export default Footer;