import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

class Account extends React.Component {
    render() {
        return (
            <View>
                <View style={styles.actionBar}>
                    <Text style={{ fontSize: 23, fontWeight: 'bold', alignItems: 'center', padding: 5, width: '100%' }} >Profile</Text>
                </View>
                <View style={{ padding: 20, height: 80, width: '100%', flexDirection: 'row' }}>
                    <Image style={{ width: 80, height: 80, borderRadius: 50 }} source={require('../Assets/images.png')} />
                    <View style={{paddingLeft:10}}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Name</Text>
                        <Text style={{ fontSize: 15, textAlign: 'center',color:'#288cfb' ,textDecorationLine:'underline' , textDecorationColor:'#288cfb'}}>Edit your profile</Text>
                    </View>
                </View>
                <View style={{ width: '100%', height: 'auto', padding: 16 }}>
                    <View style={{
                        width: '100%', height: 'auto', padding: 5, borderBottomColor: '#bbb',
                        borderBottomWidth: StyleSheet.hairlineWidth, paddingBottom: 10, paddingTop: 30,
                    }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Settings</Text>
                        <Text style={{ fontSize: 12 }}>Privacy and logout</Text>
                    </View>
                    <View style={{
                        width: '100%', height: 'auto', padding: 5, borderBottomColor: '#bbb',
                        borderBottomWidth: StyleSheet.hairlineWidth, paddingBottom: 10, paddingTop: 10,
                    }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Help and Support</Text>
                        <Text style={{ fontSize: 12 }}>Help center and other legal terms</Text>
                    </View>
                    <View style={{
                        width: '100%', height: 'auto', padding: 5, borderBottomColor: '#bbb',
                        borderBottomWidth: StyleSheet.hairlineWidth, paddingBottom: 10, paddingTop: 10,
                    }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Feedback and contact</Text>
                        <Text style={{ fontSize: 12 }}>Facing any difficulty feel free to contact us</Text>
                    </View>
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
export default Account;