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
 flex-direction: column;
 flex-wrap: wrap;
 height: 150px;
 align-items: center;
 

 

 place-content: flex-start;

 width: 100%;
 max-width: 800px;

img {
  
  margin: 350px 60px 0 0;

}
 form {
   margin: 90px 0;
   width: 340px;
   text-align: center;
 }

 h1 {
   margin-bottom: 24px;
 }

  a {
    color: #F4EDE8;
    display: block;
    margin-top: 30px;
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
    margin-top: 20px;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    svg {
      margin: 20px;
      
    }

  &:hover {
      color: ${shade(0.2, '#1E90FF')};
    }
  } 
`;
