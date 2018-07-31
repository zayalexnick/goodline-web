import * as React from 'react';
import { Container } from './styles';

interface PropsInterface {

}

interface StateInterface {
    
}

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