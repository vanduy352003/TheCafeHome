import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


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
        alignItems: 'center'
    },
    headerText: {
        fontSize: 18,
        fontWeight: '500',
        color: 'white',
    }
})

export default HeaderBar;