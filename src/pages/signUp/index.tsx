import React from "react";
import { FiUser, FiLock, FiPhone, FiMapPin, FiHome, FiMap, FiSend } from "react-icons/fi";
import { Form } from "@unform/web";




import logoImg from "../../assets/logo-zukk.png";

import Input from "../../components/Input";
import Button from "../../components/Button";

import { Container, Content} from "./styles";

const SignUP: React.FC = () => {
  function handleSubmit (data: object): void {
    console.log(data);
  }
  
  return (
    <Container>
      
      <Content>
        <img src={logoImg} alt="zukk" />
        <Form onSubmit={handleSubmit}>
          <h1>Faça seu Cadastro</h1>

          <Input name="name" icon={FiUser} placeholder="Nome" />
          <Input name="endereço" icon={FiHome} placeholder="Endereço" />
          <Input name="bairro" icon={FiHome} placeholder="Bairro" />
          <Input name="cidade" icon={FiMap} placeholder="Cidade" />
          <Input name="uf" icon={FiSend} placeholder="UF" />
         <Input name="fone" icon={FiPhone} placeholder="Fone" />
         <Input name="cep" icon={FiMapPin} placeholder="CEP" />
         <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />
          <Button type="submit">Cadastrar</Button>
        </Form>
      </Content>
    </Container>
  );
};

export default SignUP;
