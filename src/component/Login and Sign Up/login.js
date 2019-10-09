import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native'
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valueEmail: "",
            valuePassword: "",
            boolEmail: false,
            boolPassword: false,
            EmailCheck:"",
            PassCheck :""
        }
    }
    componentDidMount = () => {
        let val = JSON.stringify({
            Email: this.state.valueEmail,
            Password: this.state.valuePassword
        });
        if (this.state.boolEmail && this.state.boolPassword) {
            console.log(val);
            fetch('http://192.168.43.186:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: val,
            }).then((data)=>{
                return data.json();
            })
            .then((data) => {
                    console.log(data.bool);
                    if (data.bool) this.props.navigation.replace('tabs');
                    else if(data.bool === false)
                    {
                        this.setState({PassCheck:"*Your email or password is incorrect"});
                    }
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }
    signUpHandler = () => {
        this.props.navigation.navigate('signUp');
    }
    emailHandler = (val) => {
        this.setState({ valueEmail: val });
    }
    passwordHandler = (val) => {
        this.setState({ valuePassword: val });
    }
    checkerEmail = () => {
        let  mail = this.state.valueEmail;
        let bool = !this.state.boolEmail;
        if (mail.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
            this.state.boolEmail = true;
            this.setState({ EmailCheck: "" });
            console.log(this.state.boolEmail);
            this.password.focus();
        }
        else {
            this.setState({ EmailCheck: "*This email is wrong." });
        }
    }
    checkerPassword = () => {
        let len = this.state.valuePassword.length;
        if (!(len >= 8 && len <= 16)) {
            this.setState({ PassCheck: "*Length of password should be in 8-16 character." });
        }
        else {
            this.setState({ PassCheck: ""});
            this.state.boolPassword = true;
            console.log(this.state.boolPassword);
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={{ fontWeight: 'bold', fontSize: 30 }}>
                    Share. Camp.
                </Text>
                <Text style={{ marginTop: 2, marginBottom: 60 }}>Share to ur dears with trust.</Text>

                <View style={{ width: '80%' }}>
                    <TextInput
                        keyboardType={'email-address'}
                        style={styles.inputLogin}
                        placeholder="Email"
                        value={this.state.valueEmail}
                        onChangeText={this.emailHandler}
                        onBlur={this.checkerEmail}
                    />
                    <Text style={{ marginLeft: 10, color: "red" }}>
                        {this.state.EmailCheck}
                    </Text>
                    <TextInput
                        secureTextEntry={true}
                        value={this.state.valuePassword}
                        style={styles.inputLogin}
                        placeholder="Password"
                        onChangeText={this.passwordHandler}
                        ref={(input) => { this.password = input }}
                        onBlur={this.checkerPassword}
                    />
                    <Text style={{ margin: 0, color: "red" }}>
                        {this.state.PassCheck}
                    </Text>
                    <TouchableOpacity onPress={this.componentDidMount} style={styles.buttonBox}>
                        <Text style={styles.ButtonText} >Login</Text>
                    </TouchableOpacity>
                    <View style={{ width: '100%', alignItems: 'center' }}>
                        <Text style={{ color: '#288cfb', fontWeight: 'bold', margin: 10 }}>Forgot your password.</Text>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>or</Text>
                        <Image style={{ width: 191, height: 45, margin: 15 }} source={require('../Navigation/Assets/google.png')} />
                    </View>
                </View>
                <View style={styles.loginContent}>
                    <Text onPress={this.signUpHandler} style={{ color: '#288cfb', fontWeight: 'bold', marginBottom: 30 }}>Not a member? Sign up here.</Text>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    inputLogin: {
        margin: 6, height: 40, borderColor: 'gray', borderWidth: 1, padding: 5,
    },
    container: {
        flex: 1,
        marginTop: 50,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    loginContent: {
        flexGrow: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: 30
    },
    buttonBox: {
        marginTop: 5,
        marginLeft: 6,
        height: 'auto',
        width: '96%',
        backgroundColor: '#288cfb'
    },
    ButtonText: {
        color: '#ffffff',
        padding: 12,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});