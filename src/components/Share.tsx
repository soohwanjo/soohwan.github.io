import React, { useEffect } from 'react';
import styled from 'styled-components';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { TextSmallDodum } from './CommonStyle';
import { ConfigsType, mobileWidth } from '../configs';
import iconKakao from '../assets/images/icon_kakaotalk.svg';
import iconLink from '../assets/images/icon_link.png';

type ConfigProps = {
    config: ConfigsType;
};

const Section = styled.section`
    width: 100%;
    overflow: visible;
    position: relative;
    padding: 30px 0 30px 0;
    text-align: center;

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: ${mobileWidth}px) {
        padding: 1em 0 1em 0;
    }
`;

const Item = styled.div`
    margin: 0 5em 0 5em;
    cursor: pointer;
    @media screen and (max-width: ${mobileWidth}px) {
        margin: auto;
        // width: 40%;
        // margin: 1% 0 1% 0;
    }
`;

const Img = styled.img`
    width: 1.5vmin;
    filter: invert(60%);
    margin-right: 5px;
    @media screen and (max-width: ${mobileWidth}px) {
        width: 2.5vmin;
    }
`;


const Share = ({ config }: ConfigProps) => {
    const titleKakao = `${config.groom.name}♥︎${config.bride.name}의 결혼식에 초대합니다`;

    useEffect(() => {
        if ((window as any).Kakao) {
            const kakao = (window as any).Kakao;
            if (!kakao.isInitialized()) {
                kakao.init(process.env.REACT_APP_KAKAO_API_KEY);
            }

            kakao.Link.createDefaultButton({
                container: '#share-kakao',
                objectType: "feed",
                content: {
                    title: titleKakao,
                    description: "아래의 '청첩장 열기' 버튼을 눌러 읽어주세요🤵👰",
                    imageUrl: '../assets/images/icon_marker.png',
                    link: {
                        mobileWebUrl: process.env.REACT_APP_ROUTE_URL, 
                        webUrl: process.env.REACT_APP_ROUTE_URL
                    }
                },
                buttons: [{
                    title: '청첩장 열기',
                    link: {
                    mobileWebUrl: process.env.REACT_APP_ROUTE_URL, 
                    webUrl: process.env.REACT_APP_ROUTE_URL, 
                    },
                }],
                installTalk: true,
            });
        }
    }, []);

    // const shareKakao = () => {
    //     if ((window as any).Kakao) {
    //         const kakao = (window as any).Kakao;
    //         if (!kakao.isInitialized()) {
    //             kakao.init(process.env.REACT_APP_KAKAO_API_KEY);
    //         }
    
    //         kakao.Link.sendDefault({
    //             objectType: "feed",
    //             content: {
    //                 title: titleKakao,
    //                 imageUrl: '../assets/images/icon_marker.png',
    //                 link: {
    //                     mobileWebUrl: process.env.REACT_APP_ROUTE_URL, 
    //                     webUrl: process.env.REACT_APP_ROUTE_URL
    //                 }
    //             }
    //         });
    //     }
    // }

    return (
        <Section id="share">
            {/* <Item id="share-kakao" onClick={shareKakao}> */}
            <Item id="share-kakao">
                <Img src={iconKakao} alt="카카오톡"/><TextSmallDodum>카카오톡 공유하기</TextSmallDodum>
            </Item>
            <Item>
                <CopyToClipboard text="https://soohwanjo.github.io/wedding-card" onCopy={(text: String) => alert("링크가 복사되었습니다.")}>
                    <span><Img src={iconLink} alt="링크복사"/><TextSmallDodum>링크 주소 복사하기</TextSmallDodum></span>
                </CopyToClipboard>
            </Item>
        </Section>
    );
}

export default Share;