import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDeliveryStore } from "../store/store";

const window = Dimensions.get('window');

type locationProps = {
    navigationToDetail: Function,
    name: String,
    address: String,
    id: Number,
    isQuickPick: Boolean,
}

function LocationCard({navigationToDetail, name, address, id, isQuickPick}:locationProps): React.JSX.Element {
    const handleNavigate = () => {
        isQuickPick?navigationToDetail(name, address, id):navigationToDetail();
    }

    return(
        <TouchableOpacity style={styles.container} onPress={handleNavigate}>
            <Image style={styles.image} resizeMode="cover" source={require('../assets/images/hongtra.png')}></Image>
            <View>
                <Text style={styles.shopText}>{name}</Text>
                <Text style={styles.locationName}>{address}</Text>
                <Text style={styles.distance}>Cách đây 0,01 km</Text>
                <Text></Text>
            </View>
        </TouchableOpacity>
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
        elevation: 2,
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