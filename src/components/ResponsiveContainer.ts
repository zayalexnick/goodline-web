import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex: 1;
  
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;
  
  @media screen and (min-width: ${ ({ theme }) => theme.breakpoints.sm }) {
    max-width: ${ ({ theme }) => theme.breakpoints.sm };
  }
  
  @media screen and (min-width: ${ ({ theme }) => theme.breakpoints.md }) {
    max-width: ${ ({ theme }) => theme.breakpoints.md };
  }
  
  @media screen and (min-width: ${ ({ theme }) => theme.breakpoints.lg }) {
    max-width: ${ ({ theme }) => theme.breakpoints.lg };
  }
  
  @media screen and (min-width: ${ ({ theme }) => theme.breakpoints.xl }) {
    max-width: ${ ({ theme }) => theme.breakpoints.xl };
  }
`;