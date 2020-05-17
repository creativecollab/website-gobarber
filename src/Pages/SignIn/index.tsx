import React, { useCallback, useRef } from 'react';

/*
 * Library: React Router Dom
 * Type: Rotas
 */

import { Link } from 'react-router-dom';

/*
 * Library: React Icons
 * Type: Icones
 */

import { FiMail, FiLock, FiLogIn } from 'react-icons/fi';

/*
 * Library: Unform
 * Type: Formulários
 */

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

/*
 * Library: Yup
 * Type: Validações
 */

import * as Yup from 'yup';

import GetValidateError from '../../Utils/GetValidateError';
import { Container, Content, Background } from './styles';

import { useAuth } from '../../Hooks/Auth';
import { useToast } from '../../Hooks/Toast';

import Input from '../../Components/Input';
import Button from '../../Components/Button';

import logo from '../../assets/logo.svg';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { user, signIn } = useAuth();

  const { addToast } = useToast();

  console.log(user);

  const handleLogin = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});
        console.log(data);

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('O Campo Email é Obrigatório')
            .email('Email Inválido'),
          password: Yup.string().required('O Campo Senha é Obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          email: data.email,
          password: data.password,
        });
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = GetValidateError(error);

          formRef.current?.setErrors(errors);
        }

        addToast({
          type: 'error',
          title: 'Error na Autenticar',
          description:
            'Ocorreu um erro ao fazer Login, Cheque suas Credenciais',
        });
      }
    },
    [signIn, addToast],
  );

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
