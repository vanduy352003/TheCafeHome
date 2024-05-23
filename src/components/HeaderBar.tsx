import React from 'react';
import { StyleSheet, Text, Touchable, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';

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
            <View style = {styles.headerTitleContainer}>
                <Text style={styles.headerText}>{title}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={handleUserDetail} style = {styles.button}>
                    <Icon style={styles.headerText} name='user'></Icon>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        paddingVertical: 20,
        backgroundColor: '#56a568',
        alignItems: 'center',
        flexDirection : "row"
    },
    button : {
        borderColor : "white",
        alignItems : "center",
        justifyContent : "center",
        borderWidth : 1,
        borderRadius : 3,
        width : 30,
        height : 30,
    },
    headerText: {
        fontSize: 20,
        fontWeight: '500',
        color: 'white',
        
    },
    headerTitleContainer : {
        width : "90%",
        alignItems : "flex-start",
        paddingHorizontal : 20,
    },
    buttonContainer : {
        width : "10%",
        alignItems : "flex-end",
        paddingHorizontal : 10,
    }
})

export default HeaderBar;