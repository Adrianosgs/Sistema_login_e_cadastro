import React from "react";
import logoImg from "../../assets/logo-zukk.png";
import { FiLogIn, FiMail, FiLock } from "react-icons/fi";
import Input from "../../components/Input";
import { Form } from '@unform/web'
import Button from "../../components/Button";
import { Container, Content} from "./styles";

const Signin: React.FC = () => (

  <Container>
    <Content>
      <img src={logoImg} alt="zukk" />
      <Form onSubmit={() => {}}>
        <h1>Faça seu logon</h1>
        <Input name="usuário" icon={FiMail} placeholder="Login" />
        <Input
          name="password"
          icon={FiLock}
          type="password"
          placeholder="Senha"
        />
        <Button type="submit">Entrar</Button>
      </Form>
        <FiLogIn />
    </Content>
  </Container>
);

export default Signin;
