import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
export default StyleSheet.create({
    container:{
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fff'

    },

    title:{
        fontSize:30,
        marginBottom:16,
        // marginTop:48,
        color:'#13131a',
        flexDirection:'row'
    },

    description:{
        fontSize: 16,
        lineHeight:24,
        color: '#737380',
        marginLeft:40
    },

    header:{
       flexDirection:'row',
       justifyContent:'space-between',
       alignItems:'center',
       marginBottom:20
    },

    buttons:{
        
        alignItems: 'center'
    },

    actions:{
        
        backgroundColor:'#13131a',
        borderRadius:8,
        height:40,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:50,
        // marginBottom:20,
        // marginLeft:100

        
    },

    action:{
        color:'#FFF',
        fontSize:15,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
    }
});