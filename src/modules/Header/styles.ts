import styled from '~/theme/styled';
import { Link as RouterLink } from 'react-router-dom';

export const Wrapper = styled.header`
  position: relative;
  
  margin-top: 72px;
  
  z-index: 3;
  
  @media screen and (min-width: ${ ({ theme }) => theme.breakpoints.md }) {
    margin-top: 86px;
  }
`;

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  
  height: 72px;
  
  border-top: 4px solid ${ ({ theme }) => theme.colors.primary };
  background: ${ ({ theme }) => theme.colors.black };
  
  @media screen and (min-width: ${ ({ theme }) => theme.breakpoints.md }) {
    height: 86px;
  }
`;

export const Logo = styled.img`
  width: auto;
  height: 26px;
  
  @media screen and (min-width: ${ ({ theme }) => theme.breakpoints.md }) {
    height: 40px;
  }
`;

export const Link = styled(RouterLink)`
  padding: 20px 0;
`;