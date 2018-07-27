import styled from 'styled-components';
import { rem, transitions } from 'polished';
import { NavLink as RouterLink } from 'react-router-dom';
import OutsideClickHandler from 'react-outside-click-handler';

export const Container = styled.nav`
  display: flex;
  align-self: stretch;
  
  margin-left: auto;
`;

export const List = styled.ul`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  
  width: 250px;
  
  list-style: none;
  
  background: ${ ({ theme }) => theme.colors.black };
  
  z-index: 2;
  
  transform: translate(${ (props: { opened: boolean }) => props.opened ? 0 : '250px' }, 0);
  
  ${ ({ theme }) => transitions(`transform ${ theme.animation.speed }`) as string };
  
  @media screen and (min-width: ${ ({ theme }) => theme.breakpoints.md }) {
    position: relative;
    
    width: auto;
    
    flex-direction: row;
    
    transform: translate(0, 0);
  }
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  
  @media screen and (min-width: ${ ({ theme }) => theme.breakpoints.md }) {   
    flex-direction: row;
  }
`;

export const NavLink = styled(RouterLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  
  padding: 20px 0;
  
  font-size: ${ rem('14px') };
  font-weight: 600;
  color: ${ ({ theme }) => theme.colors.white };
  
  text-decoration: none;
  
  ${ ({ theme }) => transitions(`color ${ theme.animation.speed }`, `background-color ${ theme.animation.speed }`) as string };
  
  &:hover {
    color: ${ ({ theme }) => theme.colors.black };
    background-color: ${ ({ theme }) => theme.colors.white };
  }
  
  &.active {
    color: ${ ({ theme }) => theme.colors.white };
    background: ${ ({ theme }) => theme.colors.primary };
  }
  
  @media screen and (min-width: ${ ({ theme }) => theme.breakpoints.md }) {
    padding: 0 20px;
  }
`;

export const Button = styled.button`
  position: relative;
  align-self: center;
  
  width: 30px;
  height: 20px;
  
  background: none;
  
  @media screen and (min-width: ${ ({ theme }) => theme.breakpoints.md }) {
    display: none;
  }
  
  &:before, &:after, span {
    content: '';
  
    position: absolute;
    left: 0;
    
    height: 2px;
    background: ${ ({ theme }) => theme.colors.white };
  }
  
  &:before {
    top: 0;
    width: 30px;
  }
  
  &:after {
    bottom: 0;
    width: 24px;
  }
  
  span {
    top: 9px;
    width: 20px;
  }
`;
