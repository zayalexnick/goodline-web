import * as React from 'react';
import { BrowserRouter, Route, Switch, RouteProps } from 'react-router-dom';
import { map } from 'lodash';
import { PropsInterface, StateInterface } from './interfaces';

import routes from './routes';
import Wrapper from '~/scenes/Wrapper';

const RouteComponent: React.SFC = (props: RouteProps): JSX.Element => (
    <Route { ...props } />
);

@Wrapper
export default class Router extends React.Component<PropsInterface, StateInterface>
{

    render()
    {
        return (
            <Switch>
                { map(routes, (route: RouteProps, index: number): JSX.Element => <RouteComponent  key={index} { ...route } />) }
            </Switch>
        );
    }
}