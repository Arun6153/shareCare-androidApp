import React from 'react';
import { View, Text, Image ,ScrollView ,StyleSheet} from 'react-native';

class AdItem extends React.Component {
    render() {
        return (
            <View>
                <View style={styles.actionBar}>
                    <Text style={{ fontSize: 23, fontWeight: 'bold', alignItems: 'center', padding: 5, width: '100%' }} >Post Ad.</Text>
                </View>
                <Text style={{ padding: 16, fontSize: 15, fontWeight: 'bold' }}>Some Categories</Text>
                <ScrollView bounces={true} contentContainerStyle={{ width: '100%', height: 'auto', padding: 5, paddingLeft: 17, paddingRight: 17,justifyContent:'flex-start',flexWrap:'wrap',flexDirection:'row',paddingBottom:165}}>
                    <View style={{ borderWidth: 1, borderColor: 'black', width:155, margin: 3, padding: 2, height:155,justifyContent: 'center',alignItems:'center'}}>
                        <View><Image style={{ width: 10, height: 10 }} source={require('../Assets/product.jpeg')} /></View>
                        <Text style={{ fontWeight: 'bold', marginBottom: 2 }}>Electronics</Text>
                    </View>
                    <View style={{ borderWidth: 1, borderColor: 'black', width:155, margin: 3, padding: 2, height:155,justifyContent: 'center',alignItems:'center' }}>
                    <View><Image style={{ width: 10, height: 10 }} source={require('../Assets/product.jpeg')} /></View>
                        <Text style={{ fontWeight: 'bold', marginBottom: 2 }}>Cars</Text>
                    </View>
                    <View style={{ borderWidth: 1, borderColor: 'black', width:155, margin: 3, padding: 2, height:155,justifyContent: 'center',alignItems:'center' }}>
                    <View><Image style={{ width: 10, height: 10 }} source={require('../Assets/product.jpeg')} /></View>
                        <Text style={{ fontWeight: 'bold', marginBottom: 2 }}>Mobile Phones</Text>
                    </View>
                    <View style={{ borderWidth: 1, borderColor: 'black', width:155, margin: 3, padding: 2, height:155,justifyContent: 'center',alignItems:'center' }}>
                    <View><Image style={{ width: 10, height: 10 }} source={require('../Assets/product.jpeg')} /></View>
                        <Text style={{ fontWeight: 'bold', marginBottom: 2 }}>Books</Text>
                    </View>
                    <View style={{ borderWidth: 1, borderColor: 'black', width:155, margin: 3, padding: 2, height:155,justifyContent: 'center',alignItems:'center' }}>
                    <View><Image style={{ width: 10, height: 10 }} source={require('../Assets/product.jpeg')} /></View>
                        <Text style={{ fontWeight: 'bold', marginBottom: 2 }}>Bikes</Text>
                    </View>
                    <View style={{ borderWidth: 1, borderColor: 'black', width:155, margin: 3, padding: 2, height:155,justifyContent: 'center',alignItems:'center' }}>
                    <View><Image style={{ width: 10, height: 10 }} source={require('../Assets/product.jpeg')} /></View>
                        <Text style={{ fontWeight: 'bold', marginBottom: 2 }}>Sports</Text>
                    </View>
                    <View style={{ borderWidth: 1, borderColor: 'black', width:155, margin: 3, padding: 2, height:155,justifyContent: 'center',alignItems:'center' }}>
                    <View><Image style={{ width: 10, height: 10 }} source={require('../Assets/product.jpeg')} /></View>
                        <Text style={{ fontWeight: 'bold', marginBottom: 2 }}>Fashion</Text>
                    </View>
                    <View style={{ borderWidth: 1, borderColor: 'black', width:155, margin: 3, padding: 2, height:155,justifyContent: 'center',alignItems:'center' }}>
                    <View><Image style={{ width: 10, height: 10 }} source={require('../Assets/product.jpeg')} /></View>
                        <Text style={{ fontWeight: 'bold', marginBottom: 2 }}>Services</Text>
                    </View>
                    <View style={{ borderWidth: 1, borderColor: 'black', width:155, margin: 3, padding: 2, height:155,justifyContent: 'center',alignItems:'center' }}>
                    <View><Image style={{ width: 10, height: 10 }} source={require('../Assets/product.jpeg')} /></View>
                        <Text style={{ fontWeight: 'bold', marginBottom: 2 }}>Furniture</Text>
                    </View>
                    <View style={{ borderWidth: 1, borderColor: 'black', width:155, margin: 3, padding: 2, height:155,justifyContent: 'center',alignItems:'center' }}>
                    <View><Image style={{ width: 10, height: 10 }} source={require('../Assets/product.jpeg')} /></View>
                        <Text style={{ fontWeight: 'bold', marginBottom: 2 }}>Property</Text>
                    </View>
                    
                </ScrollView>

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

export default AdItem;