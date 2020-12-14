import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles'
import logoImg from '../../assets/logo.png'

export default function Menu(){
    const navigation = useNavigation();

    function navigateToRegister(){
        navigation.navigate('Register'); 
    }

    function navigateToSearch(){
        navigation.navigate('Buscar')
    }


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                
                
                <Text style={styles.title}> Olá!</Text>
                <Image source = {logoImg} />
            </View>
            
            <Text style={styles.description}> Escolha uma das opções abaixo</Text>

           <View style = {styles.buttons}>
                <TouchableOpacity style = {styles.actions} onPress =  {navigateToRegister}>
                        <Text style = {styles.action}> Registro</Text>
                </TouchableOpacity>
               
                <TouchableOpacity style = {styles.actions} onPress = {navigateToSearch}>
                        <Text style = {styles.action}> Buscar</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}