import React from 'react';
import Title from './Title';
import styled from 'styled-components';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { Section, bgLight, TextXSmallGothic, TextSmallGothic, TextSmallDodum, TextMediumDodum  } from './CommonStyle';
import { ConfigsType, mobileWidth, mobilePortraitWidth } from '../configs';
import iconCopy from '../assets/images/icon_copy.png';
import '../styles/Account.scss';


type ConfigProps = {
    config: ConfigsType;
};

// const Section = styled.section`
//     display: grid;
//     background: #fbfbfb;
//     width: 100%;
//     overflow: visible;
//     position: relative;
//     padding: 3% 15% 3% 15%;
//     text-align: center;
//     line-height: 150%;
//     @media screen and (max-width: ${mobileWidth}px) {
//         padding: 5% 10% 5% 10%;
//         line-height: 125%;
//     }
// `;

const ItemWrapper = styled.div`
    display:inline-block;
    width: 40%;
    margin: 2%;
    vertical-align: top;
    @media screen and (max-width: ${mobilePortraitWidth}px) {
        width: 85%;
    }
`;
const ItemBtn = styled.div`
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 1fr;
    width: 100%;
    background: #f1eeee;
    margin: 0;
    padding: 3%;
    box-shadow: 0 0 5px lightgray;
`;
const ItemDtl = styled.div`
    width: 100%;
    background: white;
    padding: 3% 0 3% 0;
    text-align:left;
    box-shadow: 0 5px 5px -5px lightgray,
                -5px 0 5px -5px lightgray, 
                5px 0 5px -5px lightgray;
`;
const Item = styled.div`
    padding-left: 5%;
`;

const HR = styled.hr`
    margin: 3%;
`;
const BtnCopy = styled.div`
    text-align: center;
    float: right;
    margin: 7px 5% 0 auto;
    padding: 2px 5px 3px 5px;
    // width: 15%;
    border: solid lightgray;
    border-width: 0.5px;
    border-radius: 10%;
    cursor: pointer;
    @media screen and (max-width: ${mobileWidth}px) {
        padding: 2px 5px 3px 5px;
    }
`;
const ImgCopy = styled.img`
    width: 1.5vmin;
    filter: invert(60%);
    margin-right: 3px;
    @media screen and (max-width: ${mobileWidth}px) {
        width: 2.5vmin;
    }
`;

function CustomToggle(props: { children: any, eventKey: string }) {
	const onSelect = useAccordionButton(props.eventKey)
  
    return (
      <div className="acnt-toggle" role="button" onClick={onSelect}>
        {props.children}
      </div>
    );
}

// function AccountItem(who: String, name: String, bank: String, number: String) {
//     return (
//         <Item>
//             <div style={{display:'inline-block'}}>
//                 <TextSmallGothic><span className="bold">{bank}</span>&nbsp;&nbsp;{number}</TextSmallGothic>
//                 <br/>
//                 <TextXSmallGothic>{who}</TextXSmallGothic> <TextSmallGothic>{name}</TextSmallGothic>
//             </div>
//             <BtnCopy>
//                 <CopyToClipboard text={number.replace(/-/g,'')} onCopy={(text: String) => alert("계좌번호(" +text+ ")가 복사되었습니다.")}>
//                     <span><ImgCopy src={iconCopy} alt="복사" /><TextXSmallGothic>복사</TextXSmallGothic></span>
//                 </CopyToClipboard>
//             </BtnCopy>
//         </Item>
//     )
// }

const Account = ({ config }: ConfigProps) => {
    function AccountItem({who, name, bank, number}: {who: String, name:String, bank: String, number: String}) {
        return (
        <Item>
            <div style={{display:'inline-block'}}>
                <TextSmallGothic><span className="bold">{bank}</span>&nbsp;&nbsp;{number}</TextSmallGothic>
                <br/>
                <TextXSmallGothic>{who}</TextXSmallGothic> <TextSmallGothic>{name}</TextSmallGothic>
            </div>
            <BtnCopy>
                <CopyToClipboard text={number.replace(/-/g,'')} onCopy={(text: String) => alert("계좌번호(" +text+ ")가 복사되었습니다.")}>
                    <span><ImgCopy src={iconCopy} alt="복사" /><TextXSmallGothic>복사</TextXSmallGothic></span>
                </CopyToClipboard>
            </BtnCopy>
        </Item>
        )
    }
    
    const groomAccount = config.groom.account.map(({who, name, bank, number}, index) => {
        if (index !== 0) {
            return (
                <div key={['groom-',index].join()}>
                    <HR />
                    <AccountItem who={who} name={name} bank={bank} number={number} />
                </div>
            )
        } else {
            return (
                <div key={['groom-',index].join()}>
                    <AccountItem who={who} name={name} bank={bank} number={number} />
                </div>
            )
        }
        
    });

    const brideAccount = config.bride.account.map(({who, name, bank, number}, index) => {
        if (index !== 0) {
            return (
                <div key={['bride-',index].join()}>
                    <HR />
                    <AccountItem who={who} name={name} bank={bank} number={number} />
                </div>
            )
        } else {
            return (
                <div key={['bride-',index].join()}>
                    <AccountItem who={who} name={name} bank={bank} number={number} />
                </div>
            )
        }
    });

    return (
        <Section id="account" style={{ background: `${bgLight}` }}>
            <Title main="마음 전하실 곳" sub=""/>            
            <Accordion>
                <ItemWrapper>
                    <CustomToggle eventKey="0">
                        <ItemBtn>
                            <TextMediumDodum>신랑측 계좌번호</TextMediumDodum>
                            <TextSmallDodum className="arrow-down">&#12297;</TextSmallDodum>
                        </ItemBtn>
                    </CustomToggle>
                    <Accordion.Collapse eventKey="0">
                        <ItemDtl className="acnt-dtl">
                            {groomAccount}
                        </ItemDtl>
                    </Accordion.Collapse>
                </ItemWrapper>

                <ItemWrapper>
                    <CustomToggle eventKey="1">
                        <ItemBtn>
                            <TextMediumDodum>신부측 계좌번호</TextMediumDodum>
                            <TextSmallDodum className="arrow-down">&#12297;</TextSmallDodum>
                        </ItemBtn>
                    </CustomToggle>
                    <Accordion.Collapse eventKey="1">
                        <ItemDtl className="acnt-dtl py-3">
                            {brideAccount}
                        </ItemDtl>
                    </Accordion.Collapse>
                </ItemWrapper>
            </Accordion>
        </Section>
    );
}

export default Account;