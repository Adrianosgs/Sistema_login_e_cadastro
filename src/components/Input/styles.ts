import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`

  background: #232129;
  border-radius: 10px;
  padding: 16px;
  width: 100%;


  border: 2px solid #233129;
  color: #666360;

  display: flex;
  align-items: center;
  

  
  & + div {
    margin-top: 8px;
 }

 ${props => props.isFocused && css`
   color: #1E90FF;
   border-color: #1E90FF;
 ` }

 ${props => props.isFilled && css`
   color: #1E90FF;
 ` }

input {
  
  border: 0;
  flex: 1;
  background: transparent;
  color: #F4EDE8;


  &::placeholder {
    color: #666360;
    }
  }

  svg {
   margin-right: 16px;
  }

`; 