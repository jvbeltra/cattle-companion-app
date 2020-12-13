import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles'


export default function Menu(){
    return (
        <View style={styles.container}>
            
            <Text style={styles.title}> Olá!</Text>
            <Text style={styles.description}> Escolha uma das opções abaixo</Text>
            
        </View>
    );
}