import React, { useRef, useCallback } from 'react';

/*
 * Library: React Router Dom
 * Type: Rotas
 */

import { Link, useHistory } from 'react-router-dom';

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
import { Container, Content, AnimationContainer, Background } from './styles';

// LOGO DO APP
import logo from '../../assets/logo.svg';

import Api from '../../Services/Api';

import { useToast } from '../../Hooks/Toast';

interface FormData {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const { addToast } = useToast();
  const history = useHistory();
  const formRef = useRef<FormHandles>(null);

  const handleRegister = useCallback(
    async (data: FormData) => {
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

        await Api.post('/users', data);

        addToast({
          type: 'success',
          title: 'Cadastrado',
          description: 'Usuario registrado com Sucesso',
        });

        history.push('/');
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = GetValidateError(error);

          formRef.current?.setErrors(errors);
          return;
        }

        addToast({
          type: 'error',
          title: 'Erro ao Cadastrar',
          description: 'Erro ao registrar o Usuario',
        });
      }
    },
    [addToast, history],
  );

  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
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
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default SignUp;
