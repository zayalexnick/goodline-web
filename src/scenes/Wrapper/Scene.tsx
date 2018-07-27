import * as React from 'react';
import { PropsInterface } from './interfaces';
import Header from '~/modules/Header';

const Wrapper = <WrappedProps extends PropsInterface>(WrappedComponent: React.ComponentType<WrappedProps>) => class Wrapper extends React.Component<WrappedProps>
{
    render()
    {
        return (
            <main>
                <Header />
                <WrappedComponent { ...this.props } />
            </main>
        );
    }
}

export default Wrapper;