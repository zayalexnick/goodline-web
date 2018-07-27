import * as React from 'react';
import { map } from 'lodash';
import OutsideClickHandler from 'react-outside-click-handler';
import { Container, List, Item, NavLink, Button } from './styles';

import navigation from '~/navigation';

interface PropsInterface {

}

interface StateInterface {
    opened: boolean;
}

export default class extends React.Component<PropsInterface, StateInterface>
{
    state = {
        opened: false
    };

    _open = () => this.setState({ opened: true });
    _close = () => this.setState({ opened: false });

    render()
    {
        const { opened } = this.state;

        return (
            <Container>
                <Button onClick={this._open}><span /></Button>
                <OutsideClickHandler onOutsideClick={this._close} display="flex">
                    <List opened={opened}>
                        { map(navigation, (item, index: number) => (
                            <Item key={index}>
                                <NavLink exact={item.exact} to={item.link} onClick={this._close} activeClassName="active">{item.label}</NavLink>
                            </Item>
                        )) }
                    </List>
                </OutsideClickHandler>
            </Container>
        );
    }
}