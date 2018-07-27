import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';

import { ThemeProvider } from '~/theme/styled';
import theme from '~/theme';
import '~/theme/baseStyles';

import RootStore from '~/mobx/RootStore';

import Router from '~/router';

render(
    <Provider { ...RootStore }>
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </ThemeProvider>
    </Provider>,
    document.getElementById('root') as HTMLElement
);