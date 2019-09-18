import React, { Component } from 'react'
import {StyleSheet, Text, View ,TextInput ,TouchableOpacity } from 'react-native'

export default class SignUp extends Component {
    constructor(props)
    {
        super(props);
    }
    homeHandler=()=>{
        this.props.navigation.popToTop();
        this.props.navigation.navigate('tabs');
        this.props.navigation.dismiss();
    }
    loginHandler=()=>{
        this.props.navigation.navigate('login');
    }
    render() {
        return (
            <View style={styles.container}>
                 <Text style = {{fontWeight:'bold', fontSize:40,margin:40,marginBottom:60}}>
                    Become member.
                </Text>
                <View style={{width:'80%'}}>
                    <TextInput keyboardType={'email-address'} style={styles.inputSignUp} placeholder ="Email" />
                    <TextInput keyboardType={'numeric'} style={styles.inputSignUp} placeholder ="Phone number" />
                    <TextInput secureTextEntry={true}  style={styles.inputSignUp} placeholder ="Password" />
                    <TouchableOpacity onPress={this.homeHandler} style={styles.buttonBox}>
                        <Text  style={styles.ButtonText}>SignUp</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.SignUpContent}> 
                        <Text  onPress={this.loginHandler} style={{color:'#288cfb' ,fontWeight: 'bold',marginBottom:30}}>Already a member? Click here to Login.</Text>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    inputSignUp:{
        margin:6, height: 40, borderColor: 'gray', borderWidth: 1,padding:5
    },
    container:{
        flexGrow:1,
        alignItems:'center',
        justifyContent:'center'
    },
    SignUpContent:{
        flexGrow:1,
        justifyContent:'center',
        alignItems:'center'
    },
    SignUpContent:{
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