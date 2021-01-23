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
  
  margin: 50px 0px 0 0;

}
 form {
   margin: 130px 0;
   width: 340px;
   text-align: center;

 }



 div {
   justify-content: row;
 }

 strong {
   color: #F44545;
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
`;
export const Repositories = styled.div`
button{
  margin:15px 25px 0 0;
  width: 90px;
  height: 35px;
  border: 0;
  border-radius: 5px;
  transition: background-color 0.2s;

  &:hover {
     background: ${shade(0.2, '#1E90FF')};
   }
 }
}

input {
  color: #F4EDE8;
  margin: 10px 2px 0 5px;
  width: 200px;
  height: 30px;
  background: #232129;
  border: 0;
  padding: 15px;

  &::placeholder {
    color:#a8a8d3;
}
}
 
`;
