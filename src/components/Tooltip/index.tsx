import React from 'react';

import { Container } from './styles';

interface TooltipProps {
  title: string;
  className?: string; // ? significa que não é obrigatória
}

const Tooltip: React.FC<TooltipProps> = ({ title, className = '', children }) => (
  <Container className={className}>
    {children}
    <span>{title}</span>
  </Container>
);

export default Tooltip;
