import React from 'react'
import { Text, StyleSheet, View, Image, Dimensions, ImageBackground, } from 'react-native'
import Header from '../components/Header';
const { width, height } = Dimensions.get('window');
import { Button } from 'native-base';

const Eventcard = (props) => {
    return (
        <View style={{ width: width - 30,  backgroundColor: "#ffffff", flexDirection: 'row', marginLeft: 10, marginBottom: 8, borderWidth: 2, borderColor: "#b2b2b2b2" }}>
            <Image
                source={{ uri: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.2NG_xGmUqmfARWSKWZiWKAHaD0%26pid%3DApi&f=1" }}
                style={{ width: 170, height: 170, marginLeft: 5, }}
            />
            <View>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: "black", marginLeft: 10, }} >{props.item.Title}</Text>
                <Text style={{ fontSize: 14, fontWeight: '400', color: "black", marginLeft: 10, marginTop: 10, opacity: 0.7 }}>{props.item.caption}</Text>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', }}>
                    <Text style={{ fontSize: 14, fontWeight: '400', color: "black", marginLeft: 10, marginTop: 10, opacity: 0.7 }}>31 December</Text>
                    <Button style={{ width: 60, backgroundColor: '#ff1f5a', marginTop: 5, justifyContent: 'center', borderRadius: 15 }}>
                        <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold' }}>Details</Text>
                    </Button>
                </View>
            </View>
        </View>
    )
}

export default Eventcard
const styles = StyleSheet.create({
    top: {
        height: '30%',
        marginBottom: 10
    }
})
