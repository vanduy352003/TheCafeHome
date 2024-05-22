import React from 'react';
import { StyleSheet, Text, Touchable, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


type HeaderBarProp = {
    title?: string;
}

function HeaderBar({title}:HeaderBarProp): React.JSX.Element {
    return(
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        paddingVertical: 20,
        backgroundColor: '#56a568',
        alignItems: 'center',
        flexDirection : "column"
    },
    headerText: {
        fontSize: 18,
        fontWeight: '500',
        color: 'white',
    }
})

export default HeaderBar;