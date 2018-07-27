import * as React from 'react';
import { PropsInterface, StateInterface } from './interfaces';
import { Container } from './styles';

export default class MainScene extends React.Component<PropsInterface, StateInterface>
{
    render(): JSX.Element
    {
        return (
            <Container>
                <h1>Главная</h1>
            </Container>
        )
    }
}