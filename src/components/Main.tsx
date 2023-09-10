import React from 'react';
import styled from 'styled-components';

import { TextSmallDodum, TextMediumDodum } from './CommonStyle';
import { ConfigsType, mobileWidth } from '../configs';
import { parse } from 'path';

type ConfigProps = {
    config: ConfigsType;
};

// Portrait : 세로 모드 
const isPortrait = window.matchMedia('(orientation: portrait)').matches;

const Image = styled.img`
    width: 100%;
    aspect-ratio: 1.5;
`;

const Section = styled.section`
    overflow: visible;
    position: relative;
`;

const HeaderLayout = styled.div`
    position: absolute;
    top: 10%;
    width: 60%;
    transform: translateX(32.5%);
    padding: 5%;
    background: white;
    opacity: 0.4;
    text-align: center;
    line-height: 300%;
    @media screen and (max-width: ${mobileWidth}px) {
        width: 50%;
        transform: translateX(50%);
        padding: 3%;
        line-height: 150%;
    }
`;
const TextHeader = styled.span`
    font-family: OoohBaby;
    font-size: 7.5vmin;
    font-weight: 400;
    @media screen and (max-width: ${mobileWidth}px) {
        font-size: 4.5vmin;
    }
`;  
const TextHeader2 = styled.span`
    font-family: OoohBaby;
    font-size: 5.5vmin;
    font-weight: 400;
    @media screen and (max-width: ${mobileWidth}px) {
        font-size: 3vmin;
    }
`;  
const TextSubHeader = styled.article`
    font-family: GowunDodum;
    font-size: 3vmin;
    font-weight: 100;
    padding-top: 10px;
    @media screen and (max-width: ${mobileWidth}px) {
        font-size: 2vmin;
        padding-top: 0px;
    }
`;

const SubTitleLayout = styled.p`
    width: 100%;
    margin: 0;
    padding: 3% 0 0 0;
    text-align: center;
    color: gray;
    font-family: GowunDodum;
    font-size: 3vmin;
    font-weight: 100;
`;

const Main = ({ config }: ConfigProps) => {
    return (
        <Section id="main">
            <HeaderLayout>
                <TextHeader>Youngwoon <TextHeader2>&</TextHeader2> Soohwan</TextHeader>
                <TextSubHeader>2024.03.24</TextSubHeader>
                {/* <TextHeader>{config.groom.name.me} &hearts; {config.bride.name.me}</TextHeader> */}
                {/* <TextSubHeader>저희 드디어 결혼합니다!</TextSubHeader> */}
            </HeaderLayout>

            <Image src={config.titleImage} alt="Title Picutre" />
            <SubTitleLayout>                
                {config.weddingDateDetail}<br/>
                {config.weddingLocation.name}
            </SubTitleLayout>
        </Section>
    );
};

export default Main;