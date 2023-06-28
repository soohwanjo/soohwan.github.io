import React from 'react';
import Title from './Title';
import styled from 'styled-components';

import { Section, HRLine, TextMediumDodum } from './CommonStyle';
import { mobileWidth } from '../configs';

const Div = styled.div`
    display: flex;
	flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    line-height: 250%;
    @media screen and (max-width: ${mobileWidth}px) {
        line-height: 150%;
    }
`;

const Invite = () => {
    return (
        <Section className="bg-color1" id="invite">
            <HRLine/>
            <br/>
            <Title main="초대합니다" sub="I N V I T A T I O N" />
            <Div id="letter">
                <TextMediumDodum>
                    2010년 겨울,<br/>
                    함께 캠퍼스를 걸으며 사랑하는 연인이 되고<br/>
                    13년 동안 서로에게 의지가 되어 온 저희 두 사람<br/>
                    <br/>
                    2024년 봄,<br/>
                    오랜 시간 끝에 사랑의 결실을 맺어 부부가 되려 합니다.<br/>
                    <br/>
                    새로운 인생을 시작하는 이 자리에 오셔서 <br/> 
                    저희의 앞날을 축복해주시면 감사하겠습니다.<br/>
                </TextMediumDodum>
            </Div>
            <br/>
            <HRLine/>            
        </Section>
    );
};

export default Invite;