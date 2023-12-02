/* global kakao */
import React, { useEffect } from 'react';
import Title from './Title';
import styled from 'styled-components';

import { Section, TextXSmallDodum, TextSmallDodum, TextMediumDodum } from './CommonStyle';
import { LocType, mobileWidth } from '../configs';
import useWindowSize from '../utils/useWindowSize'

import iconMarker from '../assets/images/icon_marker3.png';
import logoNaver from '../assets/images/icon_navermap.png';
import logoKakao from '../assets/images/icon_kakaomap.png';
import logoTmap from '../assets/images/icon_tmap.png';
import iconSubway from '../assets/images/icon_subway.png';
import iconBus from '../assets/images/icon_bus.png';
import iconCar from '../assets/images/icon_car.png';

import '../styles/Location.scss';;

type LocProps = {
    loc: LocType;
};

// const Section = styled.section`
//     width: 100%;
//     overflow: visible;
//     position: relative;
//     padding: 3% 15% 3% 15%;
//     text-align: center;
//     line-height: 150%;
//     @media screen and (max-width: ${mobileWidth}px) {
//         padding: 7% 15% 5% 15%;
//         line-height: 125%;
//     }
// `;

const Div = styled.div`
    display: flex;
	flex-wrap: wrap;
    padding-bottom: 5%;
    @media screen and (max-width: ${mobileWidth}px) {
        padding-bottom: 0%;
    }
`;
const Content = styled.div`
    float: left;
    width: 50%;
    margin-right: 2%;
    text-align: left;
    line-height: 175%;
    @media screen and (max-width: ${mobileWidth}px) {
        width: 100%;
        justify-content : center;
        line-height: 110%;
    }
`;

const Map = styled.div`
    float: right;
    width: 48%;
    @media screen and (max-width: ${mobileWidth}px) {
        width: 100%;
    }
`;

const NaviWrapper = styled.div`
    display: table;
    width: 100%;
    padding: 10px 5px 10px 5px;
    background-color: #fbfbfb;
    @media screen and (max-width: ${mobileWidth}px) {
        padding: 5px;
    }
`;
const Navi = styled.div`
    display: table-cell;
    width: 30%;
    margin: auto;
    // padding: 1px;
    text-align: center;
    cursor: pointer;
`;
const Logo = styled.img`
    width: 2vmin;
    margin-right: 3px;
    @media screen and (max-width: ${mobileWidth}px) {
        width: 2.5vmin;
    }
`;
const Img = styled.img`
    width: 2vmin;
    filter: invert(40%);
    margin-right: 5px;
    @media screen and (max-width: ${mobileWidth}px) {
        width: 3vmin;
    }
`;

