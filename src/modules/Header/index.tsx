import * as React from 'react';
import { Wrapper, Container, Logo, Link } from "./styles";
import ResponsiveContainer from '~/components/ResponsiveContainer';
import Navigation from './Navigation';

export default () => (
    <Wrapper>
        <Container>
            <ResponsiveContainer>
                <Link to="/">
                    <Logo src={require('~/assets/logo.png')} width={50} alt=""/>
                </Link>
                <Navigation />
            </ResponsiveContainer>
        </Container>
    </Wrapper>
);