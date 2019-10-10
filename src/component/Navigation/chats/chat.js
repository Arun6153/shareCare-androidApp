import React from 'react';
import {View ,Text ,StyleSheet} from 'react-native';

class Chat extends React.Component{
    render(){
        return (
            <View>
                <View style={styles.actionBar}>
                    <Text style={{fontSize:23,fontWeight:'bold',alignItems:'center', padding:5,width:'100%'}} >Chats</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    actionBar:{
        padding: 15,
        paddingTop:21,
        marginTop:20,
        width: '100%',
        height:70,
        flexDirection: 'row',
        justifyContent: 'space-between',
        elevation: 5,
        backgroundColor: 'white' 
    }
});

export default Chat;