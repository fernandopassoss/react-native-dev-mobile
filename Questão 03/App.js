import React from 'react';
import { Container, Header, Text, View, StyleSheet } from 'native-base';
import ProductList from './ProductList';

export default function App() {
  return (
    <Container>
      <Header>
        <Text
        style={{
          justifyContent:'center',
          alignItems:'center',
          marginTop:'2%',
          fontSize:30,
        }}>
          Questão 03
        </Text>
      </Header>
      <View
        style={{       
          justifyContent: 'center',
          alignItems: 'center',
          marginTop:'80%',
          flexDirection: 'row',
        }}>
        <View
        style={{
          backgroundColor: '#D2691E',
          margin: 20,
          width: 75,
          height: 75,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Text>
            1
          </Text>
        </View>
        <View
        style={{
          backgroundColor: '#00FA9A',
          margin: 20,
          width: 75,
          height: 75,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Text>
            2
          </Text>
        </View>
        <View
        style={{
          backgroundColor: '#00CED1',
          margin: 20,
          width: 75,
          height: 75,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Text>
            3
          </Text>
        </View>
      </View>
      </Container>

  );
}
