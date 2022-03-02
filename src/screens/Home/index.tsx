import React from 'react';

import Header from '../../components/Header';
import { Container, Title } from './styles';

function Home() {
  return (
    <Container>
      <Header />
      <Title>Hello world</Title>
    </Container>
  );
}

export default Home;
