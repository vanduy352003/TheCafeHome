
import React, { useState } from 'react';
import { Alert, Dimensions, ScrollView, TouchableOpacity, ViewBase } from 'react-native';
import { Image, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Ionicons';
import { useCartStore, useFavoriteStore } from '../store/store';
import { formatMoney } from '../utils/format';
import FavoriteScreen from './FavoriteScreen';
import { currentUser } from '../api/loginApi';
import Toast from 'react-native-toast-message';


const window = Dimensions.get('window');

class radioButtonProp {
    children : React.ReactNode;
    selectedOption : any;
    onPress : any;
    option : string | undefined;
    price : Number | undefined;
    id?: Number | undefined;
};
function RadioButtonChoice(prop : radioButtonProp): React.JSX.Element {
    const optionPress = () => {
        prop.onPress(prop.option, prop.price, prop.id)
    }
    return (
        <View style = {{flexDirection : 'row', marginTop : 10}}>
            <TouchableOpacity activeOpacity={1} onPress={optionPress} style = {styles.radioButton}>
                <Icon2 name = {prop.selectedOption === prop.option ? 'radio-button-on' : 'radio-button-off'} style = {styles.radioButtonIcon}></Icon2>
            </TouchableOpacity>
            {prop.children}
        </View>
    )
}


function ProductInfomation({route, navigation} : any) : React.JSX.Element {
    const {productId, productName, imageUrl, description, productVariant, toppings} = route.params
    const [selectedOption, setSelectedOption] = useState();
    const [selectedTopping, setselectedTopping] = useState();
    const [selectedToppingId, setSelectedToppingId] = useState();
    const [price, setPrice] = useState(0);
    const [toppingPrice, setToppingPrice] = useState(0);
    const {cart, addToCart} = useCartStore((state)=>({
        cart: state.cart,
        addToCart: state.addToCart,
    }));
    const {getUserFavorites, addToFavorites, removeFromFavorites} = useFavoriteStore()
    const favorites = getUserFavorites(currentUser.userId)
    const [favorite, setFavorite] = useState(favorites.includes(productId)?1:0);
    const [favoriteIconName, setFavoriteIconName] = useState(favorites.includes(productId)?'heart':'hearto');
    console.log(favorites)
    const handleFavoritePress = () => {
        if(favorite == 0) {
            setFavorite(1);
            setFavoriteIconName('heart')
            addToFavorites(productId, currentUser.userId)
            showSuccess()
        }
        else {
            setFavorite(0);
            setFavoriteIconName('hearto')
            removeFromFavorites(productId, currentUser.userId)
            showInfo()
        }
    }
    const handleOptionPress = (option : string, price : number) => {
        setSelectedOption(option)
        setPrice(price)
    }
    const handleToppingPress = (topping : string, price : number, id: number) => {
        console.log(topping)
        setselectedTopping(topping)
        setToppingPrice(price)
        setSelectedToppingId(id)
    } 
    const handlePressBack = () => {
        navigation.goBack();
    }
    const handleAdd = () => {
        if(selectedOption == "" || selectedTopping == "")
            return;

        addToCart({"id":productId,"price":price,"productName":productName,"variantName":selectedOption}, {"toppingName":selectedTopping, "toppingId":selectedToppingId, "price":toppingPrice})
        navigation.goBack();
    }
    const showSuccess = () => {
        Toast.show({
            type: 'success',
            text1: 'Product have been added to Favourite',
        });
    };
    const showInfo = () => {
        Toast.show({
            type: 'info',
            text1: 'Product have been removed from Favourite',
        });
    };
    return (
        <View style = {styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={handlePressBack}>
                    <Icon style={styles.radioButtonIcon} name='left'></Icon>
                </TouchableOpacity>
                <Text style={styles.headerText}>Thông tin sản phẩm</Text>
            </View>
            <ScrollView>
                <View style = {styles.topContainer}>
                    <Image style = {styles.categoryImage} source={imageUrl?{uri:imageUrl}:require('../assets/images/hongtra.png')}/>
                </View>
                <View style = {styles.bottomContainer}>
                    <View style = {styles.informationContainer}>
                        <View style = {{flexDirection : 'row'}}>
                            <View style = {{flex : 3, alignItems : 'flex-start', justifyContent : 'center'}}>
                                <Text style = {styles.productName}>{productName}</Text>
                            </View>
                            <View style = {{flex : 2, alignItems : 'flex-end', justifyContent : 'center'}}>
                                <TouchableOpacity style = {styles.button} onPress={handleFavoritePress} activeOpacity={1}>
                                    <Icon name={favoriteIconName} style = {styles.icon}>
                                    </Icon>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View>
                            <Text style = {styles.productPrice}>{formatMoney(productVariant[0]?productVariant[0].price:0)}đ</Text>
                        </View>
                    </View>
                    <View style = {styles.sizeContainer}> 
                        <Text style = {styles.sizeText}>Size</Text>
                        {[...productVariant].map((item, index) =>
                            <RadioButtonChoice key={item.id} option = {item.variant.variantName} price = {item.price} onPress = {handleOptionPress} selectedOption={selectedOption}>
                                <Text style = {styles.sizeContentText}>{item.variant.variantName} ({formatMoney(item.price)}đ)</Text>
                            </RadioButtonChoice>
                        )}
                    </View>

                    
                    <View style = {styles.sizeContainer}> 
                        <Text style = {styles.sizeText}>Topping</Text>
                        {[...toppings].map((item, index) =>
                            <RadioButtonChoice key={item.toppingId} id={item.toppingId} option = {item.toppingName} price = {item.price} onPress = {handleToppingPress} selectedOption={selectedTopping}>
                                <Text style = {styles.sizeContentText}>{item.toppingName} ({formatMoney(item.price)}đ)</Text>
                            </RadioButtonChoice>
                        )}
                    </View>
                </View>
            </ScrollView>
            <View style = {{backgroundColor : 'white'}}>
                <TouchableOpacity style = {styles.addButton} onPress={handleAdd} disabled={price <= 0 ? true : false}>
                    <Text style = {{fontSize : 20, color : 'white'}}>{price + toppingPrice}</Text>
                </TouchableOpacity>
            </View>
            <Toast />
        </View>
        
    )
}

const blackRGB = '#202020'
const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor : '#E0E0E0'
    },
    topContainer : {
        width : window.width,
        height : window.width
    },
    categoryImage : {
        width : '100%',
        height : '100%'
    },
    bottomContainer : {

    },
    informationContainer : {
        paddingTop : 15,
        paddingBottom : 10,
        marginBottom : 15,
        backgroundColor : 'white'
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
      color: blackRGB,
      textAlign: 'center',
      flex: 1,
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
        color : blackRGB,
    },
    productPrice : {
        fontSize : 18,
        marginTop : 10,
        marginLeft : 10,
        color : blackRGB,
    },
    icon : {
        fontSize : 25,
        color : '#56a568'
    },
    sizeContainer : {
        flex : 1,
        paddingTop : 15,
        backgroundColor : 'white',
        paddingBottom : 15,
        marginBottom : 15
    },
    sizeText : {
        fontSize : 20,
        marginLeft : 10,
        fontWeight : 'bold',
        color : blackRGB
    },
    sizeContentText : {
        fontSize : 16,
        marginLeft : 10,
        color : blackRGB,
    },
    radioButton : {
        marginLeft : 10,
        fontSize : 20,
    },
    radioButtonIcon : {
        color : blackRGB,
        fontSize : 20,
    },
    addButton : {
        alignSelf : 'center',
        borderRadius : 5,
        height : 40,
        width : '90%',
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : '#56a568',
        marginTop : 5,
        marginBottom : 15
    }
});
export default ProductInfomation;