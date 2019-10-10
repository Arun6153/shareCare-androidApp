import React from 'react';
import {View ,Text} from 'react-native';

class Acitvity extends React.Component{
    render(){
        return (
            <View>
                 <View style={{ justifyContent: 'flex-start', padding: 15, paddingTop: 20, paddingBottom: 20, width: '100%', height: 'auto', elevation: 5, backgroundColor: 'white' }}>
                    <Text style={{fontSize:23,fontWeight:'bold',alignItems:'center', padding:5,width:'100%'}} >Acitvity</Text>
                </View>
            </View>
        );
    }
}
export default Acitvity;