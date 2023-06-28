import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';

import { TextSmallDodum, TextMediumDodum } from './CommonStyle';
import { ConfigsType, mobileWidth } from '../configs';

const Section = styled.section`
    width: 100%;
    overflow: visible;
    position: relative;
    padding-top: 75px;
    text-align: center;
    font-family: NotoSerif;
    color: gray;
    background: white;
`;

const Clock = styled.div`
    width: 50%;
    transform: translateX(50%);
    text-align: center;
    @media screen and (max-width: ${mobileWidth}px) {
        width: 50%;
        transform: translateX(50%);
    }
`;

const Calendar = () => {  
    const setDate = new Date('2024-03-24T12:30:00+0900');
    const now = new Date();
    const diff = setDate.getTime() - now.getTime();
    
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    const [day, setDay] = useState<number>(d);
    const [hour, setHour] = useState<number>(h);
    const [minutes, setMinutes] = useState<number>(m);
    const [seconds, setSeconds] = useState<number>(s);
    
    useEffect(() => {
        const countdown = setInterval(() => {
            if (parseInt(seconds.toString()) > 0) setSeconds(parseInt(seconds.toString()) - 1)

            if (parseInt(seconds.toString()) === 0) {
                if (parseInt(minutes.toString()) === 0) {
                    if (parseInt(hour.toString()) === 0) {
                        if (parseInt(day.toString()) === 0) {
                            clearInterval(countdown)
                        } else {
                            setDay(parseInt(day.toString()) - 1)
                            setHour(23)
                            setMinutes(59)
                            setSeconds(59)
                        }
                    } else {
                        setHour(parseInt(hour.toString()) - 1)
                        setMinutes(59)
                        setSeconds(59)
                    }
                } else {
                    setMinutes(parseInt(minutes.toString()) - 1)
                    setSeconds(59)
                }
            }
        }, 1000)
        return () => clearInterval(countdown)
    }, [day, hour, minutes, seconds])
  
    return (
        <div id="calendar">
            <Clock id="clock-grid">
                <Container>
                <Row>
                    <Col><TextMediumDodum>{day}</TextMediumDodum></Col>
                    <Col><TextMediumDodum>{hour}</TextMediumDodum></Col>
                    <Col><TextMediumDodum>{minutes}</TextMediumDodum></Col>
                    <Col><TextMediumDodum>{seconds}</TextMediumDodum></Col>
                </Row>
                <Row>
                    <Col><TextSmallDodum>DAYS</TextSmallDodum></Col>
                    <Col><TextSmallDodum>HOURS</TextSmallDodum></Col>
                    <Col><TextSmallDodum>MIN</TextSmallDodum></Col>
                    <Col><TextSmallDodum>SEC</TextSmallDodum></Col>
                </Row>
                </Container>
            </Clock>
            
        </div>
    );
}

export default Calendar;