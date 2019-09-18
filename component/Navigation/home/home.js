import React from 'react';
import { View, Text, ScrollView,TextInput,Image } from 'react-native';

class Home extends React.Component {
    render() {
        return (
            <View>
                <View style={{ justifyContent: 'flex-start', padding: 15, paddingTop: 30, paddingBottom: 30, width: '100%', height: 'auto', elevation: 5, backgroundColor: 'white' }}>
                    <TextInput placeholder="Type here to search ..." placeholderTextColor='#404040' style={{ alignItems: 'center', borderWidth: 2, padding: 5, width: '100%' }} />
                </View>
                <Text style={{ padding: 16, fontSize: 15, fontWeight: 'bold' }}>Fresh Recomendations</Text>
                <ScrollView bounces={true} style={{ width: '100%', height: 'auto', padding: 5, paddingLeft: 10, paddingRight: 10}}>
                    <View style={{ borderWidth: 1, borderColor: 'black', width: '48%',margin:3,padding:2, height: 'auto' }}>
                        <View>
                            <View><Image style={{ width: 157, height: 160 }} source={require('../Assets/product.jpeg')} /></View>
                            <Text style={{fontWeight:'bold',marginBottom:2}}>Price</Text>
                        </View>
                        <Text>Location of the product or the owner</Text>
                    </View>
                    <View style={{ borderWidth: 1, borderColor: 'black', width: '48%',margin:3,padding:2, height: 'auto' }}>
                        <View>
                            <View><Image style={{ width: 157, height: 160 }} source={require('../Assets/product.jpeg')} /></View>
                            <Text style={{fontWeight:'bold',marginBottom:2}}>Price</Text>
                        </View>
                        <Text>Location of the product or the owner</Text>
                    </View>
                    <View style={{ borderWidth: 1, borderColor: 'black', width: '48%',margin:3,padding:2, height: 'auto' }}>
                        <View>
                            <View><Image style={{ width: 157, height: 160 }} source={require('../Assets/product.jpeg')} /></View>
                            <Text style={{fontWeight:'bold',marginBottom:2}}>Price</Text>
                        </View>
                        <Text>Location of the product or the owner</Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
export default Home;