import * as React from 'react';
import { Container } from './styles';
import Loader from './Loader';

interface PropsInterface {
    loading: boolean;
}

const Component: React.SFC<PropsInterface> = ({ loading, children }) => (
    <Container>
        { loading ? <Loader /> : children }
    </Container>
);

export default Component;