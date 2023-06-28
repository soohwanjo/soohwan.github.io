import React from 'react';
import styled from 'styled-components';
import { TextSmallDodum, TextLargeDodum } from './CommonStyle';
import { ConfigsType, mobileWidth } from '../configs';

type TitleProps = {
    main: String;
    sub: String;
};

const Div = styled.div`
    margin-bottom: 5%;
    @media screen and (max-width: ${mobileWidth}px) {
        margin-bottom: 7%;
        line-height: 100%;
    }
`;

const Title = ({ main, sub }: TitleProps) => {
    return (
        <Div>
            {sub.length > 0
              ?  <><TextSmallDodum className="colored light">{sub}</TextSmallDodum><br/></>
              :  <></>
            }            
            <TextLargeDodum>{main}</TextLargeDodum>  
        </Div>
    );
}

export default Title;