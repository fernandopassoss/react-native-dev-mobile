import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TextInput, TouchableOpacity, Keyboard, Pressable, ImageBackground, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { firebase } from '../config';

const Home = () => {
    const [todos, setTodos] = useState([]);
    const todoRef = firebase.firestore().collection('todos');
    const [addData, setAddData] = useState('');
    const navigation = useNavigation();

    useEffect(() => {
        const unsubscribe = todoRef
            .orderBy('createdAt', 'desc')
            .onSnapshot(
                querySnapshot => {
                    const todos = [];
                    querySnapshot.forEach(doc => {
                        const { heading } = doc.data();
                        todos.push({
                            id: doc.id,
                            heading,
                        });
                    });
                    setTodos(todos);
                }
            );

        return () => unsubscribe();
    }, []);

    const deleteTodo = (todos) => {
        todoRef
            .doc(todos.id)
            .delete()
            .then(() => {
                alert("Apagado com sucesso");
            })
            .catch(error => {
                alert(error);
            });
    };

    const addTodo = () => {
        if (addData && addData.length > 0) {
            const timestamp = firebase.firestore.FieldValue.serverTimestamp();
            const data = {
                heading: addData,
                createdAt: timestamp,
            };
            todoRef
                .add(data)
                .then(() => {
                    setAddData('');
                    Keyboard.dismiss();
                })
                .catch((error) => {
                    alert(error);
                });
        }
    };

    const deleteAllTodos = () => {
        // Confirmação do usuário antes de excluir todos os itens
        Alert.alert(
            'Excluir todos os itens',
            'Tem certeza que deseja excluir todos os itens da lista?',
            [
                {
                    text: 'Cancelar',
                    style: 'cancel',
                },
                {
                    text: 'Confirmar',
                    onPress: () => {
                        todos.forEach((todo) => {
                            todoRef
                                .doc(todo.id)
                                .delete()
                                .catch((error) => {
                                    console.error('Erro ao excluir item:', error);
                                });
                        });
                        alert('Todos os itens foram apagados com sucesso');
                    },
                },
            ],
            { cancelable: true }
        );
    };


    return (
 
        <ImageBackground source={require('../img/dae.jpg')} style={styles.backgroundImage}>
            <View style={styles.container}>
                <View style={styles.formContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder='Adicione uma nota'
                        placeholderTextColor='#aaaaaa'
                        onChangeText={(heading) => setAddData(heading)}
                        value={addData}
                        underlineColorAndroid='transparent'
                        autoCapitalize='none'
                    />
                    <TouchableOpacity style={styles.button} onPress={addTodo}>
                        <Text style={styles.buttonText}>
                            +
                        </Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={todos}
                    numColumns={1}
                    renderItem={({ item }) => (
                        <Pressable
                            style={styles.todoContainer}
                            onPress={() => navigation.navigate('Detail', { item })}
                        >
                            <FontAwesome
                                name='trash-o'
                                color='red'
                                onPress={() => deleteTodo(item)}
                                style={styles.todoIcon}
                            />
                            
                            <View style={styles.innerContainer}>
                                <Text style={styles.itemHeading}>
                                    {item.heading[0].toUpperCase() + item.heading.slice(1)}
                                </Text>
                            </View>
                        </Pressable>
                    )}
                />

            <TouchableOpacity style={styles.button} onPress={deleteAllTodos}>
                    <Text style={styles.buttonText}>Excluir Todos</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>

    );
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        padding: 10,
        marginTop: 40
    },
    todoContainer: {
        backgroundColor: '#C0C0C0',
        padding: 15,
        borderRadius: 15,
        marginVertical: 5,
        marginHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    innerContainer: {
        alignItems: 'center',
        flexDirection: 'column',
        marginLeft: 45,
    },
    itemHeading: {
        fontWeight: 'bold',
        fontSize: 18,
        marginRight: 22,
    },
    formContainer: {
        flexDirection: 'row',
        height: 80,
        marginVertical: 20,
    },
    input: {
        height: 48,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        paddingLeft: 16,
        flex: 1,
        marginRight: 5,
    },
    button: {
        height: 47,
        borderRadius: 5,
        backgroundColor: '#696969',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5,
    },
    buttonText: {
        fontSize: 26,
        paddingHorizontal: 20,
        color: 'white'
    },
    todoIcon: {
        fontSize: 35,
        marginLeft: 14,
    },
});

export default Home;
