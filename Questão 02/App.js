import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'pink'
        }}
      >
        <Text >
          Você clicou no botão {this.state.count} vezes.
        </Text>
        <TouchableOpacity onPress={() => this.setState({ count: this.state.count + 1 })}>
          <Text >Clique aqui</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default App;
