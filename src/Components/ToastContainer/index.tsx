import React from 'react';

import { useTransition } from 'react-spring';

import { ToastMessage } from '../../Hooks/Toast';

import Toast from './Toast';

import { Container } from './styles';

interface ToastProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastProps> = ({ messages }) => {
  const messageTransitions = useTransition(messages, message => message.id, {
    from: { right: '-120%' },
    enter: { right: '0%' },
    leave: { right: '-120%' },
  });
  return (
    <Container>
      {messageTransitions.map(({ key, item, props }) => (
        <Toast key={key} message={item} style={props} />
      ))}
    </Container>
  );
};

export default ToastContainer;
