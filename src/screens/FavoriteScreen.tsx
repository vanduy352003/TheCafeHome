import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import ProductCardThree from "../components/ProductCardThree";

const productList = [
    {name: 'Trà sữa', price: 10, id: '1'},
    {name: 'Trà sữa đào', price: 20, id: '2'},
    {name: 'Trà sữa matcha', price: 30, id: '3'},
    {name: 'Trà sữa cam', price: 40, id: '4'},
    {name: 'Cà phê trà', price: 50, id: '5'},
    {name: 'Cà phê sửa', price: 60, id: '6'},
  ];

function FavoriteScreen({navigation}:any): React.JSX.Element {
    const handlePressBack = () => {
        navigation.goBack();
    }
    const handlePressCard = () => {
        navigation.push('Detail')
    }
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={handlePressBack}>
                    <Icon style={styles.icon} name="left"></Icon>
                </TouchableOpacity>
                <Text style={styles.headerText}>Sản phẩm Yêu Thích</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.listProduct}>
            {[...productList].map((item, index) => (
              <ProductCardThree
                key={index}
                product={productList[index]}
                navigateToDetail={handlePressCard}></ProductCardThree>
            ))}
          </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
      },
      header: {
        flexDirection: 'row',
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey',
        paddingHorizontal: 20,
        alignItems: 'center',
        // justifyContent: 'center'
      },
      listProduct: {
        paddingHorizontal: 20,
        marginVertical: 20,
      },
      icon: {
        fontSize: 20,
        fontWeight: '500',
        color: 'black',
        alignSelf: 'flex-start',
      },
      headerText: {
        fontSize: 20,
        fontWeight: '500',
        color: 'black',
        textAlign: 'center',
        flex: 1
      }
})

export default FavoriteScreen;