import React from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiLock, FiLogIn } from 'react-icons/fi';

import { Container, Content, Background } from './styles';

import Input from '../../Components/Input';
import Button from '../../Components/Button';

import logo from '../../assets/logo.svg';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logo} alt="goBarber" />

        <form>
          <h1>Faça seu Logon</h1>
          <Input
            name="email"
            type="email"
            placeholder="Seu Email"
            icon={FiMail}
          />
          <Input
            name="paswword"
            type="password"
            placeholder="Sua Senha"
            icon={FiLock}
          />
          <Button type="submit">Entrar</Button>

          <Link to="/">Esqueci Minha Senha</Link>
        </form>

        <Link to="/cadastrar">
          <FiLogIn />
          Criar Conta
        </Link>
      </Content>

      <Background />
    </Container>
  );
};

export default SignIn;
