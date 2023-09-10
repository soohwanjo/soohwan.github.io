import React from 'react';
import Title from './Title';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';

import { Section, TextSmallDodum, TextMediumDodum, TextLargeDodum, TextMediumGothic } from './CommonStyle';
import { ConfigsType, mobileWidth } from '../configs';
import useWindowSize from '../utils/useWindowSize'

type ConfigProps = {
    config: ConfigsType;
};


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
const Container = styled.div`
    width: 80%;
    margin: auto;
    text-align: left;
    line-height: 200%;
    @media screen and (max-width: ${mobileWidth}px) {
        width: 95%;
        line-height: 100%;
    }
`;

const Profile = styled.div`
    width: 45%;
    margin: 0 2% 5% 2%;
    padding: 3%;
    background: #fbfbfb;
    border-radius: 10%;
    text-align: center;
    @media screen and (max-width: ${mobileWidth}px) {
        width: 75%;
        padding: 5%;
    }
`;

const Image = styled.img`
    display: block;
    width: 50%;
    height: 50%;
    margin: auto;
    padding-bottom: 3%;
    border-radius: 70%;
    @media screen and (max-width: ${mobileWidth}px) {
        width: 50%;
        height: 50%;
    }
`;

const Story = ({ config }: ConfigProps) => {
    const size = useWindowSize();

    return (
        <Section id="story">
            <Title main="" sub="L O V E &hearts; S T O R Y" />
            <Div id="profile">
                <Profile id="profile-groom">
                    <br/>
                    <Image src={config.groom.profileImage} />
                    <TextMediumGothic><span className="bold">{config.groom.name.father} &#183; {config.groom.name.mother}</span></TextMediumGothic><TextMediumGothic> 의 아들<br/></TextMediumGothic>
                    <TextLargeDodum>{config.groom.name.me}<br/></TextLargeDodum>
                    {/* <TextLarge className="bold">-<br/></TextLarge>
                    <TextSmall>쁑쁑이</TextSmall> */}
                    <br/>
                </Profile>
                <Profile id="profile-bride">
                    <br/>
                    <Image src={config.bride.profileImage} />
                    <TextMediumGothic><span className="bold">{config.bride.name.father} &#183; {config.bride.name.mother}</span></TextMediumGothic><TextMediumGothic> 의 딸<br/></TextMediumGothic>
                    <TextLargeDodum>{config.bride.name.me}<br/></TextLargeDodum>
                    {/* <TextLarge className="bold">-<br/></TextLarge>
                    <TextSmall>우와앙</TextSmall> */}
                    <br/>
                </Profile>
            </Div>
            {size.width < mobileWidth? <br/>:null}
            <Div>
                <TextMediumDodum id="story-letter">
                    학부 동아리에서의 만남으로 시작해<br/>
                    대전, 서울, 덴마크, 미국을 오가며 장거리 연애를 헤쳐나간 우리.<br/>
                    많은 분들이 언제 가는지 물어보셨죠? 저희 드디어 결혼합니다!<br/>
                </TextMediumDodum>
            </Div>
            <br/>
            {size.width < mobileWidth? null:<br/>}
            <Container className="line-narrow" id="history">
                <Row className="mb-1">
                    <Col xs="3" sm="2"><TextSmallDodum>2010.02.</TextSmallDodum></Col>
                    <Col xs="7" sm="8"><TextSmallDodum>동아리 소리모음에서 첫 만남</TextSmallDodum></Col>
                </Row>
                <Row className="mb-1">
                    <Col xs="3" sm="2"><TextSmallDodum>2010.12.23</TextSmallDodum></Col>
                    <Col xs="7" sm="8"><TextSmallDodum className="colored">D-Day, 우리의 시작</TextSmallDodum></Col>
                </Row>
                <Row className="mb-1">
                    <Col xs="3" sm="2"><TextSmallDodum>2013.01.</TextSmallDodum></Col>
                    <Col xs="7" sm="8"><TextSmallDodum>대전-덴마크 장거리 (수환 교환학생)</TextSmallDodum></Col>
                    <Col xs="1"><TextSmallDodum>8,073km</TextSmallDodum></Col>
                </Row>
                <Row className="mb-1">
                    <Col xs="3" sm="2"><TextSmallDodum>2013.11.</TextSmallDodum></Col>
                    <Col xs="7" sm="8"><TextSmallDodum>영운 훈련소</TextSmallDodum></Col>
                </Row>
                <Row className="mb-1">
                    <Col xs="3" sm="2"><TextSmallDodum>2015.03.</TextSmallDodum></Col>
                    <Col xs="7" sm="8"><TextSmallDodum>대전-서울 (수환 대학원)</TextSmallDodum></Col>
                    <Col xs="1"><TextSmallDodum>125km</TextSmallDodum></Col>
                </Row>
                <Row className="mb-1">
                    <Col xs="3" sm="2"><TextSmallDodum>2017.02.</TextSmallDodum></Col>
                    <Col xs="7" sm="8"><TextSmallDodum>서울-미국 장거리 (영운 대학원 유학)</TextSmallDodum></Col>
                    <Col xs="1"><TextSmallDodum>9,580km</TextSmallDodum></Col>
                </Row>
                <Row className="mb-1">
                    <Col xs="3" sm="2"><TextSmallDodum>2020.12.23</TextSmallDodum></Col>
                    <Col xs="7" sm="8"><TextSmallDodum>10주년, 캠퍼스에서 프로포즈</TextSmallDodum></Col>
                </Row>
                <Row className="mb-1">
                    <Col xs="3" sm="2"><TextSmallDodum>2022.12.</TextSmallDodum></Col>
                    <Col xs="6" sm="8"><TextSmallDodum>뉴질랜드 여행, 함께한 12주년</TextSmallDodum></Col>
                </Row>
                <Row className="mb-1">
                    <Col xs="3" sm="2"><TextSmallDodum>2024.02.</TextSmallDodum></Col>
                    <Col xs="7" sm="8"><TextSmallDodum>영운 귀국, 장거리 THE END!</TextSmallDodum></Col>
                </Row>
                <Row className="mb-1">
                    <Col xs="3" sm="2"><TextSmallDodum>2024.03.24</TextSmallDodum></Col>
                    <Col xs="7" sm="8"><TextSmallDodum className="colored">결혼 (D+4840)</TextSmallDodum></Col>
                </Row>
            </Container>
            {size.width < mobileWidth? <br/>:null}
        </Section>
    );
};

export default Story;