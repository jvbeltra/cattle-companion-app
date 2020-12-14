import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
export default StyleSheet.create({
    container:{
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
    // alignItems: 'center'
    },

    description:{
        fontSize: 16,
        lineHeight:24,
        color: '#737380'
    },

    search:{
        flexDirection: 'row'
    },

    inputText:{
        backgroundColor:'#C0C0C0',
        borderRadius:8,
        height:35,
        width: '60%',
        marginTop: 22,
        marginBottom:0,
        fontSize:14
        
    },
    buttons:{
        
        alignItems: 'center'
    },

    actions:{
        
        backgroundColor:'#13131a',
        borderRadius:8,
        height:40,
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:20,
        marginLeft:30
        // marginBottom:20,
        // marginLeft:100

        
    },

    action:{
        color:'#FFF',
        fontSize:15,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        
    },

    incidentList:{
        marginTop:10
    },
    incident:{
        marginTop:10,
        backgroundColor:'#FFF',
        // flexDirection:'row'
        
    },

    incidentProperty:{
        marginTop: 5,
        marginLeft: 5,
        marginBottom: 5,
        
    },

    incidentValue:{
        marginTop: 5,
        marginLeft: 5,
        marginBottom: 5,
        
    }



})