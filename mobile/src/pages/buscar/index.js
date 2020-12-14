import React, {useState, useEffect} from 'react'
import {View, Text, TextInput, TouchableOpacity, FlatList} from 'react-native';

import styles from './styles';

import api from '../../services/api'

let filter;

export default function Buscar() {
    let myTextInput;

    let [cattle, setCattle] = useState([])

    async function loadCattle() {
        const response = await api.get('cattle')

        if (filter){
            cattle = response.data.filter(el => el.lastArea === filter)

        } else {
            cattle = response.data
        }

        setCattle([...cattle])
        if (myTextInput) {
            myTextInput.current.clear();
        }
    }

    useEffect(() => {
        loadCattle()
    }, [])


    return (
        <View style={styles.container}>
            <Text style={styles.description}> Digite o ID da área: </Text>
            <View style = {styles.search}>
            <TextInput ref={myTextInput} onChangeText={val => filter = val} style={styles.inputText}></TextInput>
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.actions} onPress={loadCattle}>
                    <Text style={styles.action}> Buscar</Text>
                </TouchableOpacity>

            </View>
            </View>
            

            <FlatList
                data={cattle}
                style={styles.incidentList}
                showsVerticalScrollIndicator={false}
                keyExtractor={gado => String(gado._id)}

                renderItem={({item: gado}) => (

                    <View style={styles.incidentList}>
                        <View style={styles.incident}>
                            <Text style={styles.incidentProperty}>Identificador do animal: {gado.identifier}</Text>
                            <Text style={styles.incidentProperty}>Última área: {gado.lastArea}</Text>
                            <Text style={styles.incidentProperty}>Atualizado em: {gado.lastSeen}</Text>
                        </View>
                    </View>

                )}
            />


        </View>
    );
}