const Location = ({loc}: LocProps) => {
    const size = useWindowSize();
    const markerSize = (size.width < mobileWidth? 30:45);
    const tmapUrl = (size.width < mobileWidth? "tmap://search?name=더컨벤션반포점":"https://surl.tmobiapi.com/2e3ba2b6");
    const height = (size.width < mobileWidth? size.width/1.618: "95%");

    // useEffect(() => {
    //     const naver = (window as any).naver;

    //     var mapContainer = document.getElementById('map');
    //     var position = new naver.maps.LatLng(loc.lat, loc.long);
    //     var map = new naver.maps.Map('map', {
    //         center: position,
    //         zoom: 17,
    //         zoomControl: true,
    //         zoomControlOptions: {
    //           position: naver.maps.Position.TOP_RIGHT,
    //         },
    //     });

    //     var markerOptions = {
    //         position: position.destinationPoint(90, 15),
    //         map: map,
    //         icon: {
    //             content: `<image src=${imgMarker} style="width:40px" />`,
    //             origin: new naver.maps.Point(0, 0),
    //             anchor: new naver.maps.Point(20, 40)
    //         }
    //     };        
    //     var marker = new naver.maps.Marker(markerOptions);
    // }, [])

    useEffect(() => {
        const kakao = (window as any).kakao;

        var mapContainer = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
        var options = { //지도를 생성할 때 필요한 기본 옵션
            center: new kakao.maps.LatLng(loc.lat, loc.long), //지도의 중심좌표.
            level: 4 //지도의 레벨(확대, 축소 정도)
        };
        var map = new kakao.maps.Map(mapContainer, options); //지도 생성 및 객체 리턴

        // // Add Zoom Controler
        // var zoomControl = new kakao.maps.ZoomControl();
        // map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

        // Marker Image Option
        var imgSize = new kakao.maps.Size(markerSize, markerSize),
            imgOption = {offset: new kakao.maps.Point(markerSize/2, markerSize)}; // 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

        // Create Marker
        var markerImage = new kakao.maps.MarkerImage(iconMarker, imgSize, imgOption),
            markerPosition = new kakao.maps.LatLng(loc.lat, loc.long); // 마커가 표시될 위치입니다

        // Add Marker
        var marker = new kakao.maps.Marker({
          position: markerPosition,
          image: markerImage
        });
        marker.setMap(map);

        map.relayout()
    }, []);

    // const onClickNaver = () => {
    //     const naver = (window as any).naver;
    // }
    // const onClickKakao = () => {
    //     const kakao = (window as any).kakao;
    //     kakao.init(KAKAO_API_KEY);
    //     kakao.Navi.start({
    //         name: "더컨벤션 반포점",
    //         x: loc.lat,
    //         y: loc.long,
    //         coordType: 'wgs84'
    //     })
    // }

    return (
        <Section id="location">
            <Title main="오시는 길" sub="L O C A T I O N" />
            <br/>
            <Div>
                <Content>
                    <TextMediumDodum>{loc.name.split(',')[0]}<br/></TextMediumDodum>
                    <TextSmallDodum>({loc.address})<br/></TextSmallDodum>
                    <br/>

                    {/* <Img src={iconSubway} alt="subway" /> */}
                    <TextSmallDodum className="colored blod">지하철<br/></TextSmallDodum>
                    <TextSmallDodum>9호선 신반포역 4번 출구 (반포종합운동장 방향 도보 7분, 셔틀 버스 수시 운행)<br/></TextSmallDodum>
                    <br/>

                    {/* <Img src={iconBus} alt="bus" /> */}
                    <TextSmallDodum className="colored blod">버스<br/></TextSmallDodum>
                    <TextSmallDodum>마을 서초10, 서초14, 서초21, 간선 142 (반포종합운동장 하차)<br/></TextSmallDodum>
                    <TextSmallDodum>마을 서초13 (서래마을 입구 하차)<br/></TextSmallDodum>
                    <br/>

                    <TextSmallDodum className="colored blod">기차<br/></TextSmallDodum>
                    <TextSmallDodum>수서역 분당선 &#8594; 강남구청역 9호선 환승, 신반포역 하차<br/></TextSmallDodum>
                    <TextSmallDodum>수서역 3호선 &#8594; 고속터미널역 9호선 환승, 신반포역 하차<br/></TextSmallDodum>
                    <TextSmallDodum>서울역 1호선 &#8594; 노량진역 9호선 환승, 신반포역 하차<br/></TextSmallDodum>
                    {/* <TextSmallDodum>수서역 : 3호선 고속터미널역 &#8594; 9호선 환승 / 분당선 강남구청역 &#8594; 9호선 환승<br/></TextSmallDodum>
                    <TextSmallDodum>서울역 : 1호선 노량진역 &#8594; 9호선 환승<br/></TextSmallDodum> */}
                    <br/>

                    {/* <Img src={iconCar} alt="car" />  */}
                    <TextSmallDodum className="colored blod">자가용<br/></TextSmallDodum>
                    <TextSmallDodum>내비게이션 주소 검색 : 서초구 사평대로 108 (반포동 107-3)<br/></TextSmallDodum>
                    <br/>

                    <TextSmallDodum className="colored blod">주차 안내<br/></TextSmallDodum>
                    <TextSmallDodum>건물 내 만차 시 외부 주차장 안내 (<span className="ul">2시간</span> 무료 주차)<br/></TextSmallDodum>
                    <TextSmallDodum>&emsp;- 주차 공간이 협소하오니 되도록 대중교통을 이용해주시기 바랍니다.<br/></TextSmallDodum>
                    <TextSmallDodum>&emsp;- 반포2동 공영 주차장 : 서초구 신반포로15길 6<br/></TextSmallDodum>
                    <br/>
                </Content>
                <Map>
                    <div id="map" style={{width:"100%", height:height}}></div>    
                    <NaviWrapper id="navi-btn">
                        <Navi onClick={()=> window.open(tmapUrl)}>
                            <Logo src={logoTmap} alt="T맵" />
                            <TextSmallDodum>T맵</TextSmallDodum>
                        </Navi>
                        <Navi className="vl" onClick={()=> window.open("https://naver.me/5y4qqGoE")}>
                            <Logo src={logoNaver} alt="네이버지도" />
                            <TextSmallDodum>네이버 지도</TextSmallDodum>
                        </Navi>
                        <Navi className="vl" onClick={()=>window.open("https://map.kakao.com/link/to/598171385")}>
                            <Logo src={logoKakao} alt="카카오 내비" />
                            <TextSmallDodum>카카오맵</TextSmallDodum>
                        </Navi>
                    </NaviWrapper>
                </Map>
            </Div> 
            <br/>
        </Section>
    );
}

export default Location;