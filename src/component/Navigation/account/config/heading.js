import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class heading extends Component {
    constructor(props){
        super(props);
    }
    
    render() {
        return (
            <View>
                <Text onPress={() => this.settingsHandler} style={{ fontWeight: 'bold', fontSize: 18 }}>{this.props.head}</Text>
                <Text style={{ fontSize: 12 }}>{this.props.desc}</Text>
            </View>
        )
    }
}
