import React, { useState } from 'react';
import Title from './Title';
import styled from 'styled-components';
import { Section, bgLight, TextMediumDodum } from './CommonStyle';
import { mobileWidth } from '../configs';
import useWindowSize from '../utils/useWindowSize'
import iconArrow from '../assets/images/icon_down_arrow.png';

import { photos } from "../assets/photos";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const DivMore = styled.div`
    margin-top: 20px;
    cursor: pointer;
    &:hover {
        span {
            color: #bc927e;
        }
        img {
            animation-name: bounce;
            animaiton-timing-funciton: ease;    
        }
    }
    img {
        width: 2vmin;
        filter: invert(60%);
        animation-duration: 1s;
        animation-iteration-count: infinite;
        @media screen and (max-width: ${mobileWidth}px) {
            width: 3vmin;
            margin-top: -3%;
        }
        @keyframes bounce {
            0%   { transform: translateY(0); }
            50%  { transform: translateY(10px); }
            100% { transform: translateY(0); 
        }
    }    
`;

const Photo = () => {
    const size = useWindowSize();

    const [index, setIndex] = useState(-1);
    const [isShow, setIsShow] = useState(false);
    const [isHover, setIsHover] = useState(false);

    const targetRowHeight: number = (size.width < mobileWidth? size.width*0.8/3: size.width*0.8/5);
    const spacing: number = (size.width < mobileWidth? 5: 10);
    const initCount: number = (size.width < mobileWidth? 12: 15);

    const onClickShow = () => setIsShow(!isShow);
    const onHover = () => {
        setIsHover(true);                
    };

    return (
        <Section id="photo" >
            <Title main="사 진 첩" sub="G A L L E R Y" />
            {!isShow
                ? <>
                    <PhotoAlbum
                        layout="rows"
                        spacing={spacing}
                        photos={photos.slice(0,initCount)}
                        targetRowHeight={targetRowHeight}
                        onClick={({ index }) => setIndex(index)}
                    />
                    <div style={{marginTop: spacing}}>
                        <DivMore onClick={onClickShow} onMouseOver={onHover}>
                            <TextMediumDodum>사진 더보기</TextMediumDodum><br/>
                            <img src={iconArrow} alt="down-arrow" />
                        </DivMore>
                    </div>
                </>                    
                : <PhotoAlbum
                    layout="rows"
                    spacing={spacing}
                    photos={photos}
                    targetRowHeight={targetRowHeight}
                    onClick={({ index }) => setIndex(index)}
                />
            }
            <Lightbox
                index={index}
                slides={photos}
                open={index >= 0}
                close={() => setIndex(-1)}
                plugins={[Thumbnails]}
                thumbnails={{
                    borderRadius: 10,
                    gap: 10
                }}
            />
            <br/>
        </Section>
    );
}

export default Photo;