import React from 'react';
import Contact from './Contact';

const Footer = () => {
    return (
        <footer>
            <div className='container'>
        <Contact />
        <p>Copyright &copy; Ivan Kohut</p>
        <section className='footer-social'>
            <i>Facebook</i>
            <i>Instagram</i>
        </section>
            </div>
        </footer>
    )
}

export { Footer };