import React from 'react';

import { Container } from './styles';

interface TooltipPros {
  title: string;
  className?: string;
}

const Tooltip: React.FC<TooltipPros> = ({ children, className, title }) => {
  return (
    <Container className={className}>
      {children}
      <span>{title}</span>
    </Container>
  );
};

export default Tooltip;
