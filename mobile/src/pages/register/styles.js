import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
export default StyleSheet.create({
    container:{
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
    alignItems: 'center'
    },

    description:{
        fontSize: 16,
        lineHeight:24,
        color: '#737380'
    },
    inputText:{
        backgroundColor:'#C0C0C0',
        borderRadius:8,
        height:30,
        width: '60%',
        marginTop: 20,
        marginBottom:20,
        fontSize:14
    },

    error:{
        fontSize: 16,
        lineHeight:24,
        color: '#b31320'
    },

    created:{
        fontSize: 16,
        lineHeight:24,
        color: '#13b337'
    },

    buttons:{
        
        alignItems: 'center'
    },

    button:{
        color:'#737380'
    },

    actions:{
        
        backgroundColor:'#13131a',
        borderRadius:8,
        height:40,
        width: '70%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:30,
        // marginBottom:20,
        // marginLeft:100

        
    },

    action:{
        color:'#FFF',
        fontSize:15,
        fontWeight: 'bold'
    }


})