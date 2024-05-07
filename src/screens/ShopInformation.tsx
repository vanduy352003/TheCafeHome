
import React, { useState } from "react";
import { Alert, Dimensions, ScrollView, ScrollViewComponent, TouchableOpacity } from "react-native";
import { Image, StyleSheet, Text, View } from "react-native";

const window = Dimensions.get('window');

class Shop {
    name : string | undefined;
    address : string | undefined;
    phoneNumber : string | undefined;
}

function ShopInformation(shop : Shop): React.JSX.Element {

    return (
        <View>
            <ScrollView showsHorizontalScrollIndicator={true}>
                <View style = {styles.imageContainer}>

                </View>
            </ScrollView>
            <View>
                <Text style = {styles.title1}> THE COFFEE HOUSE </Text>
                <Text style = {styles.title2}> HCM Hoang Dieu 2 </Text>
                <Text style = {styles.title3}> Giờ mở cửa </Text>
                <View style = {styles.information}>
                    <View style = {{flexDirection : "row"}}> 
                        <TouchableOpacity style = {styles.button}>
                            
                        </TouchableOpacity>
                        <Text style = {styles.content}>
                            66E Hoàng Diệu
                        </Text>
                    </View>
                </View>

                
                <View style = {styles.information}>
                    <View style = {{flexDirection : "row"}}> 
                        <TouchableOpacity style = {styles.button}>
                            
                        </TouchableOpacity>
                        <Text style = {styles.content}>
                            Thêm vào danh sách yêu thích
                        </Text>
                    </View>
                </View>

                
                <View style = {styles.information}>
                    <View style = {{flexDirection : "row"}}> 
                        <TouchableOpacity style = {styles.button}>
                            
                        </TouchableOpacity>
                        <Text style = {styles.content}>
                            Liên hệ: 0123456789
                        </Text>
                    </View>
                </View>

                
                <View style = {styles.information}>
                    <View style = {{flexDirection : "row"}}> 
                        <TouchableOpacity style = {styles.button}>
                            
                        </TouchableOpacity>
                        <Text style = {styles.content}>
                            Chia sẻ với bạn bè
                        </Text>
                    </View>
                </View>
                <TouchableOpacity style = {styles.button2}>
                    <Text style = {{fontSize : 18, color : "white"}}> Đặt hàng </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    imageContainer : {
        width : window.width,
        height : window.width,
        backgroundColor : "red"
    },
    title1 : {
        fontSize : 14,
        marginLeft : 10,
        marginTop : 10
    },
    title2 : {
        fontSize : 20,
        marginLeft : 10,
        fontWeight : "bold"
    },
    title3 : {
        fontSize : 18,
        marginLeft : 10,
        marginBottom : 10
    },
    information : {
        borderWidth : 1,
        borderColor : "#000000"
    },
    button : {
        width : 40,
        height : 40,
        backgroundColor : "lightgrey",
        borderRadius : 10,
        marginHorizontal : 20,
        marginVertical : 10
    },
    button2 : {
        width : window.width - 40,
        height : 50,
        borderRadius : 10,
        marginHorizontal : 20,
        marginVertical : 10,
        backgroundColor : "#56a568",
        justifyContent : "center",
        alignItems : "center"
    },
    content : {
        textAlignVertical : "center",
    },
})

export default ShopInformation;