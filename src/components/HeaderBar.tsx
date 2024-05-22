import React from 'react';
import { StyleSheet, Text, Touchable, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


type HeaderBarProp = {
    title?: string;
    navigation : any;
}

function HeaderBar({title, navigation}:HeaderBarProp): React.JSX.Element {
    const handLoginButtonPress = () => {
        navigation.push("Login")
    }
    return(
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>{title}</Text>
            <TouchableOpacity onPress={handLoginButtonPress}>
                <Text>Login</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        paddingVertical: 20,
        backgroundColor: '#56a568',
        alignItems: 'center'
    },
    headerText: {
        fontSize: 18,
        fontWeight: '500',
        color: 'white',
    }
})

export default HeaderBar;