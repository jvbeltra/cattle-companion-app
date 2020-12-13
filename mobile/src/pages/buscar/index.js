import React from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList} from 'react-native';
import styles from './styles';

export default function Buscar(){
    function search(){

    }
    
    return (
        <View style = {styles.container}>
            <Text style = {styles.description} > Digite o ID da área </Text>
            <TextInput style ={styles.inputText}></TextInput>
            <View style={styles.button}>
                <TouchableOpacity style = {styles.actions} onPress =  {search}>
                        <Text style = {styles.action}> Buscar</Text>
                </TouchableOpacity>                
                
            </View>
            
            <FlatList
                data={[1,2,3,4,5,6,7]}
                style = {styles.incidentList}
                showsVerticalScrollIndicator={false}
                keyExtractor = {incident=>String (incident)}
                
                renderItem = {()=>(
                
                <View style={styles.incidentList}>
                    <View style = {styles.incident}>
                        <Text style = {styles.incidentProperty}>ID Animal: Vaca endiabrada</Text>
                        {/* <Text style = {styles.incidentValue}>Vaca endiabrada</Text> */}
                        <Text style = {styles.incidentProperty}>Status: Morta</Text>
                        {/* <Text style = {styles.incidentValue}>Morta</Text> */}
                        <Text style = {styles.incidentProperty}>Data: 06/06/666</Text>
                        {/* <Text style = {styles.incidentValue}>06/06/666</Text> */}

                   

                    </View>
            </View>

            )}
            />
            
            
            
        </View>
    );
}