import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TextInput } from 'react-native'

export default class userInfo extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{ padding: 20, marginTop:20, width: '100%',height:70,flexDirection: 'row', justifyContent: 'space-between', elevation: 5, backgroundColor: 'white' }}>
                    <Text style={{flex:1, fontSize: 18,padding: 5,}} >Cancel</Text>
                    <Text style={{ fontSize: 18,padding: 5,}} >Save  </Text>
                </View>

                <View style={{padding: 15, flex: 1, width: '100%' }}>
                    <Text style={{ fontWeight: "bold", fontSize: 18, width: '100%', marginBottom:10}}> Basic Information </Text>

                        <View style={{ width: '100%', flexDirection: 'row',paddingBottom:15 }}>
                            <Image style={styles.avatar} source={require('../../Assets/images.png')} />
                            <View style={{ paddingLeft:10 }}>
                                <Text style={{ fontSize: 15,margin:0 }}>Enter your name</Text>
                                <TextInput style={styles.field} placeholderTextColor="grey" placeholder="Name" />
                            </View>
                        </View>
                        <View style={{ width: '100%',marginTop:8,borderBottomWidth: StyleSheet.hairlineWidth,paddingBottom:15 }}>Description
                            <TextInput style={{ 
                                borderBottomWidth: StyleSheet.hairlineWidth,
                                borderBottomColor:black,
                                margin: 0,
                                padding: 6,
                                paddingBottom:0,
                                width:'100%'
                            }} placeholderTextColor="grey" placeholder="something about you..." multiline={true} numberOfLines={3} />
                        </View>
                </View>
                <View style={{ flex: 3, width: '100%' }}>

                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    },
    field: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor:black,
        margin: 0,
        padding: 6,
        paddingBottom:2,
        width:150
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 50,
    }
});
