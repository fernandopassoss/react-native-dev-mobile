import React, { useState } from 'react';
import { Content, Form, Item, Input, Text } from 'native-base';

export default function MyForm() {
    const [name, setName] = useState('');
    
    return (
        <Content style={{ 
            padding: 16,
            marginTop: 100,
        }}>
            <Form>
                <Text style={{ marginBottom: 8 }}>
                    Qual é o seu nome?
                </Text>
                <Item>
                    <Input
                        placeholder='Insira aqui seu nome'
                        onChangeText={text => setName(text)}
                    />
                </Item>
                <Text style={{
                    marginTop: 16,
                    alignSelf: 'center', // Alinha o texto ao centro verticalmente
                }}>
                    Olá, {name}!
                </Text>
            </Form>
        </Content>
    );
}
