import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Heading from '../config/heading'
import { TouchableRipple } from 'react-native-paper';


class Account extends React.Component {
    constructor(props) {
        super(props);
    }
    UserHandler = () => {
        console.log(":USER");
        this.props.navigation.navigate('User');
    }
    settingsHandler = () => {   
        console.log(":Settings");
        this.props.navigation.navigate('Settings');
    }
    HelpHandler = () => {
        console.log(":HELP");
        this.props.navigation.navigate('Help');
    }
    FeedbackHandler = () => {
        console.log(":FeedBack");
        this.props.navigation.navigate('Feedback');
    }
    render() {
        return (
            <View>
                <View style={{ justifyContent: 'flex-start', padding: 15, paddingTop: 15, paddingBottom: 15, width: '100%', height: 'auto', elevation: 5, backgroundColor: 'white' }}>
                    <Text style={{ fontSize: 23, fontWeight: 'bold', alignItems: 'center', padding: 5, width: '100%' }} >Profile</Text>
                </View>
                <View style={{ padding: 20, height: 80, width: '100%', flexDirection: 'row' }}>
                    <Image style={{ width: 80, height: 80, borderRadius: 50 }} source={require('../../Assets/images.png')} />
                    <View style={{ paddingLeft: 10 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Avatar Name</Text>
                        <Text onPress={this.UserHandler} style={styles.userInfo}  >Edit your profile</Text>
                    </View>
                </View>
                
                <View style={{ width: '100%', marginTop: 10, height: 'auto', padding: 16 }}>
                    <TouchableRipple onPress={this.settingsHandler} style={styles.div}>
                        <Heading head={"Settings"} desc={"Privacy and logout"} />
                    </TouchableRipple>
                    <TouchableRipple onPress={this.HelpHandler} style={styles.div}>
                        <Heading head={"Help and Support"} desc={"Help center and other legal terms"} />
                    </TouchableRipple>
                    <TouchableRipple onPress={this.FeedbackHandler} style={styles.div}>
                            <Heading head={"Feedback and contact"} desc={"Facing difficulty? Feel free to contact us"} />
                    </TouchableRipple>
                </View>

            </View>
        );
    }
}
export default Account;
styles = StyleSheet.create({
    userInfo: {
        fontSize: 15, textAlign: 'center', color: '#288cfb', textDecorationLine: 'underline', textDecorationColor: '#288cfb'
    },
    div: {
        width: '100%', height: 'auto', padding: 5, borderBottomColor: '#bbb',
        borderBottomWidth: StyleSheet.hairlineWidth, paddingBottom: 10, paddingTop: 30,
    }
});
