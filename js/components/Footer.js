import React from 'react';
import Contact from './Contact';

const Footer = () => {
    return (
        <footer>
        <Contact />
        <p>Copyright &copy; Ivan Kohut</p>
        <section className='footer-social'>
            <i>Facebook</i>
            <i>Instagram</i>
        </section>
        </footer>
    )
}

export { Footer };