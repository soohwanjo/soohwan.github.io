import React, { useState } from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { ConfigsType, mobileWidth } from '../configs';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/Navbar.scss';

type ConfigProps = {
    config: ConfigsType;
};

const TextBrand = styled.span`
    color: gray;
    font-family: GowunDodum;
    font-size: 1.8vmin;
    @media screen and (max-width: ${mobileWidth}px) {
        font-size: 2.5vmin;
    }
`;

const TextLink = styled.span`
    color: gray;
    font-family: GowunDodum;
    font-size: 1.8vmin;
    @media screen and (max-width: ${mobileWidth}px) {
        font-size: 1.8vmin;
        line-height: 90%;
    }
`;

const Header = ({ config }: ConfigProps) => {
    return (
        <Navbar
            id="main-nav" 
            className="py-0 py-sm-2" 
            expand="sm" 
            sticky="top" 
            bg="light" 
        >
            <Container>
                <Navbar.Brand href="/">
                    <TextBrand>{config.groom.name.me} &hearts; {config.bride.name.me} &nbsp; {config.weddingDate}</TextBrand>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar"/>
                <Navbar.Collapse className="justify-content-end" id="navbar">
                    <Nav>
                        <Nav.Link href="#main"><TextLink>메인</TextLink></Nav.Link>
                        <Nav.Link href="#invite"><TextLink>소개</TextLink></Nav.Link>
                        <Nav.Link href="#location"><TextLink>오시는 길</TextLink></Nav.Link>
                        <Nav.Link href="#photo"><TextLink>사진첩</TextLink></Nav.Link>
                        <Nav.Link href="#visitor"><TextLink>방명록</TextLink></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;