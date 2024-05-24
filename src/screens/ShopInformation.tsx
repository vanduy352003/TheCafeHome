
import React, { useState } from "react";
import { Alert, Dimensions, ScrollView, ScrollViewComponent, TouchableOpacity } from "react-native";
import { Image, StyleSheet, Text, View } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/AntDesign";
import Icon3 from "react-native-vector-icons/Ionicons";
import Icon4 from "react-native-vector-icons/Feather";

const window = Dimensions.get('window');

class Shop  {
    name : string | undefined;
    address : string | undefined;
    phoneNumber : string | undefined;
    imageUrl: string | undefined;
}

function ShopInformation({route, navigation}:any): React.JSX.Element {
    const {id, locationName, locationAddress, imageUrl} = route.params
    const handlePressBack = () => {
        navigation.goBack();
    }
    return (
        <View style = {{flex:1}}>
            <View style={styles.header}>
                <TouchableOpacity onPress={handlePressBack}>
                    <Icon style={styles.headerIcon} name='left'></Icon>
                </TouchableOpacity>
                <Text style={styles.headerText}>Thông tin sản phẩm</Text>
            </View>
            <ScrollView>
                <View style = {styles.imageContainer}>
                    <Image style={styles.image} resizeMode="cover" source={imageUrl?{uri:imageUrl}:require('../assets/images/hongtra.png')}></Image>
                </View>
                <View style = {{flex:1}}>
                    <Text style = {styles.title1}> THE CAFE HOME </Text>
                    <Text style = {styles.title2}> {locationName} </Text>
                    <Text style = {styles.title3}> Giờ mở cửa </Text>
                    <View style = {styles.information}>
                        <View style = {{flexDirection : "row"}}> 
                            <TouchableOpacity style = {styles.button}>
                                <Icon1 name={"location-arrow"} style = {styles.icons}></Icon1>
                            </TouchableOpacity>
                            <Text style = {styles.content}>
                                {locationAddress}
                            </Text>
                        </View>
                    </View>

                    
                    <View style = {styles.information}>
                        <View style = {{flexDirection : "row"}}> 
                            <TouchableOpacity style = {styles.button}>
                                <Icon2 name={"hearto"} style = {styles.icons}></Icon2>
                            </TouchableOpacity>
                            <Text style = {styles.content}>
                                Thêm vào danh sách yêu thích
                            </Text>
                        </View>
                    </View>

                    
                    <View style = {styles.information}>
                        <View style = {{flexDirection : "row"}}> 
                            <TouchableOpacity style = {styles.button}>
                                <Icon3 name={"call"} style = {styles.icons}></Icon3>
                            </TouchableOpacity>
                            <Text style = {styles.content}>
                                Liên hệ: 0123456789
                            </Text>
                        </View>
                    </View>

                    
                    <View style = {styles.information}>
                        <View style = {{flexDirection : "row"}}> 
                            <TouchableOpacity style = {styles.button}>
                                <Icon4 name={"share"} style = {styles.icons}></Icon4>
                            </TouchableOpacity>
                            <Text style = {styles.content}>
                                Chia sẻ với bạn bè
                            </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style = {{height : 70}}>
                <TouchableOpacity style = {styles.button2}>
                    <Text style = {{fontSize : 18, color : "white"}}> Đặt hàng </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const blackRGB = '#202020'
const styles = StyleSheet.create({
    imageContainer : {
        width : window.width,
        height : window.width,
        // backgroundColor : "red"
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
        borderBottomWidth : 1,
        borderColor : "#000000"
    },
    button : {
        width : 40,
        height : 40,
        backgroundColor : "lightgrey",
        borderRadius : 10,
        marginHorizontal : 20,
        marginVertical : 10,
        alignItems : "center",
        justifyContent : "center"
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
        fontSize : 15,
        textAlignVertical : "center",
        width: '80%'
    },
    icons : {fontSize : 20},

    
    header: {
        flexDirection: 'row',
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey',
        paddingHorizontal: 20,
        alignItems: 'center',
        backgroundColor : 'white',
        // justifyContent: 'center'
      },
      headerText: {
        fontSize: 20,
        fontWeight: '500',
        color: blackRGB,
        textAlign: 'center',
        flex: 1,
      },
      headerIcon : {
          color : blackRGB,
          fontSize : 20,
      },
      image: {
        width: "100%",
        height: "100%",
        borderRadius: 10,
        marginRight: 20,
    },
})

export default ShopInformation;