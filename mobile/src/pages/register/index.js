import React from 'react';
import { View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from './styles';


export default function Register(){
    
    function register(){
        
    }

    return (
        <View style={styles.container}>
            <Text style={styles.description}> Insira o ID do animal</Text>
            <TextInput style ={styles.inputText}></TextInput>
            <Text style={styles.description}> Insira o ID da área inicial do animal</Text>
            <TextInput style ={styles.inputText}></TextInput>
            <Text style={styles.description}> Insira o status do animal</Text>
            <TextInput style ={styles.inputText}></TextInput>
            
            <View style={styles.button}>
                <TouchableOpacity style = {styles.actions} onPress =  {register}>
                        <Text style = {styles.action}> Registrar</Text>
                </TouchableOpacity>
               
                

            </View> 
        
        
        </View>


    );
}