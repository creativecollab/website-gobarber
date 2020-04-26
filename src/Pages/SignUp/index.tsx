import React from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';

import { Container, Content, Background } from './styles';

import Input from '../../Components/Input';
import Button from '../../Components/Button';

import logo from '../../assets/logo.svg';

const SignUp: React.FC = () => {
  return (
    <Container>
      <Background />
      <Content>
        <img src={logo} alt="goBarber" />

        <form>
          <h1>Faça Seu Cadastro</h1>

          <Input
            name="name"
            type="text"
            placeholder="Seu nome Completo"
            icon={FiUser}
          />

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

          <Button type="submit">Cadastrat</Button>
        </form>

        <Link to="/">
          <FiArrowLeft />
          Já tenho Conta
        </Link>
      </Content>
    </Container>
  );
};

export default SignUp;
