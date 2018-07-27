import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { Redirect } from 'react-router-dom';
import { PropsInterface, StateInterface } from './interfaces';
import Button from '~/components/Button';
import { Container } from './styles';
import ResponsiveContainer from '~/components/ResponsiveContainer';

@inject('Auth')
@observer
export default class AuthScene extends React.Component<PropsInterface, StateInterface>
{

    _clickHandler = () => {
        this.props.Auth.logout();
    }

    render(): JSX.Element
    {
        const { authorized} = this.props.Auth;

        if (!authorized) return <Redirect to="/auth" />;

        return (
            <ResponsiveContainer>
                <Container>
                    <h1>Профиль</h1>
                    <div><Button onClick={this._clickHandler}>Выйти</Button></div>
                </Container>
            </ResponsiveContainer>
        )
    }
}