import styled from 'styled-components';
import { shade } from 'polished';


export const Container = styled.div`
  height: 100vh;
 display: flex;
 align-items: stretch;
 justify-content: center;
 border-top: 50px;

`;

export const Content = styled.div`
 display: flex;
 flex-direction: row;
 align-items: center;


 place-content: center;

 width: 100%;
 margin-left: 20px;
 max-width: 560px;

 img {
  
  margin: 40px 20px 0 0;
  

}

 form {
   text-align: center;
   margin: 0 40px;
   margin-top: 60px;
 }

 h1 {
   margin-bottom: 24px;
 }

  a {
    color: #1E90FF;
    display: block;
    margin-top: 20px;
    text-decoration: none;
    transition: color 0.2s;

    &:hover{
      color: ${shade(0.2, '#F4EDE8')};
      }
    }
  }

  > a {
    color: #F4EDE8;
    display: block;
    margin-top: 30px;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 15px;
    }

  &:hover {
      color: ${shade(0.2, '#1E90FF')};
    }
  } 
`;

export const Background = styled.div`
flex: 1;
background-size: cover;
`;