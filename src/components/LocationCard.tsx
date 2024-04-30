import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

const window = Dimensions.get('window');

function LocationCard(): React.JSX.Element {
    return(
        <View style={styles.container}>
            <Image style={styles.image} resizeMode="cover" source={require('../assets/images/hongtra.png')}></Image>
            <View>
                <Text style={styles.shopText}>The Cafe Home</Text>
                <Text style={styles.locationName}>HCM Cao Thắng</Text>
                <Text style={styles.distance}>Cách đây 0,01 km</Text>
                <Text></Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: window.width - 20,
        height: 120,
        backgroundColor: 'white',
        flexDirection: 'row',
        padding: 10,
        marginBottom: 20,
        alignItems: 'center',
        elevation: 4,
        borderRadius: 10,
        borderWidth: 0.3,
        borderColor: 'lightgrey'
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginRight: 20,
    },
    shopText: {
        fontSize: 18,
        fontWeight: '500',
        color: 'grey',
        marginBottom: 2,
        marginTop: 10
    },
    locationName: {
        fontSize: 18,
        fontWeight: '400',
        color: 'black',
        marginBottom: 10
    },
    distance: {
        fontSize: 18,
        color: 'lightgrey'
    }
})

export default LocationCard;