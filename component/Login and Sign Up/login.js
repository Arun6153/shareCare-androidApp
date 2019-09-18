import React, { Component } from 'react'
import {StyleSheet, Text, View ,TextInput , TouchableOpacity } from 'react-native'

export default class Login extends Component {
    constructor(props)
    {
        super(props);
    }
    homeHandler=()=>{
        this.props.navigation.replace('tabs');
    }
    signUpHandler=()=>{
        this.props.navigation.navigate('signUp');
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style = {{fontWeight:'bold', fontSize:40,margin:40,marginBottom:60}}>
                    Share. Camp.
                </Text>
                <View style={{width:'80%'}}>
                    <TextInput keyboardType={'email-address'} style={styles.inputLogin} placeholder ="Email" />
                    <TextInput secureTextEntry={true}  style={styles.inputLogin} placeholder ="Password" />
                    <TouchableOpacity onPress={this.homeHandler} style={styles.buttonBox}>
                        <Text style={styles.ButtonText} >Login</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.loginContent}>
                        <Text onPress={this.signUpHandler} style={{color:'#288cfb' ,fontWeight: 'bold',marginBottom:30}}>Not a member? Sign up here.</Text>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    inputLogin:{
        margin:6, height: 40, borderColor: 'gray', borderWidth: 1,padding:5,
    },
    container:{
        flex:1,
        alignItems:'center',
        flexDirection:'column',
        justifyContent:'center'
    },
    loginContent:{
        flexGrow:1,
        justifyContent:'flex-end',
        alignItems:'center',
        marginTop:30
    },
    buttonBox:{
        marginTop:5,
        marginLeft:6,
        height:'auto',
        width:'96%',
        backgroundColor:'#288cfb'
    },
    ButtonText:{
        color:'#ffffff',
        padding:12,
        fontWeight:'bold',
        textAlign:'center'
    }
});