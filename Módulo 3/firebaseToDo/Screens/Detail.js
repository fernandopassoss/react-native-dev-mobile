import {View, Text, TextInput, StyleSheet, Pressable, ImageBackground} from 'react-native';
import React, { useState } from 'react';
import { firebase } from '../config';
import { useNavigation } from '@react-navigation/native';

const Detail = ({route}) =>{
    const TodoRef = firebase.firestore().collection('todos');
    const [textHeading, onChangeHeadingText] = useState(route.params.item.name);
    const navigation = useNavigation();

    const updateTodo = () =>{
        if(textHeading && textHeading.length > 0){
            TodoRef
            .doc(route.params.item.id)
            .update({
                heading:textHeading,
            }).then(()=>{
                navigation.navigate('Home')
            }).catch((erros)=>{
                alert(error.message)
            })
        }
    }
    return (
        <ImageBackground source={require('../img/dae.jpg')} style={styles.backgroundImage}>
        <View style={styles.container}>
            <TextInput
                style={styles.textField}
                onChangeText={onChangeHeadingText}
                value = {textHeading}
                placeholder = "Digite a nova anotação"
            />

            <Pressable
                style={styles.buttonUpdate}
                onPress={()=>{updateTodo()}}
            >
                <Text style={styles.buttonText}>
                   Atualizar
                </Text>
            </Pressable>
        </View>
        </ImageBackground>
    )
}




const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    container:{
        marginTop:300,
        marginLeft:15,
        marginRight:15,
    },
    textField:{
        marginBottom:10,
        padding:20,
        fontSize:15,
        color:'#000000',
        backgroundColor:'#e0e0e0',
        borderRadius:5,    
    },
    buttonUpdate:{
        marginTop:25,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        elevation:5,
        backgroundColor:'#696969', 
        height:70,    
    },
    buttonText:{
        fontSize:20,
        fontWeight:'bold'
    }
})

export default Detail;