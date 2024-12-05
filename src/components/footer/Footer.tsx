import React from 'react';
import './footer.css';
import { Email,ContactPhone,LocationCity, Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-section">
                <h3>Pages</h3>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About us</a></li>
                    <li><a href="https://wa.me/+6285236944692">Contact us</a></li>
                </ul>
                <div className="social-icons">
                    <a href="https://www.instagram.com/ecoroute.apps/"><Instagram></Instagram></a>
                    <a href="https://www.linkedin.com/company/eco-route-indonesia/"><LinkedIn></LinkedIn></a>
                </div>

                <div className="footer-bottom">
                <a href="#">terms & services</a>
                <p>Green Innovation Indonesia </p>
                <p>Designed By <a href="https://www.figma.com/community/file/1271429479672604722">dishantdigital81</a></p>
            </div>
            </div>
            <div className="footer-section">
                <h3>Contact us</h3>
                <ul className='flex-column'>
                    <li><ContactPhone></ContactPhone>+62 85236944692</li>
                    <li><Email></Email> hakam@greeninnovation.id</li>
                    <li><LocationCity></LocationCity> Jl. Semampir Tengah IIA No.17, RT.001/RW.07, <br/>Medokan Semampir, Kec. Sukolilo, Kota Surabaya, Jawa Timur 60119</li>
                </ul>
            </div>
            
        </footer>
    );
};

export default Footer;