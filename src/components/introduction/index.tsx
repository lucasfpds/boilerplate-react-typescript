import React from 'react';
import { Container, SpanText, Heading1, Heading4 } from './style';

export const Introduction: React.FC = () => {
  return (
    <Container>
      <SpanText>PIXEL PERFECT </SpanText>
      <Heading1>web developer</Heading1>
      <Heading4>Olá, me chamo Lucas Fernandes e eu amo construir aplicações web.</Heading4>
    </Container>
  );
}
