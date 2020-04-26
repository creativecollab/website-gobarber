import React, { useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';

import * as Yup from 'yup';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import { Container, Content, Background } from './styles';

import GetValidateError from '../../Utils/GetValidateError';

//
import Input from '../../Components/Input';
import Button from '../../Components/Button';

import logo from '../../assets/logo.svg';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleRegister = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('O Campo Nome é Obrigatório'),
        email: Yup.string()
          .required('O Campo Email é Obrigatório')
          .email('Email Inválido'),
        password: Yup.string()
          .required('O Campo Snha é Obrigatório')
          .min(8, 'No minimo 8 Caracter'),
      });

      await schema.validate(data, { abortEarly: false });
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
