import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { Redirect } from 'react-router-dom';
import ResponsiveContainer from '~/components/ResponsiveContainer';
import Button from '~/components/Button';
import { Container, Input, ErrorMessage } from './styles';
import PendingEnum from '~/mobx/enums/PendingEnum';
import AuthStore from './store/AuthStore';

interface PropsInterface {
    Auth: AuthStore
}

interface StateInterface {
    
}

@inject('Auth')
@observer
export default class AuthScene extends React.Component<PropsInterface, StateInterface>
{
    state = {
        login: '',
        password: ''
    }

    _clickHandler = () => {
        const { login, password } = this.state;

        this.props.Auth.signin(login, password);
    }

    render()
    {
        const { authorized, error, pending } = this.props.Auth;
        const { login, password } = this.state;

        if (authorized) return <Redirect to="/profile" />;

        return (
                <ResponsiveContainer>
                    <Container>
                        { error ? <ErrorMessage>{ error }</ErrorMessage> : null }
                        <Input type="text" placeholder="Логин" value={login} onChange={(e) => this.setState({ login: e.target.value })} />
                        <Input type="password" placeholder="Пароль" value={password} onChange={(e) => this.setState({ password: e.target.value })} />
                        <Button onClick={this._clickHandler} disabled={pending === PendingEnum.Loading}>Войти</Button>
                    </Container>
                </ResponsiveContainer>
        )
    }
}