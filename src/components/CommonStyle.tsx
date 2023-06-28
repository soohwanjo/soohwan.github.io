import React from 'react';
import styled from 'styled-components';
import { mobileWidth } from '../configs';

export const bgLight = '#fbfbfb';

// Divs
export const Section = styled.section`
    width: 100%;
    overflow: visible;
    position: relative;
    padding: 5% 15% 0 15%;
    // padding-top: 75px;
    text-align: center;
    line-height: 150%;
    font-family: NotoSerif;
    color: gray;
    @media screen and (max-width: ${mobileWidth}px) {
        padding: 3% 10% 3% 10%;
        line-height: 125%;
    }
`;

// Text 
export const TextSmall = styled.span`
    font-family: NotoSerif;
    color: gray;
    font-size: 1.5vmin;
    @media screen and (max-width: ${mobileWidth}px) {
        font-size: 2vmin;
    }
`;
export const TextMedium = styled.span`
    font-family: NotoSerif;
    color: gray;
    font-size: 2vmin;
    @media screen and (max-width: ${mobileWidth}px) {
        font-size: 2.8vmin;
    }
`;
export const TextLarge = styled.span`
    font-family: NotoSerif;
    color: gray;
    font-size: 3vmin;
    font-weight: 500;
    @media screen and (max-width: ${mobileWidth}px) {
        font-size: 4vmin;
    }
`;

export const TextXSmallDodum = styled.span`
    font-family: GowunDodum;
    color: gray;
    font-size: 1.3vmin;
    @media screen and (max-width: ${mobileWidth}px) {
        font-size: 1.8vmin;
    }
`;
export const TextSmallDodum = styled.span`
    font-family: GowunDodum;
    color: gray;
    font-size: 1.6vmin;
    @media screen and (max-width: ${mobileWidth}px) {
        font-size: 2.4vmin;
    }
`;
export const TextMediumDodum = styled.span`
    font-family: GowunDodum;
    color: gray;
    font-size: 2vmin;
    @media screen and (max-width: ${mobileWidth}px) {
        font-size: 3vmin;
    }
`;
export const TextLargeDodum = styled.span`
    font-family: GowunDodum;
    color: gray;
    font-size: 3vmin;
    font-weight: 500;
    @media screen and (max-width: ${mobileWidth}px) {
        font-size: 4vmin;
    }
`;

export const TextXSmallGothic = styled.span`
    font-family: NanumGothic;
    color: gray;
    font-size: 1.2vmin;
    @media screen and (max-width: ${mobileWidth}px) {
        font-size: 1.5vmin;
    }
`;
export const TextSmallGothic = styled.span`
    font-family: NanumGothic;
    color: gray;
    font-size: 1.6vmin;
    @media screen and (max-width: ${mobileWidth}px) {
        font-size: 2.8vmin;
    }
`;
export const TextMediumGothic = styled.span`
    font-family: NanumGothic;
    color: gray;
    font-size: 2vmin;
    @media screen and (max-width: ${mobileWidth}px) {
        font-size: 3vmin;
    }
`;

// Horizontal Line
export const HRLine = styled.hr`
    width: 70%;
    line-height: 0.1em;
    margin: 2% auto 2% auto;
    color: gray;
`;