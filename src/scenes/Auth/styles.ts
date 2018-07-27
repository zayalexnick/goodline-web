import styled from '~/theme/styled';
import { rem } from 'polished';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
`;

export const Input = styled.input`
    margin-bottom: 20px;
    padding: 15px;

    font-size: ${ rem('16px') as string };

    border: 1px solid ${ ({ theme }) => theme.colors.black };
`;

export const ErrorMessage = styled.div`
    margin-bottom: 20px;
    padding: 15px;

    color: ${ ({ theme }) => theme.colors.white };

    background: ${ ({ theme }) => theme.colors.error };
`;