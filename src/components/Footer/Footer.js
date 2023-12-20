
import React from 'react';

import Wrapper from '../Section/Wrapper';
const date = new Date().getFullYear();
const Footer = () => (
    <footer style={{ background: '#414141' }}>
        <Wrapper>
            <p style={{ padding: '5px 0', color: 'white', textAlign: 'center' }}>
                {date} ©  Tomtrans Logistic
            </p>
        </Wrapper>
    </footer>
);

export default Footer;
