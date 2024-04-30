//Tui ko biết cái này có tên component 
//là gì luôn nhưng nó là cái phần hiện phương thức
//đặt + tiềncho mình biết ơ gần gốc dưới á
import React from "react";
import { Dimensions, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import  Icon  from "react-native-vector-icons/AntDesign";

const window = Dimensions.get('window')

function SmallCart(): React.JSX.Element {
    
    return(
        <TouchableWithoutFeedback>
            <View style={styles.container}>
                <View style={styles.textView}>
                    <Text style={styles.textDelivery}>Giao đến</Text>
                    <Text style={styles.textAddress} numberOfLines={1} ellipsizeMode="tail">Số 1 Võ Văn Ngân, Thủ Đức, Thành Phố Hồ Chí Minh</Text>
                </View>
                <TouchableOpacity style={styles.button}>
                    <View style={styles.numberView}>
                        <Text style={styles.numberText}>199</Text>
                    </View>
                    <Text style={styles.moneyText} numberOfLines={1} ellipsizeMode="tail">1.000.000.đ</Text>
                    <Icon style={styles.icon} name="right"></Icon>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        elevation: 5,
        width: window.width - 20,
        height: 80,
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 120,
        alignSelf: 'center',
        borderRadius: 20,
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center'
    },
    textView: {
        width: window.width - 40 - 15 - 130
    },
    button: {
        width: 140,
        height: 50,
        backgroundColor: '#56a568',
        borderRadius: 50,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    numberView: {
        backgroundColor: 'white',
        width: 30,
        height: 30,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5
    },
    numberText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#56a568',
        borderRadius: 1
    },
    moneyText: {
        fontSize: 16,
        fontWeight: '500',
        color: 'white'
    },
    icon: {
        color: 'white',
        fontWeight: '500',
        fontSize: 14
    },
    textDelivery: {
        color: 'grey',
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 5
    },
    textAddress: {
        color: 'black',
        fontSize: 16,
        fontWeight: '500'
    }

})

export default SmallCart;