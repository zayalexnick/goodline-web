import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { map } from 'lodash';

import routes from './routes';
import Wrapper from '~/scenes/Wrapper';

const RouteComponent: React.SFC<any> = (props) => (
    <Route { ...props } />
);

@Wrapper
export default class Router extends React.Component
{

    render()
    {
        return (
            <Switch>
                { map(routes, (route, index) => <RouteComponent  key={index} { ...route } />) }
            </Switch>
        );
    }
}