
import React from "react";
import { FiArrowLeft, FiUser, FiLock, FiPhone, FiMapPin, FiHome, FiMap, FiSend } from "react-icons/fi";
import { Form } from "@unform/web";
import { Link } from 'react-router-dom';


import logoImg from "../../assets/logo-zukk.png";

import Input from "../../components/Input";
import Button from "../../components/Button";

import { Container, Content, Repositories} from "./styles";

const SignUP: React.FC = () => {
  function handleSubmit (data: object): void {
    console.log(data);
  }
  
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="zukk" />
        <Form onSubmit={handleSubmit}>
          <h1>Usuarios</h1>

      <div >
       <div >
          <Input name="name" />
      </div>
      <div>
          <Input name="Endereço" />
      </div>
      <div>
          <Input name="Bairro" />
      </div>
      <div>
          <Input name="Cidade" />
      </div>
      <div>
          <Input name="UF" />
      </div>
      <div>
          <Input name="Telefone" />
      </div>
      <div>
          <Input name="CEP" />
      </div>

      </div>
       
          <Button type="submit">Deletar</Button>
          <Button type="submit">Alterar</Button>
        </Form>
        <Repositories>
        <input  placeholder="Pesquise por usuarios"/>
        <button type="submit">Pesquisar</button>
        </Repositories>
      </Content>
    </Container>
  );
};

export default SignUP;