import React from 'react';
import styled from 'styled-components';

const FooterText = styled.article`
    margin: 0;
    text-align: center;
    font-family: NotoSerif;
    color: gray;
    font-size: 1.5vmin;
    font-weight: 100;
`;

const Footer = () => {
    return (
        <footer className="page-footer font-small blue pt-2">
            <FooterText>
                Copyright © 2023 Soohwan Jo
            </FooterText>
        </footer>
    );
}

export default Footer;