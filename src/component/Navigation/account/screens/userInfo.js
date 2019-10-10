import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TextInput ,ScrollView} from 'react-native'
import Modal from './modal/modal'

export default class userInfo extends Component {
    constructor(props) {
        super(props);
    }
    cancelAction = (props) => {
        this.props.navigation.pop();
    }
    saveAction = (props) => {
        this.props.navigation.pop();
    }
    render() {
        return (
            <ScrollView bounces={true} contentContainerStyle={styles.container}>
                <View style={styles.actionBar}>
                    <Text  style={{ fontWeight: 'bold', flex: 1, fontSize: 16, padding: 5, paddingLeft: 3 }} >CANCEL</Text>
                    <Text  style={{ fontWeight: 'bold', fontSize: 16, padding: 5, color: 'dodgerblue', paddingRight: 0 }} >SAVE</Text>
                </View>

                <View style={{ paddingTop: 15, flex: 1, width: '100%' }}>
                    <Text style={styles.header}> Basic Information </Text>
                    <View style={{ width: '100%', flexDirection: 'row', padding: 15, paddingTop: 0 }}>
                        <Image style={styles.avatar} source={require('../../Assets/images.png')} />
                        <View style={{ paddingLeft: 10 }}>
                            <Text style={{ fontSize: 15, margin: 0 }}>Enter your name</Text>
                            <TextInput style={styles.field} placeholderTextColor="grey" placeholder="Name" />
                        </View>
                    </View>
                    <View style={{ width: '100%', borderBottomWidth: StyleSheet.hairlineWidth, padding: 15, paddingTop: 0 }}>
                        <TextInput style={{
                            borderBottomWidth: 1,
                            borderBottomColor: 'black',
                            margin: 0,
                            paddingBottom: 0,
                            width: '100%'
                        }} placeholderTextColor="grey" placeholder="something about you..." multiline={true} numberOfLines={3} />
                    </View>

                    <View style={{paddingLeft:15,paddingRight:15,borderBottomWidth: StyleSheet.hairlineWidth}}>
                        <Text style={styles.header1}>Contact Information </Text>
                        <View>
                            <Text style={{fontSize:13,color:'grey',marginBottom:3}}>Phone no.</Text>
                            <Text style={styles.tempField}>8607972097</Text>
                        </View>
                        <Text style={styles.textNormal}>This is the number for buyers contact , reminders and notifictaion</Text>

                        <View>
                            <Text style={{fontSize:13,color:'grey',marginBottom:3}}>Email</Text>
                            <Text style={styles.tempField}>sarun6153@gmail.com</Text>
                        </View>
                        <Text style={styles.textNormal}>Did you have verified your email? Its important to allow us for securily communicate with you</Text>
                    </View>
                    
                </View>
                <Modal place={"Enter your phone no."} name={"Phone No"} visible={true} />
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    },
    field: {
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        margin: 0,
        padding: 6,
        paddingBottom: 2,
        width: 150
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 50,
    },
    actionBar: {
        padding: 15,
        paddingTop: 15,
        marginTop: 20,
        width: '100%',
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        elevation: 5,
        backgroundColor: 'white'
    },
    header: {
        padding: 15,
        paddingBottom: 17,
        paddingTop: 10,
        fontWeight: "bold",
        fontSize: 18,
        width: '100%'
    },
    header1: {
        paddingBottom: 17,
        paddingTop: 15,
        fontWeight: "bold",
        fontSize: 18,
        width: '100%'
    },
    textNormal:{
        fontSize:15,
        color:'grey',
        paddingTop:10,
        paddingBottom:10,
    },
    tempField:{
        borderBottomWidth:1,
        borderBottomColor:'black',
        width:'60%',
    }
});
