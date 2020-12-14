import React, {Component} from 'react';

import {
    Button,
    Keyboard,
    StyleSheet,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

import api from '../../services/api';
import styles from './styles';

export default class Register extends React.Component {
    state = {
        username: '', password: '', email: '', phone_number: ''
    }
    onChangeText = (key, val) => {
        this.setState({[key]: val})
    }

    addCattle = async () => {
        const {identifier, lastArea} = this.state
        try {
            let today = new Date();

            let dd = String(today.getDate()).padStart(2, '0');
            let mm = String(today.getMonth() + 1).padStart(2, '0');
            let yyyy = today.getFullYear();

            let hh = today.getHours();
            let min = today.getMinutes();

            min.length === 1 ? min = "0" + min : null;

            let lastSeen = `${dd}/${mm}/${yyyy} ${hh}:${min}`;
            await api.post('/cattle', {identifier, lastArea, lastSeen});
            console.log('user successfully signed up!: ')
        } catch (err) {
            console.log('error signing up: ', err)
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.description}> Insira o ID do animal</Text>
                <TextInput  onChangeText={val => this.onChangeText('identifier', val)} style={styles.inputText}/>
                <Text style={styles.description}> Insira o ID da área inicial do animal</Text>
                <TextInput name="lastArea"   onChangeText={val => this.onChangeText('lastArea', val)} style={styles.inputText}/>

                {/*<View style={styles.button}>*/}
                {/*    <TouchableOpacity style = {styles.actions} onPress={this.addCattle()}>*/}
                {/*        <Text style = {styles.action}> Registrar</Text>*/}
                {/*    </TouchableOpacity>*/}
                {/*</View>*/}
                <View style={styles.action}>
                <Button
                    // style={styles.button}
                    title='Cadastrar'
                    color='#000000'
                    
                    
                    onPress={this.addCattle}
                />
                </View>
                
            </View>
        )
    }
}