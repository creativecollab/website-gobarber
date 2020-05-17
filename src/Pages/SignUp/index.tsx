import React, { useRef, useCallback } from 'react';

/*
 * Library: React Router Dom
 * Type: Rotas
 */

import { Link } from 'react-router-dom';

/*
 * Library: React Icons
 * Type: Icones
 */

import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';

/*
 * Library: Yup
 * Type: Validações
 */

import * as Yup from 'yup';

/*
 * Library: Unform
 * Type: Formulários
 */

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

/*
 * Core: STYLESHEET E ASSESTS
 * Type: Styles do app
 */

// TRATAMENTOS DE ERROS DA APLICAÇÃO
import GetValidateError from '../../Utils/GetValidateError';

// COMPONENTS
import Input from '../../Components/Input';
import Button from '../../Components/Button';

// STYLES
import { Container, Content, Background } from './styles';

// LOGO DO APP
import logo from '../../assets/logo.svg';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  console.log(formRef);

  const handleRegister = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('O Campo Nome é Obrigatório'),
        email: Yup.string()
          .required('O Campo Email é Obrigatório')
          .email('Email Inválido'),
        password: Yup.string().min(8, 'No minimo 8 Digitos'),
      });

      await schema.validate(data);

      console.log(data);
    } catch (error) {
      const errors = GetValidateError(error);

      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <Container>
      <Background />
      <Content>
        <img src={logo} alt="goBarber" />

        <Form ref={formRef} onSubmit={handleRegister}>
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
            name="password"
            type="password"
            placeholder="Sua Senha"
            icon={FiLock}
          />

          <Button type="submit">Cadastrat</Button>
        </Form>

        <Link to="/">
          <FiArrowLeft />
          Já tenho Conta
        </Link>
      </Content>
    </Container>
  );
};

export default SignUp;
