import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import ProductCardThree from "../components/ProductCardThree";
import { Product } from "../model/product";

const productList : Product[] = [
  {productName: 'Trà sữa', productPrice: 10, id: '1'},
  {productName: 'Trà sữa đào', productPrice: 20, id: '2'},
  {productName: 'Trà sữa matcha', productPrice: 30, id: '3'},
  {productName: 'Trà sữa cam', productPrice: 40, id: '4'},
  {productName: 'Cà phê trà', productPrice: 50, id: '5'},
  {productName: 'Cà phê sửa', productPrice: 60, id: '6'},
];

function FavoriteScreen({navigation}:any): React.JSX.Element {
    const handlePressBack = () => {
        navigation.goBack();
    }
    const handlePressCard = (product : Product) => {
        navigation.push('Detail', {...product})
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