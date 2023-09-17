import React from 'react';
import { Container, Header, Content, H1, Text, Button } from 'native-base';
import ProductList from './ProductList';
import Rating from './Rating';


function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}
export default function App() {
  const user = {
    firstName: 'fefe',
    lastName: 'passos'
  };
  const isValid = true;

  return (
    <Container>
      <Header />
      <Content>
        <Button disabled={!isValid} >
          <Text>Clique aqui</Text>
        </Button>
        <Button danger>
          <Text>Atenção</Text>
        </Button>
        <Rating rating='1' />
        <Rating rating='2' />
        <Rating rating='3' />
        <Rating rating='4' />
        <Rating rating='5' />
      </Content>
    </Container>
  );
}
