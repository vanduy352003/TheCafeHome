import React, { useEffect, useMemo, useState } from "react";
import { ActivityIndicator, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FlatList, TextInput } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/AntDesign';
import { useCartStore, useDeliveryStore } from "../store/store";
import { getUserOrder } from "../api/orderApi";
import { currentUser } from "../api/loginApi";


function UserOrderScreen({navigation}:any): React.JSX.Element {
    const [orderList, setOrderList] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const handlePressBack = () => {
        navigation.navigate("Home")
    }

    useEffect(()=>{
        setIsLoading(true)
        //currentUser.userId
        getUserOrder(currentUser.userId).then(data => {
            setIsLoading(false)
            setOrderList(data)
        })
    },[currentUser])

    const countTotalProduct = (order) => {
        let count = 0
        for(let i=0;i<order.orderItems.length;i++) {
            count += order.orderItems[i].quantity
        }
        return count
    }

    return(
        <View style={styles.container}>
            <View style={styles.headerSection}>
                <TouchableOpacity style={styles.backButton} onPress={handlePressBack}>
                  <Icon style={styles.icon} name='left'></Icon>
                </TouchableOpacity>
                <Text style={styles.headerText}>Lịch sử order</Text>
            </View>
            <View style={styles.orderList}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={orderList}
                    renderItem={itemData => {
                        return (
                            <View style={styles.orderItem}>
                                <Text style={styles.orderNumber}>Order # {itemData.index+1}</Text>
                                <View>
                                    <Text>Delivery: {itemData.item.delivery}</Text>
                                    <Text numberOfLines={1} style={styles.address}>Address: {itemData.item.address}</Text>
                                    <View style={styles.viewFlexDirection}>
                                        <Text>Total product: {countTotalProduct(itemData.item)}</Text>
                                        <Text style={styles.text}>Total price: {itemData.item.finalPrice}đ</Text>
                                    </View>
                                </View>
                            </View>
                        )
                    }}
                    keyExtractor={(item, index) => item.orderId}
                ></FlatList>
            </View>
            {isLoading && (
                <View style={[styles.loadingIndicator]}>
                <ActivityIndicator size="large" />
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    icon : {
        fontSize : 25,
        color : '#56a568'
    },
    headerText: {
        textAlign: 'center',
        flex: 1,
        color: 'black',
        fontSize: 18,
        fontWeight: '500',
    },
    headerSection: {
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        paddingHorizontal: 10,
        marginBottom: 20
    },
    backButton: {
        position: 'absolute',
        left: 10,
        zIndex: 1
    },
    loadingIndicator: {
        position: 'absolute',
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        width: '100%',
        height: '100%',
    },
    orderList: {
        flex: 1
    },
    orderItem: {
        padding: 10,
        marginBottom: 10,
        backgroundColor: 'white',
        elevation: 2
    },
    orderNumber: {
        fontSize: 18,
        color: 'black',
        fontWeight: '500'
    },
    text: {
        fontSize: 16,
        color: 'black'
    },
    viewFlexDirection: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    address: {
        width: '80%'
    }
})

export default UserOrderScreen;