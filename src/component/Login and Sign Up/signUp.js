import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valueEmail: "",
            valuePassword: "",
            valueCPassword:"",
            EmailCheck:"",
            PassCheck:"",
            CPassCheck:"",
            boolPassword: false,
            boolEmail: false,
            boolCPassword : false
        }
    }
    homeHandler = () => {

        console.log("in");
        if (this.state.boolEmail && this.state.boolPassword && this.state.boolCPassword) {
            console.log("in - 2");
            fetch('http://192.168.43.186:3000/register',{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify({
                    Email: this.state.valueEmail,
                    Password: this.state.valuePassword
                })
            })
            .then((data)=>{
                return data.json();
            })
            .then((data) => {
                if (data.bool){
                    this.props.navigation.popToTop();
                    this.props.navigation.navigate('tabs');
                    this.props.navigation.dismiss();
                }
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
    loginHandler = () => {
        this.props.navigation.navigate('login');
    }
    emailHandler = (val) => {
        this.setState({ valueEmail: val});
    }
    passwordHandler = (val) => {
        this.setState({ valuePassword: val});
    }
    confirmPasswordHandler = (val) =>{
        this.setState({ valueCPassword: val});
    }
    checkerEmail = () => {
        let mail = this.state.valueEmail;
        console.log("here");
        if (mail.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))
        {   
            console.log("in fetch");
            fetch('http://192.168.43.186:3000/check',{
            method : 'POST',
            headers:{
                'Content-Type': " application/json"
            },
            body:JSON.stringify({
                Email:mail,
            })
        })
        .then((data)=>{
            return data.json();
        })
        .then((data)=>{
            if(data.bool){
                this.state.boolEmail = true;
                this.setState({EmailCheck:""});
                this.password.focus();
            }
            else if(!data.bool){
                this.setState({EmailCheck:"*Email already exists"})};
        }).catch((error) => {
            console.error(error);
        });
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
            this.state.boolPassword = true;
            this.setState({PassCheck:""});   
            this.CPassword.focus();
        }
    }
    checkerConfirmPassword = () =>{
        let passA = this.state.valuePassword;
        let passB = this.state.valueCPassword; 
        if (!(passA === passB)) {
            this.setState({ CPassCheck: "*Re-type your password." });
        }
        else{
            this.state.boolCPassword= true;
            this.setState({ CPassCheck: "" });
            this.setState({CPassCheck:""});   
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={{ fontWeight: 'bold', fontSize: 30 }}>
                    Become member.
                </Text>
                <Text style={{ marginTop: 2, marginBottom: 60 }}>
                    Welcome to our humble community.
                </Text>

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
                    <TextInput
                        secureTextEntry={true}
                        value={this.state.valueCPassword}
                        style={styles.inputLogin}
                        placeholder="Confirm-Password"
                        onChangeText={this.confirmPasswordHandler}
                        ref={(input) => { this.CPassword = input }}
                        onBlur={this.checkerConfirmPassword}
                    />
                    <Text style={{ margin: 0, color: "red" }}>
                        {this.state.CPassCheck}
                    </Text>
                    <TouchableOpacity onPress={this.homeHandler} style={styles.buttonBox}>
                        <Text style={styles.ButtonText}>SignUp</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.SignUpContent}>
                    <Text onPress={this.loginHandler} style={{ color: '#288cfb', fontWeight: 'bold', marginBottom: 30 }}>Already a member? Click here to Login.</Text>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    inputLogin: {
        margin: 6, height: 40, borderColor: 'gray', borderWidth: 1, padding: 5
    },
    container: {
        flex: 1,
        marginTop: 50,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    SignUpContent: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    SignUpContent: {
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