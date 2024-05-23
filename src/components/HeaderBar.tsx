import React from 'react';
import { StyleSheet, Text, Touchable, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


type HeaderBarProp = {
    title?: string;
    navigation : any;
}

function HeaderBar({title, navigation}:HeaderBarProp): React.JSX.Element {
    const handleUserDetail = () => {
        navigation.navigate("UserDetail")
    }
    return(
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>{title}</Text>
            <TouchableOpacity>
                <Text style={styles.headerText} onPress={handleUserDetail}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        paddingVertical: 20,
        backgroundColor: '#56a568',
        alignItems: 'center',
        justifyContent : "center",
        flexDirection : "row"
    },
    headerText: {
        fontSize: 18,
        fontWeight: '500',
        color: 'white',
    }
})

export default HeaderBar;