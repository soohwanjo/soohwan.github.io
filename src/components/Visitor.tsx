import React from 'react';
import Title from './Title';
import styled from 'styled-components';
import Giscus from '@giscus/react';
import { DiscussionEmbed } from 'disqus-react';

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
                <DiscussionEmbed
                    shortname='wedding-card'
                    config={
                        {
                            url: 'https://soohwanjo.github.io/wedding-card/',
                            identifier: 'soohwanjo',
                            title: 'visitor',
                            language: 'ko'
                        }
                    }
                />
            </Div>
        </Section>
    );
}

export default Visitor;