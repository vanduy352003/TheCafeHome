
import React, { useState } from "react";
import { Alert, ScrollView, TouchableOpacity, ViewBase } from "react-native";
import { Image, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import Icon2 from "react-native-vector-icons/Ionicons";

class radioButtonProp {
    selectedOption : any;
    onPress : any;
    option : string | undefined;
    price : Number | undefined
};
function RadioButtonChoice(prop : radioButtonProp): React.JSX.Element {
    const optionPress = () => {
        prop.onPress(prop.option, prop.price)
    }
    return (
        <View style = {{flexDirection : "row", marginTop : 10}}>
            <TouchableOpacity activeOpacity={1} onPress={optionPress} style = {styles.radioButton}>
                <Icon2 name = {prop.selectedOption === prop.option ? "radio-button-on" : "radio-button-off"} style = {{fontSize : 20}}></Icon2>
            </TouchableOpacity>
            <Text style = {styles.sizeContentText}>{prop.option} ({prop.price?.toString()}đ)</Text>
        </View>
    )
}

function ProductInfomation({navigation} : any) : React.JSX.Element {
    const [selectedOption, setSelectedOption] = useState("");
    const [price, setPrice] = useState(0);
    const [favorite, setFavorite] = useState(0);
    const [favoriteIconName, setFavoriteIconName] = useState("hearto")
    const handleFavoritePress = () => {
        if(favorite == 0) {
            setFavorite(1);
            setFavoriteIconName("heart")
        }
        else {
            setFavorite(0);
            setFavoriteIconName("hearto")
        }
    }
    const handleOptionPress = (option : string, price : number) => {
        setSelectedOption(option)
        setPrice(price)
    }
    const handlePressBack = () => {
        navigation.goBack();
    }
    const handleAdd = () => {
        Alert.alert("Chua them")
        // 
        navigation.goBack();
    }
    return (
        <View style = {styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={handlePressBack}>
                    <Icon style={styles.icon} name="left"></Icon>
                </TouchableOpacity>
                <Text style={styles.headerText}>Thông tin sản phẩm</Text>
            </View>
            <View style = {styles.topContainer}>
                <Image style = {styles.categoryImage} source={require('../assets/images/hongtra.png')}/>
            </View>
            <View style = {styles.bottomContainer}>
                <View style = {styles.informationContainer}>
                    <View style = {{flexDirection : "row"}}>
                        <View style = {{flex : 3, alignItems : "flex-start", justifyContent : "center"}}>
                            <Text style = {styles.productName}>Trà sữa</Text>
                        </View>
                        <View style = {{flex : 2, alignItems : "flex-end", justifyContent : "center"}}>
                            <TouchableOpacity style = {styles.button} onPress={handleFavoritePress} activeOpacity={1}>
                                <Icon name={favoriteIconName} style = {styles.icon}>
                                </Icon>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <Text style = {styles.productPrice}>65000</Text>
                    </View>
                </View>
                <View style = {styles.sizeContainer}> 
                    <Text style = {styles.sizeText}>Size</Text>
                    <RadioButtonChoice option = "Lớn" price = {69000} onPress = {handleOptionPress} selectedOption={selectedOption}>
                    </RadioButtonChoice>
                    <RadioButtonChoice option = "Vừa" price = {65000} onPress = {handleOptionPress} selectedOption={selectedOption}>
                    </RadioButtonChoice>
                    <RadioButtonChoice option = "Nhỏ" price = {60000} onPress = {handleOptionPress} selectedOption={selectedOption}>
                    </RadioButtonChoice>
                </View>
            </View>
            
            <View style = {{backgroundColor : "white"}}>
                <TouchableOpacity style = {styles.addButton} onPress={handleAdd} disabled={price <= 0 ? true : false}>
                    <Text style = {{fontSize : 20, color : "white"}}>{price}</Text>
                </TouchableOpacity>
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor : "#E0E0E0"
    },
    topContainer : {
        flex:1,
    },
    categoryImage : {
        width : "100%",
        height : "100%"
    },
    bottomContainer : {
        flex : 1,
    },
    informationContainer : {
        paddingTop : 15,
        paddingBottom : 10,
        marginBottom : 15,
        backgroundColor : "white"
    },
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
      color: 'black',
      textAlign: 'center',
      flex: 1
    },

    button: {
      width : 35,
      height : 35,
      borderRadius: 10,
      marginRight : 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    productName : {
        fontSize : 30,
        marginLeft : 10,
    },
    productPrice : {
        fontSize : 18,
        marginTop : 10,
        marginLeft : 10
    },
    icon : {
        fontSize : 25,
        color : "#56a568"
    },
    sizeContainer : {
        flex : 1,
        paddingTop : 15,
        backgroundColor : "white"
    },
    sizeText : {
        fontSize : 20,
        marginLeft : 10,
        fontWeight : "bold",
    },
    sizeContentText : {
        fontSize : 16,
        marginLeft : 10
    },
    radioButton : {
        marginLeft : 10,
        fontSize : 20,
    },
    addButton : {
        alignSelf : "center",
        borderRadius : 5,
        height : 40,
        width : "90%",
        justifyContent : "center",
        alignItems : "center",
        backgroundColor : "#56a568",
        marginTop : 5,
        marginBottom : 15
    }
});
export default ProductInfomation;