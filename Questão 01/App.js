import React from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';
import Rating from './Rating';
export default function App() {
  return (
    <Container>
      <Header />
      <Content>
        <Rating rating='1' />
        <Rating rating='2' />
        <Rating rating='3' />
        <Rating rating='4' />
        <Rating rating='5' />
      </Content>
    </Container>
  );
}