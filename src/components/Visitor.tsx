import React from 'react';
import Title from './Title';
import styled from 'styled-components';
import Giscus from '@giscus/react';

import { Section, bgLight, TextXSmallDodum } from './CommonStyle';
import { mobileWidth } from '../configs';

const Div = styled.div`
    padding: 0 7.5% 0 7.5%;
    align-items: center;
    justify-content: center;
`;

const Visitor = () => {
    return (
        <Section id="visitor" style={{ background: `${bgLight}`, paddingBottom: '5%' }} >
            <Title main="방 명 록" sub="G U E S T B O O K" />
            <Div>
                <Giscus
                    repo="soohwanjo/wedding-card"
                    repoId="R_kgDOIu_w-A"
                    category="General"
                    categoryId="DIC_kwDOIu_w-M4CXcRW"
                    mapping="pathname"
                    reactionsEnabled="1"
                    emitMetadata="0"
                    inputPosition="bottom"
                    theme="light"
                    lang="ko"
                    term="축하 메시지를 남겨주세요!"
                    loading="lazy"
                />
            </Div>
        </Section>
    );
}

export default Visitor;