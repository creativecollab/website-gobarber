import React, { useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiLock, FiLogIn } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import GetValidateError from '../../Utils/GetValidateError';
import { Container, Content, Background } from './styles';

import Input from '../../Components/Input';
import Button from '../../Components/Button';

import logo from '../../assets/logo.svg';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleLogin = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .required('O Campo Email é Obrigatório')
          .email('Email Inválido'),
        password: Yup.string().required('O Campo Senha é Obrigatório'),
      });

      await schema.validate(data, { abortEarly: false });
    } catch (error) {
      const errors = GetValidateError(error);

      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <Container>
      <Content>
        <img src={logo} alt="goBarber" />

        <Form ref={formRef} onSubmit={handleLogin}>
          <h1>Faça seu Logon</h1>
          <Input
            name="email"
            type="email"
            placeholder="Seu Email"
            icon={FiMail}
          />
          <Input
            name="password"
            type="password"
            placeholder="Sua Senha"
            icon={FiLock}
          />
          <Button type="submit">Entrar</Button>

          <Link to="/">Esqueci Minha Senha</Link>
        </Form>

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
