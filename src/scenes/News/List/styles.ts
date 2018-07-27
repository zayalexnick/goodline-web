import styled from '~/theme/styled';
import { Link as RouterLink } from 'react-router-dom';
import { rgba, rem } from 'polished';

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    flex: 1;
`;

export const Item = styled(RouterLink)`
    display: flex;
    flex-direction: column;

    max-width: 300px;

    margin-bottom: 30px;

    text-decoration: none;
`;

export const Image = styled.img`
    width: 100%;
    height: auto;
`;

export const Category = styled.div`
    margin: 10px 0;

    font-size: ${ rem('12px') as string };
    color: ${ ({ theme }) => rgba(theme.colors.black, 0.4) as string };
`;

export const Title = styled.h2`
    margin-bottom: 20px;

    font-size: ${ rem('16px') };
    color: ${ ({ theme }) => theme.colors.primary };
`;

export const Description = styled.p`
    font-size: ${ rem('13px') };
    color: ${ ({ theme }) => theme.colors.black };
`;