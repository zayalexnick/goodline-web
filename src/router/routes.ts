import { RouteProps } from 'react-router-dom';

import MainScene from '~/scenes/Main';
import NewsListScene from '~/scenes/News/List';
import NewsItemScene from '~/scenes/News/Item';
import AuthScene from '~/scenes/Auth';
import ProfileScene from '~/scenes/Profile';

export default <RouteProps[]> [
    {
        path: '/',
        component: MainScene,
        exact: true
    },
    {
        path: '/news',
        component: NewsListScene,
        exact: true
    },
    {
        path: '/news/:id',
        component: NewsItemScene,
        exact: true
    },
    {
        path: '/auth',
        component: AuthScene,
        exact: true
    },
    {
        path: '/profile',
        component: ProfileScene,
        exact: true
    }
];